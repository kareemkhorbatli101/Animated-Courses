#!/usr/bin/env python3
"""transpose.py — move the ten units of the Logistics Management book from Syria
to ten other non-English-speaking countries.

Each unit has a generic layer (country name, adjective, three cities) and a list
of one-off substitutions for the customs authority, the registry, the corridors
and ports, the national context and the cultural terms, none of which can be
renamed mechanically.  The one-offs run first so that a phrase naming Syria is
rewritten whole before the generic layer touches the words inside it.  Appendix
A and Appendix B are transposed section by section, so each unit's answers and
transcripts move with the unit they belong to.
"""
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "english-for-logistics-international/content"

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

# the registry a forwarder is entered in before it may trade
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

# the customs authority that clears what crosses the border
CUS = {
 1:  "General Department of Customs",
 2:  "Turkish Customs Administration",
 3:  "National Customs Agency",
 4:  "Customs and Indirect Tax Administration",
 5:  "Directorate General of Customs",
 6:  "Federal Revenue Customs Service",
 7:  "Egyptian Customs Authority",
 8:  "Thai Customs Department",
 9:  "National Revenue Administration",
 10: "Kenya Revenue Authority Customs",
}

ONE_OFF = {
 1: [
  ("Syria sits on old trade roads between the Mediterranean, Türkiye, Iraq and the Gulf. A forwarder is entered in the commercial register before it may trade, the General Customs Directorate clears every import and export, and the General Company for Land Transport and the port authorities at Latakia and Tartous handle the freight itself.",
   "Vietnam sits on sea lanes between China, the Mekong countries and the whole Pacific. A forwarder is entered in the national business register before it may trade, the General Department of Customs clears every import and export, and the port authorities at Hải Phòng and Cái Mép handle the freight itself."),
  ("Many logistics firms in Syria are family businesses. Some run lorries to Beirut, Amman and the Turkish border crossings. Others operate warehouses and cold stores for food, pharmaceuticals and textiles, where Syrian goods are consolidated before export. Since the conflict, much logistics work has gone into repairing routes, finding new crossings and holding on to customers abroad.",
   "Many logistics firms in Vietnam are family businesses. Some run lorries to Lào Cai, Mộc Bài and the Lao border crossings. Others operate warehouses and cold stores for seafood, coffee and garments, where Vietnamese goods are consolidated before export. As volumes have risen, much logistics work has gone into easing port congestion, finding inland depots and holding on to customers abroad."),
  ("Logistics staff in Syria often face challenges including fuel that is costly and scarce, roads and bridges that were damaged, and long waits at a crossing. Despite these obstacles, they remain committed to delivering complete consignments and rebuilding confidence in Syrian supply.",
   "Logistics staff in Vietnam often face challenges including crowded ports, roads that flood in the monsoon, and long waits for an inspection. Despite these obstacles, they remain committed to delivering complete consignments and building confidence in Vietnamese supply."),
  ("2. Name three kinds of goods Syrian warehouses and cold stores hold.",
   "2. Name three kinds of goods Vietnamese warehouses and cold stores hold."),
  ("a food company in Damascus called Barada Distribution",
   "a food company in Hanoi called Sông Hồng Distribution"),
  ("Syria has a long history of carriage. Damascus and Aleppo stood on the caravan roads for centuries, and the Hejaz railway carried goods and pilgrims for a hundred years. Formal regulation began with the commercial register, which records every forwarder that trades, and with the customs houses that clear what crosses the border.",
   "Vietnam has a long history of carriage. Hanoi and Hội An stood on the river and sea routes for centuries, and the north-south railway has carried goods and people for a hundred years. Formal regulation began with the business register, which records every forwarder that trades, and with the customs houses that clear what crosses the border."),
  ("1. What carried goods and pilgrims in Syria for a hundred years?",
   "1. What has carried goods and people in Vietnam for a hundred years?"),
  ("Warehouse managers work to keep stock safe despite interrupted power and old buildings. Transport managers travel long distances to clear one consignment.",
   "Warehouse managers work to keep stock safe despite humidity and crowded buildings. Transport managers travel long distances to clear one consignment."),
  ("The work of logistics staff is challenging. They operate with scarce fuel and often with damaged roads. But they remain committed to delivering goods and rebuilding confidence in Syrian supply.",
   "The work of logistics staff is challenging. They operate with thin margins and often with congested ports. But they remain committed to delivering goods and building confidence in Vietnamese supply."),
  ("@EX Part 7: Syrian Cultural Values and Logistics Work",
   "@EX Part 7: Vietnamese Cultural Values and Logistics Work"),
  ("@INSTR Match Syrian cultural values with how they relate to logistics management and carriage.",
   "@INSTR Match Vietnamese cultural values with how they relate to logistics and carriage."),
  ("b) | Dignity means a date is given carefully, because a name stands behind it",
   "b) | Face means a date is given carefully, because a name stands behind it"),
  ("4. | Personal Dignity", "4. | Keeping Face"),
  ("a) | Mastery of a trade is honoured, and a carter's knowledge of the road is remembered",
   "a) | Mastery of a trade is honoured, and a boatman's knowledge of the river is remembered"),
  ("and the Ministry of Internal Trade sets the rules on labelling, pricing and complaints.",
   "and the consumer protection office sets the rules on labelling, pricing and complaints."),
  ("1. Barada Distribution | 2. Plans the weekly routes",
   "1. Sông Hồng Distribution | 2. Plans the weekly routes"),
  ("1. The Hejaz railway carried goods and pilgrims for a hundred years.",
   "1. The north-south railway has carried goods and people for a hundred years."),
  ("The Hejaz railway carried goods in Syria to a timetable that was kept for decades. If I managed a depot on that line,",
   "The north-south railway has carried goods in Vietnam to a timetable kept for decades. If I managed a depot on that line,"),
 ],
 2: [
  ("The logistics sector in Syria has changed significantly in response to the need to reopen routes that were cut or damaged.",
   "The logistics sector in Türkiye has changed significantly in response to the need to serve Europe and Central Asia at once."),
  ("Working in Syria's logistics companies requires persistence because fuel, spare parts and open crossings are all uncertain.",
   "Working in Türkiye's logistics companies requires persistence because competition, exchange rates and queue times are all relentless."),
  ("In neighboring countries like Lebanon and Jordan, companies employ staff who move goods for both local sale and export.",
   "In neighbouring countries like Bulgaria and Georgia, companies employ staff who move goods for both local sale and export."),
  ("These businesses demonstrate how dedicated professionals keep working in hard times.",
   "These businesses demonstrate how dedicated professionals keep working in hard markets."),
  ("Many Syrian professionals who studied abroad chose to return to run logistics companies at home.",
   "Many Turkish professionals who studied abroad chose to return to run logistics companies at home."),
  ("1. Why are logistics staff in Syria very important?", "1. Why are logistics staff in Türkiye very important?"),
  ("   ○ B) They reopen broken routes and keep goods and medicines moving",
   "   ○ B) They link two continents and keep goods and medicines moving"),
 ],
 3: [
  ("Syria has a long trading tradition and also a demanding compliance situation. A consignment must be declared to the General Customs Directorate before it may be released, and the Ministry of Internal Trade and Consumer Protection sets the rules on labelling, pricing and consumer complaints.",
   "Mexico has a long trading tradition and also a demanding compliance situation. A consignment must be declared to the National Customs Agency before it may be released, and the Federal Consumer Protection Agency sets the rules on labelling, pricing and consumer complaints."),
  ("Compliance is complicated by records lost during the conflict, permits that expire at different times, and the cost of professional advice.",
   "Compliance is complicated by requirements set at federal and state level, permits that expire at different times, and the cost of advice."),
  ("Missing paperwork delays goods across the country.", "Overlapping paperwork delays goods across the country."),
  ("International recognition of Syrian forwarders acknowledges their skill and dedication.",
   "International recognition of Mexican forwarders acknowledges their skill and dedication."),
  ("2. What is the scale of Syria's missing-paperwork problem?",
   "2. What is the scale of Mexico's overlapping-permit problem?"),
  ("3. What makes compliance for export from Syria particularly difficult?",
   "3. What makes compliance for export from Mexico particularly difficult?"),
  ("   ○ B) Several overlapping requirements plus records lost during the conflict",
   "   ○ B) Several overlapping requirements plus permits held at two levels"),
  ("1. Several requirements apply at once, and records are hard to reconstruct | 2. Records lost during the conflict and permits expiring at different times delay goods across the country",
   "1. Several requirements apply at once, and permits sit at two levels | 2. Permits held at federal and state level and expiring at different times delay goods across the country"),
  ("In Syria and other recovering economies, a clean declaration is often the only protection a shipper has before paying for carriage.",
   "In Mexico and other large trading economies, a clean declaration is often the only protection a shipper has before paying for carriage."),
  ("In Syria, careful investigation has often shown that a shortage came from a missed handover rather than theft.",
   "In Mexico, careful investigation has often shown that a shortage came from a missed handover rather than theft."),
  ("Syria declares imports to the General Customs Directorate and marks goods for consumer protection at home.",
   "Mexico declares imports to the National Customs Agency and marks goods for consumer protection at home."),
  ("Syria's forwarders reveal the tension between international compliance and the urgent need to keep goods moving.",
   "Mexico's small hauliers reveal the tension between international compliance and the urgent need to keep goods moving."),
  ("Their resilience and route knowledge inspire support from partners abroad.",
   "Their resilience and corridor knowledge inspire support from partners abroad."),
 ],
 4: [
  ("Logistics staff in Syria must understand palletising, cold storage, loading sequence, and the real cost of transport over damaged roads.",
   "Logistics staff in Morocco must understand palletising, cold storage, loading sequence, and the real cost of transport over long distances."),
  ("Courageous staff in Syria report a shortage when the customer was expecting a full load.",
   "Courageous staff in Morocco report a shortage when the customer was expecting a full load."),
  ("Syrian warehouse teams demonstrate exceptional judgement, skill, and commitment despite extreme difficulties. They work with power that can fail between one count and the next, recording by hand and reconciling later. They hold cold stock on generators that stop, moving product between rooms to protect it.",
   "Moroccan warehouse teams demonstrate exceptional judgement, skill, and commitment despite real difficulties. They work with heat that can spoil a pallet between one count and the next, recording by hand and reconciling later. They hold cold stock through long road journeys, moving product between rooms to protect it."),
  ("Syrian logistics staff understand local handling deeply. They know how far a pallet travels on a damaged road, what a cold store costs on generator fuel, and the real risk of holding stock as these behave in local circumstances.",
   "Moroccan logistics staff understand local handling deeply. They know how far a pallet travels on a mountain road, what a cold store costs through a hot summer, and the real risk of holding stock as these behave in local circumstances."),
  ("The commitment of Syrian warehouse teams is remarkable. Many work long hours for modest salaries or no overtime. Many face real pressure when an honest count would hold a load. Many have rebuilt their own records yet continue reporting honestly.",
   "The commitment of Moroccan warehouse teams is remarkable. Many work long hours for modest salaries or no overtime. Many face real pressure when an honest count would hold a load. Many have rebuilt a whole stock system yet continue reporting honestly."),
  ("International partners often say that Syrian colleagues teach them what real resourcefulness looks like. The persistence, improvisation and route knowledge of local staff inspires and humbles those with easier conditions.",
   "International partners often say that Moroccan colleagues teach them what real resourcefulness looks like. The persistence, improvisation and route knowledge of local staff inspires and humbles those with easier conditions."),
  ("1. What challenges do Syrian warehouse teams face?", "1. What challenges do Moroccan warehouse teams face?"),
  ("What can international and Syrian logistics staff teach each other about storing under hardship?",
   "What can international and Moroccan logistics staff teach each other about storing under pressure?"),
  ("4. What is the value of Syrian logistics staff in international partnerships?",
   "4. What is the value of Moroccan logistics staff in international partnerships?"),
  ("@EX Part 7: Warehousing and Stock Control Excellence in Syria",
   "@EX Part 7: Warehousing and Stock Control Excellence in Morocco"),
  ("@INSTR Read about exemplary warehouse management in Syria and answer detailed questions.",
   "@INSTR Read about exemplary warehouse management in Morocco and answer detailed questions."),
  ("1. Power that fails, few staff, old buildings, and scarce generator fuel",
   "1. Summer heat, few staff, long distances, and costly cold storage"),
  ("Syrian logistics staff bring deep handling knowledge that ensures records reflect how goods actually move. They understand local roads, cold chains, and what a crossing will really take.",
   "Moroccan logistics staff bring deep handling knowledge that ensures records reflect how goods actually move. They understand local roads, cold chains, and what a port will really take."),
  ("This partnership model respects Syrian expertise and judgement rather than creating dependency on outside support.",
   "This partnership model respects Moroccan expertise and judgement rather than creating dependency on outside support."),
 ],
 5: [
  ("Syrian logistics companies face unique challenges in planning and management. Fuel that moves in price, difficulty importing spare parts, and restricted or damaged roads create real obstacles. Despite these difficulties, Syrian and international staff successfully move textiles, food, furniture and pharmaceuticals.",
   "Indonesian logistics companies face unique challenges in planning and management. Shipping between islands, difficulty importing spare parts, and congested or flooded roads create real obstacles. Despite these difficulties, Indonesian and international staff successfully move textiles, food, furniture and palm products."),
  ("Good assessment in Syria includes understanding closures and the fairness that lets every driver be judged by the same rules.",
   "Good assessment in Indonesia includes understanding ferry schedules and the fairness that lets every driver be judged by the same rules."),
  ("They cannot assume that a long route will run without interruption. Successful Syrian plans build flexibility into the figures from the start.",
   "They cannot assume that a long route will sail without delay. Successful Indonesian plans build flexibility into the figures from the start."),
  ("They consider timing—not starting a long run before a known closure. They consider location—holding a little stock near the customer hardest to reach.",
   "They consider timing—not starting a long run before a known monsoon week. They consider location—holding a little stock near the customer hardest to reach."),
  ("Durable operations in Syria build local capacity. Outside support will eventually end. Successful companies train Syrian staff, use methods that can be run with locally available tools",
   "Durable operations in Indonesia build local capacity. Outside support will eventually end. Successful companies train Indonesian staff, use methods that can be run with locally available tools"),
  ("2. Why do successful Syrian plans build flexibility into the figures?",
   "2. Why do successful Indonesian plans build flexibility into the figures?"),
  ("Successful logistics in Syria adapts to local values and working practices. Syrian culture values the family, respect for elders, religious faith, personal honour, and craft mastery.",
   "Successful logistics in Indonesia adapts to local values and working practices. Indonesian culture values the family, respect for elders, religious faith, social harmony, and craft mastery."),
  ("Companies must employ local staff who understand the roads and speak the dialect.",
   "Companies must employ local staff who understand the routes and speak the local language."),
  ("@EX Part 7: Discussion - Learning from Syrian Carriage", "@EX Part 7: Discussion - Learning from Indonesian Carriage"),
  ("@INSTR Discuss what international partners can learn from Syrian approaches to carriage.",
   "@INSTR Discuss what international partners can learn from Indonesian approaches to carriage."),
  ("What can international partners learn from how Syrian carriers have traditionally done business?",
   "What can international partners learn from how Indonesian carriers have traditionally done business?"),
  ("Syrian carriers have centuries of experience judging a journey by reputation",
   "Indonesian carriers have centuries of experience judging a journey by reputation"),
  ("Export work in Syria is particularly important because so many firms need the earnings.",
   "Export work in Indonesia is especially important because so many firms need the earnings."),
  ("Durable operations build local capacity by training Syrian staff to run the network themselves.",
   "Durable operations build local capacity by training Indonesian staff to run the network themselves."),
  ("In Syria, these phases must include flexibility for closures and driver input respecting local practice.",
   "In Indonesia, these phases must include flexibility for ferries and driver input respecting local practice."),
  ("In Syria, fuel sometimes becomes unavailable because of import restrictions, transport difficulties, or sudden price rises.",
   "In Indonesia, fuel sometimes becomes unavailable because of import licensing, shipping delays, or sudden price rises."),
  ("@EX Part 7: Cultural Respect in Syrian Logistics Work", "@EX Part 7: Cultural Respect in Indonesian Logistics Work"),
  ("@INSTR Read about cultural considerations in Syrian logistics work and answer questions.",
   "@INSTR Read about cultural considerations in Indonesian logistics work and answer questions."),
  ("Cultural Adaptation in Syrian Logistics Management", "Cultural Adaptation in Indonesian Logistics Management"),
  ("1. Why do successful Syrian companies employ local staff?", "1. Why do successful Indonesian companies employ local staff?"),
  ("@EX Part 7: Cultural Respect in Syrian Logistics Work", "@EX Part 7: Cultural Respect in Indonesian Logistics Work"),
  ("Transport Planning in Syria: Adapting to Complex Contexts", "Transport Planning in Indonesia: Adapting to Complex Contexts"),
  ("@INSTR Read detailed information about transport planning in Syria and answer questions.",
   "@INSTR Read detailed information about transport planning in Indonesia and answer questions."),
  ("1. What are the unique challenges for transport planning in Syria?",
   "1. What are the unique challenges for transport planning in Indonesia?"),
  ("@INSTR Before listening, discuss different types of transport that staff plan for in Syria.",
   "@INSTR Before listening, discuss different types of transport that staff plan for in Indonesia."),
  ("What types of transport operate in Syria and what does each one require?",
   "What types of transport operate in Indonesia and what does each one require?"),
  ("Successful plans in Syria begin with a careful assessment of current conditions.",
   "Successful plans in Indonesia begin with a careful assessment of current conditions."),
  ("Planning in Syria requires flexibility.", "Planning in Indonesia requires flexibility."),
  ("Execution in Syria requires careful routing.", "Execution in Indonesia requires careful routing."),
  ("Review and reporting in Syria is critical.", "Review and reporting in Indonesia is critical."),
  ("1. Fuel that moves in price, difficulty importing spare parts, and damaged roads",
   "1. Island shipping, difficulty importing spare parts, and flooded roads"),
  ("1. Local staff understand the roads, speak the dialect, and gain a checkpoint's cooperation",
   "1. Local staff understand the routes, speak the language, and gain a port's cooperation"),
 ],
 6: [
  ("Successful cross-functional teams in Syria share scarce resources. Departments might share a delivery vehicle, combine a customs clearance, or coordinate a purchase of scarce fuel.",
   "Successful cross-functional teams in Brazil share scarce resources. Departments might share a delivery vehicle, combine a customs clearance, or coordinate a purchase of scarce fuel."),
  ("@EX Part 7: Syrian Values of Cooperation and Carriage", "@EX Part 7: Brazilian Values of Cooperation and Carriage"),
  ("@INSTR Read about how Syrian cultural values support logistics partnerships and answer questions.",
   "@INSTR Read about how Brazilian cultural values support logistics partnerships and answer questions."),
  ("Syrian Cultural Values Supporting Collaboration", "Brazilian Cultural Values Supporting Collaboration"),
  ("Syrian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in logistics.",
   "Brazilian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in logistics."),
  ("The concept of \"karama\" or dignity is central to Syrian culture. Karama means being treated with respect and keeping personal honour. Partnership approaches honour karama by explaining a delay with a reason rather than simply failing to arrive. A broken promise without explanation damages karama, and a carrier who feels slighted will not answer you again. Genuine partnership respects karama and fits commercial values.",
   "The idea of \"respeito\" or respect is central to Brazilian culture. Respeito means being treated as a person and keeping personal standing. Partnership approaches honour respeito by explaining a delay with a reason rather than simply failing to arrive. A broken promise without explanation damages respeito, and a carrier who feels slighted will not answer you again. Genuine partnership respects respeito and fits commercial values."),
  ("Syrian carriage values the long relationship over the single load. A carter's reputation travels on the road and lasts for generations. Families have carried for the same merchants for decades. This means a Syrian carrier responds strongly to being treated as a long-term partner",
   "Brazilian carriage values the long relationship over the single load. A driver's reputation travels on the road and lasts for generations. Families have carried for the same merchants for decades. This means a Brazilian carrier responds strongly to being treated as a long-term partner"),
  ("Islamic teachings about honest dealing strengthen the partnership orientation. Islam teaches that a carrier must not conceal damage and must describe the load truthfully.",
   "Church and community teaching about honest dealing strengthens the partnership orientation. The tradition holds that a carrier must not conceal damage and must describe the load truthfully."),
  ("Syrian hospitality shapes how a negotiation is conducted. A visiting shipper is welcomed and shown the yard.",
   "Brazilian hospitality shapes how a negotiation is conducted. A visiting shipper is welcomed and shown the yard."),
  ("1. What does karama mean and how does partnership honour this value?",
   "1. What does respeito mean and how does partnership honour this value?"),
  ("2. How do Islamic teachings support working with carriers and suppliers?",
   "2. How does community teaching support working with carriers and suppliers?"),
  ("The Syrian context especially needs this collaborative approach. So much of the carriage is small and scattered. Rebuilding confidence at this scale cannot be delivered to carriers; it has to be done with them, corridor by corridor and depot by depot.",
   "The Brazilian context especially needs this collaborative approach. So much of the carriage is small and scattered. Building confidence at this scale cannot be delivered to carriers; it has to be done with them, corridor by corridor and depot by depot."),
  ("Islamic teaching that a carrier must not conceal damage and must describe the load truthfully",
   "Community teaching that a carrier must not conceal damage and must describe the load truthfully"),
  ("1. Karama means dignity and standing on the road, and partnership respects it by explaining every delay with a reason",
   "1. Respeito means dignity and standing on the road, and partnership respects it by explaining every delay with a reason"),
  ("Between: Barada Distribution and the Midan Hauliers' Association",
   "Between: Serra Distribuição and the Mercadão Hauliers' Association"),
  ("   Barada Distribution:", "   Serra Distribuição:"),
  ("   - 2 members from Barada Distribution", "   - 2 members from Serra Distribuição"),
  ("   Midan Hauliers' Association:", "   Mercadão Hauliers' Association:"),
  ("@INSTR Discuss how to respectfully work with partners while honouring carriage traditions.",
   "@INSTR Discuss how to respectfully work with partners while honouring carriage traditions."),
 ],
 7: [
  ("In Syria, direct relationships have become vital for keeping goods moving when transport is difficult.",
   "In Egypt, direct relationships have become vital for keeping goods moving when transport is difficult."),
  ("In Syria, where advertising reaches few shippers, direct relationships became vital.",
   "In Egypt, where advertising reaches few shippers, trade relationships became vital."),
  ("Syria's service challenges stem from transport and currency. Fuel is costly, roads are slow, rates move between quotation and loading, and credit is scarce.",
   "Egypt's service challenges stem from transport and currency. Fuel is costly, roads are crowded, rates move between quotation and loading, and credit is scarce."),
  ("If you were designing forwarding and service together for a Syrian company, what would you include?",
   "If you were designing forwarding and service together for an Egyptian company, what would you include?"),
  ("@EX Part 7: Carriage and Service in Syrian Perspective", "@EX Part 7: Carriage and Service in Egyptian Perspective"),
  ("@INSTR Read about Syrian values supporting integrated forwarding and service work.",
   "@INSTR Read about Egyptian values supporting integrated forwarding and service work."),
  ("Syrian Values Supporting Carriage and Service", "Egyptian Values Supporting Carriage and Service"),
  ("Syrian traditions provide a strong foundation supporting integrated forwarding and service.",
   "Egyptian traditions provide a strong foundation supporting integrated forwarding and service."),
  ("The idea of \"amanah\" or trust held on behalf of others is central to Syrian practice.",
   "The idea of \"amanah\" or trust held on behalf of others is central to Egyptian practice."),
  ("Service in Syrian tradition is a moral obligation, not only a commercial calculation.",
   "Service in Egyptian tradition is a moral obligation, not only a commercial calculation."),
  ("Syrian teaching emphasizes the road as a shared responsibility.", "Egyptian teaching emphasizes the road as a shared responsibility."),
  ("Syrian craft ethics require high standards.", "Egyptian craft ethics require high standards."),
  ("Aligning forwarding and service with Syrian values creates stronger acceptance and care.",
   "Aligning forwarding and service with Egyptian values creates stronger acceptance and care."),
  ("1. How does Syrian tradition support service as a moral obligation?",
   "1. How does Egyptian tradition support service as a moral obligation?"),
  ("2. What traditional Syrian practice supports integrated systems?", "2. What traditional Egyptian practice supports integrated systems?"),
  ("Carrier: A furniture haulier outside Homs", "Carrier: A furniture haulier outside Damietta"),
  ("In the Syrian context especially, integrated forwarding and service could help rebuild what disruption destroyed.",
   "In the Egyptian context especially, integrated forwarding and service could rebuild what neglect has cost."),
 ],
 8: [
  ("@EX Part 7: Syrian Values - Hisba and Honest Measure", "@EX Part 7: Thai Values - Sujarit and Honest Measure"),
  ("@INSTR Discuss Syrian traditions of market oversight in logistics reporting.",
   "@INSTR Discuss Thai traditions of market oversight in logistics reporting."),
  ("1. In Syrian markets, the muhtasib checked weights and scales and answered to all. How does this connect to honest weighing and reporting?",
   "1. In Thai markets, the royal inspector checked weights and scales and answered to all. How does this connect to honest weighing and reporting?"),
  ("@EX Part 7: Syrian Values - Insaf in Using Findings", "@EX Part 7: Thai Values - Yutitham in Using Findings"),
  ("@INSTR Connect Syrian principles of fairness to the fair use of report findings.",
   "@INSTR Connect Thai principles of fairness to the fair use of report findings."),
  ("1. Insaf means giving each person their due. How should this guide the way an operation reports and acts on its results?",
   "1. Yutitham means giving each person their due. How should this guide the way an operation reports and acts on its results?"),
  ("Hisba means oversight exercised on behalf of everyone, as the muhtasib checked the weights and scales in the market.",
   "Sujarit means honesty owed to everyone, as the royal inspector checked the weights and scales in the market."),
  ("Insaf requires examining whether every part of the operation was treated fairly.",
   "Yutitham requires examining whether every part of the operation was treated fairly."),
  ("Operations pursuing insaf should ensure findings do not blame drivers for a variance",
   "Operations pursuing yutitham should ensure findings do not blame drivers for a variance"),
  ("Insaf means using figures not to punish but to improve.", "Yutitham means using figures not to punish but to improve."),
  ("Operations embracing hisba view reporting not as a burden", "Operations embracing sujarit view reporting not as a burden"),
  ("Operations committed to insaf view reporting as a fairness tool", "Operations committed to yutitham view reporting as a fairness tool"),
  ("A reporting system embodies this principle by providing transparent evidence of what was carried and delivered.",
   "A reporting system embodies sujarit by providing transparent evidence of what was carried and delivered."),
 ],
 9: [
  ("@EX Part 7: Syrian Values - Growth with Intention", "@EX Part 7: Polish Values - Growth with Intention"),
  ("@INSTR Connect Syrian community concepts with the growth of an operation.",
   "@INSTR Connect Polish community concepts with the growth of an operation."),
  ("1. In Syrian tradition, \"ta'awun\" means working together so all who share a task benefit. How does this concept relate to growing a network?",
   "1. In Polish tradition, \"spółdzielczość\" means working together so all who share a task benefit. How does this relate to growing a network?"),
  ("@EX Part 7: Syrian Values - Stewardship", "@EX Part 7: Polish Values - Stewardship"),
  ("@INSTR Discuss Syrian stewardship concepts in lasting logistics.",
   "@INSTR Discuss Polish stewardship concepts in lasting logistics."),
  ("1. \"Waqf\" in Syrian usage means something set aside so its benefit continues for generations. How does this principle relate to building an operation that outlives its founder?",
   "1. \"Dziedzictwo\" in Polish usage means something handed on so its benefit continues for generations. How does this relate to building an operation that outlives its founder?"),
  ("Ta'awun suggests that growth should be intentional, purposeful, and rooted in serving the people who will run the operation.",
   "Spółdzielczość suggests growth be intentional, purposeful, and rooted in serving the people who will run the operation."),
  ("In Syrian usage, waqf makes people stewards responsible for something set aside so its benefit continues.",
   "In Polish usage, dziedzictwo makes people stewards responsible for something handed on so its benefit continues."),
 ],
 10: [
  ("@EX Part 7: Syrian Values - Consultation", "@EX Part 7: Kenyan Values - Consultation"),
  ("@INSTR Connect Syrian consultation principles to joint logistics work.",
   "@INSTR Connect Kenyan consultation principles to joint logistics work."),
  ("1. In Syrian practice, shura means matters are settled by consultation among those affected. How does this relate to associations and change led by the carriers themselves?",
   "1. In Kenyan practice, a baraza means matters are settled by consultation among those affected. How does this relate to associations and change led by the carriers themselves?"),
  ("@EX Part 7: Syrian Values - Justice", "@EX Part 7: Kenyan Values - Justice"),
  ("1. In Syrian civic tradition, adl means removing unfair treatment and securing each person's due. How does this principle relate to advocacy aimed at changing the rules?",
   "1. In Kenyan civic tradition, haki means removing unfair treatment and securing each person's right. How does this principle relate to advocacy aimed at changing the rules?"),
  ("Shura means that leaders must consult widely before making decisions", "A baraza means that leaders must consult widely before making decisions"),
  ("Shura acknowledges that diverse perspectives improve decisions.", "A baraza acknowledges that diverse perspectives improve decisions."),
  ("Adl-centred advocacy goes beyond clearing individual containers", "Haki-centred advocacy goes beyond clearing individual containers"),
  ("Adl-guided associations recognize that a failing transport climate is not inevitable",
   "Haki-guided associations recognize that a failing transport climate is not inevitable"),
  ("Pursuing adl means managers align with the smallest hauliers and the drivers",
   "Pursuing haki means managers align with the smallest hauliers and the drivers"),
  ("Pursuing adl may create conflict", "Pursuing haki may create conflict"),
  ("Associations committed to adl view advocacy", "Associations committed to haki view advocacy"),
  ("the banks, the Ministry of Transport, foreign buyers", "the banks, the Kenya Ports Authority, foreign buyers"),
 ],
}


HITS = {}


def institutions(text, n):
    """Rewrite the registry and the customs authority."""
    text = text.replace("General Customs Directorate", CUS[n])
    text = text.replace("commercial register", REG[n])
    text = text.replace("Commercial register", REG[n][0].upper() + REG[n][1:])
    text = text.replace("Ministry of Internal Trade and Consumer Protection", "consumer protection authority")
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
