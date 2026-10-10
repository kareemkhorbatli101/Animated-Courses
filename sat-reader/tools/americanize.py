#!/usr/bin/env python3
"""Replace British spellings and a few Briticisms with American forms.

Runs over YAML passage or item files. Case is preserved for the first letter.
"""
import re, sys, glob

MAP = {
 'behaviour':'behavior','behaviours':'behaviors','colour':'color','colours':'colors',
 'coloured':'colored','honour':'honor','honours':'honors','honoured':'honored',
 'favourite':'favorite','favourites':'favorites','digitise':'digitize','digitised':'digitized',
 'digitises':'digitizes','digitisation':'digitization','reanalyse':'reanalyze','reanalysed':'reanalyzed',
 'labourer':'laborer','labourers':'laborers','labouring':'laboring',
 'moulded':'molded','mould':'mold','sulphur':'sulfur','sulphide':'sulfide','sulphate':'sulfate',
 'aluminium':'aluminum','draught':'draft','draughts':'drafts','ploughed':'plowed','plough':'plow',
 'cosy':'cozy','sceptical':'skeptical','scepticism':'skepticism','vapour':'vapor','vapours':'vapors',
 'labour':'labor','labours':'labors','laboured':'labored','favour':'favor',
 'favours':'favors','favoured':'favored','neighbour':'neighbor','neighbours':'neighbors',
 'neighbourhood':'neighborhood','neighbourhoods':'neighborhoods','harbour':'harbor',
 'harbours':'harbors','harboured':'harbored','rumour':'rumor','rumours':'rumors',
 'humour':'humor','odour':'odor','odours':'odors','vigour':'vigor','splendour':'splendor',
 'armour':'armor','armoured':'armored','endeavour':'endeavor','saviour':'savior',
 'metre':'meter','metres':'meters','kilometre':'kilometer','kilometres':'kilometers',
 'millimetre':'millimeter','millimetres':'millimeters','centimetre':'centimeter',
 'centimetres':'centimeters','centre':'center','centres':'centers','centred':'centered',
 'theatre':'theater','theatres':'theaters','litre':'liter','litres':'liters',
 'fibre':'fiber','fibres':'fibers','sombre':'somber','calibre':'caliber',
 'organise':'organize','organised':'organized','organises':'organizes','organising':'organizing',
 'recognise':'recognize','recognised':'recognized','recognises':'recognizes',
 'realise':'realize','realised':'realized','realises':'realizes',
 'apologise':'apologize','apologised':'apologized','criticise':'criticize',
 'criticised':'criticized','emphasise':'emphasize','emphasised':'emphasized',
 'summarise':'summarize','summarised':'summarized','specialise':'specialize',
 'specialised':'specialized','modernise':'modernize','modernised':'modernized',
 'stabilise':'stabilize','stabilised':'stabilized','satirise':'satirize',
 'satirised':'satirized','memorise':'memorize','minimise':'minimize',
 'maximise':'maximize','analyse':'analyze','analysed':'analyzed',
 'paralyse':'paralyze','paralysed':'paralyzed','fertilised':'fertilized',
 'fertiliser':'fertilizer','unfertilised':'unfertilized','defence':'defense',
 'offence':'offense','offences':'offenses','pretence':'pretense','practise':'practice',
 'practised':'practiced','practising':'practicing','programme':'program',
 'programmes':'programs','whilst':'while','amongst':'among','learnt':'learned',
 'burnt':'burned','spelt':'spelled','lorry':'truck','lorries':'trucks',
 'petrol':'gasoline','kerb':'curb','kerbs':'curbs','gaol':'jail',
 'aluminium':'aluminum','sulphur':'sulfur','sulphuric':'sulfuric','tyre':'tire',
 'tyres':'tires','storey':'floor','storeys':'floors','moustache':'mustache',
 'plough':'plow','ploughed':'plowed','judgement':'judgment','judgements':'judgments',
 'ageing':'aging','greyish':'grayish','travelled':'traveled','travelling':'traveling',
 'traveller':'traveler','travellers':'travelers','labelled':'labeled',
 'labelling':'labeling','modelled':'modeled','modelling':'modeling',
 'cancelled':'canceled','cancelling':'canceling','marvellous':'marvelous',
 'woollen':'woolen','enrolment':'enrollment','fulfil':'fulfill','fulfilled':'fulfilled',
 'instalment':'installment','skilful':'skillful','draught':'draft','cheque':'check',
 'pyjamas':'pajamas','aeroplane':'airplane','jewellery':'jewelry',
 'sceptical':'skeptical','sceptic':'skeptic','manoeuvre':'maneuver','cosy':'cozy',
 'mould':'mold','moulded':'molded','smoulder':'smolder','towards':'toward',
 'afterwards':'afterward','upwards':'upward','backwards':'backward','onwards':'onward',
 'tonne':'ton','tonnes':'tons','gigatonnes':'gigatons','artefact':'artifact',
 'artefacts':'artifacts','fortnight':'two weeks','axe':'ax',
}


def fix(text):
    def sub(m):
        w = m.group(0)
        r = MAP[w.lower()]
        return r[0].upper() + r[1:] if w[0].isupper() else r
    pat = re.compile(r'\b(' + '|'.join(sorted(MAP, key=len, reverse=True)) + r')\b', re.I)
    return pat.sub(sub, text)


if __name__ == '__main__':
    targets = sys.argv[1:] or sorted(glob.glob('data/passages/*.yaml'))
    total = 0
    for p in targets:
        s = open(p).read()
        n = fix(s)
        if n != s:
            open(p, 'w').write(n)
            import difflib
            changed = sum(1 for a, b in zip(s.split(), n.split()) if a != b)
            total += changed
            print('%s: %d words changed' % (p.split('/')[-1], changed))
    print('total %d' % total)
