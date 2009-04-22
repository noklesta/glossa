/*
Copyright 2009 The Text Laboratory, University of Oslo.

This file is part of Glossa.

Glossa is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Glossa is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Glossa.  If not, see <http://www.gnu.org/licenses/>.
*/

var Menu;
function reloadMenuDemo() {
      Menu['DEMO'] =
        new Hash(
             1, new Hash('contents', '<nobr>valg &#187;&nbsp;</nobr>',  	1, new Hash(
       'contents', 'ord &#187;&nbsp;',
	    1, new Hash(
         'contents', 'grunnform',
	      'type', 'js',
	      'uri', "addOpt('w','lemma','grunnform')"
	   ),
	    2, new Hash(
         'contents', 'midten av ordet',
	      'type', 'js',
	      'uri', "addOpt('w','middle','midten av ordet')"
	   ),
	    3, new Hash(
         'contents', 'skill store/sm&#299; bokst.',
	      'type', 'js',
	      'uri', "addOpt('w','case','skill store/sm&#299; bokst.')"
	   ),
	    4, new Hash(
         'contents', 'slutten av ordet',
	      'type', 'js',
	      'uri', "addOpt('w','end','slutten av ordet')"
	   ),
	    5, new Hash(
         'contents', 'starten av ordet',
	      'type', 'js',
	      'uri', "addOpt('w','start','starten av ordet')"
	   ),
	    6, new Hash(
         'contents', 'utelukk ordet',
	      'type', 'js',
	      'uri', "addOpt('w','neg','utelukk')"
	   ),
	    7, new Hash(
         'contents', 'legg til ordform',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','word','')"
	   ),
	    8, new Hash(
         'contents', 'legg til negert ordform',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','word','!')"
	   ),
	    9, new Hash(
         'contents', 'legg til lemma',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','lemma','')"
	   ),
	    10, new Hash(
         'contents', 'legg til negert lemma',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','lemma','!')"
	   )
),
  	2, new Hash(
       'contents', 'forekomster &#187;&nbsp;',
	    1, new Hash(
         'contents', 'en eller flere',
	      'type', 'js',
	      'uri', "addOpt('occ','+','en eller flere')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('occ','+','en eller flere')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('occ','!+','!en eller flere')"
	      )
	   ),
	    2, new Hash(
         'contents', 'null eller &#233;n',
	      'type', 'js',
	      'uri', "addOpt('occ','?','null eller &#233;n')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('occ','?','null eller &#233;n')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('occ','!?','!null eller &#233;n')"
	      )
	   ),
	    3, new Hash(
         'contents', 'null eller flere',
	      'type', 'js',
	      'uri', "addOpt('occ','*','null eller flere')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('occ','*','null eller flere')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('occ','!*','!null eller flere')"
	      )
	   )
),

               3, new Hash(
                           'contents', 'num &#187;',
                1, new Hash(
                            'contents', 'ent',
                            'type', 'js',
                            'uri', "addOpt('num','ent','ent')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('num','!ent','!ent')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'ent_fl',
                            'type', 'js',
                            'uri', "addOpt('num','ent_fl','ent_fl')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('num','!ent_fl','!ent_fl')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'ent_l',
                            'type', 'js',
                            'uri', "addOpt('num','ent_l','ent_l')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('num','!ent_l','!ent_l')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'fl',
                            'type', 'js',
                            'uri', "addOpt('num','fl','fl')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('num','!fl','!fl')"
	                               )
	                   )
                       ),
               4, new Hash(
                           'contents', 'degr &#187;',
                1, new Hash(
                            'contents', 'komp',
                            'type', 'js',
                            'uri', "addOpt('degr','komp','komp')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('degr','!komp','!komp')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'pos',
                            'type', 'js',
                            'uri', "addOpt('degr','pos','pos')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('degr','!pos','!pos')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'sup',
                            'type', 'js',
                            'uri', "addOpt('degr','sup','sup')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('degr','!sup','!sup')"
	                               )
	                   )
                       ),
               5, new Hash(
                           'contents', 'case &#187;',
                1, new Hash(
                            'contents', 'akk',
                            'type', 'js',
                            'uri', "addOpt('case','akk','akk')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('case','!akk','!akk')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'akk_subj',
                            'type', 'js',
                            'uri', "addOpt('case','akk_subj','akk_subj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('case','!akk_subj','!akk_subj')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'gen',
                            'type', 'js',
                            'uri', "addOpt('case','gen','gen')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('case','!gen','!gen')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'nom',
                            'type', 'js',
                            'uri', "addOpt('case','nom','nom')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('case','!nom','!nom')"
	                               )
	                   ),
                5, new Hash(
                            'contents', 'nom:akk',
                            'type', 'js',
                            'uri', "addOpt('case','nom:akk','nom:akk')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('case','!nom:akk','!nom:akk')"
	                               )
	                   ),
                6, new Hash(
                            'contents', 'nom_obj',
                            'type', 'js',
                            'uri', "addOpt('case','nom_obj','nom_obj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('case','!nom_obj','!nom_obj')"
	                               )
	                   )
                       ),
               6, new Hash(
                           'contents', 'sex &#187;',
                1, new Hash(
                            'contents', 'fem',
                            'type', 'js',
                            'uri', "addOpt('sex','fem','fem')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!fem','!fem')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'm:f',
                            'type', 'js',
                            'uri', "addOpt('sex','m:f','m:f')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!m:f','!m:f')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'mask',
                            'type', 'js',
                            'uri', "addOpt('sex','mask','mask')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!mask','!mask')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'mask_fem',
                            'type', 'js',
                            'uri', "addOpt('sex','mask_fem','mask_fem')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!mask_fem','!mask_fem')"
	                               )
	                   ),
                5, new Hash(
                            'contents', 'mask_fem_nøyt',
                            'type', 'js',
                            'uri', "addOpt('sex','mask_fem_nøyt','mask_fem_nøyt')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!mask_fem_nøyt','!mask_fem_nøyt')"
	                               )
	                   ),
                6, new Hash(
                            'contents', 'mask_nøyt',
                            'type', 'js',
                            'uri', "addOpt('sex','mask_nøyt','mask_nøyt')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!mask_nøyt','!mask_nøyt')"
	                               )
	                   ),
                7, new Hash(
                            'contents', 'nøyt',
                            'type', 'js',
                            'uri', "addOpt('sex','nøyt','nøyt')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('sex','!nøyt','!nøyt')"
	                               )
	                   )
                       ),
               7, new Hash(
                           'contents', 'nlex &#187;',
                1, new Hash(
                            'contents', 'avbrudd',
                            'type', 'js',
                            'uri', "addOpt('nlex','avbrudd','avbrudd')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!avbrudd','!avbrudd')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'bakre_klikkelyd',
                            'type', 'js',
                            'uri', "addOpt('nlex','bakre_klikkelyd','bakre_klikkelyd')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!bakre_klikkelyd','!bakre_klikkelyd')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'fremre_klikkelyd',
                            'type', 'js',
                            'uri', "addOpt('nlex','fremre_klikkelyd','fremre_klikkelyd')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!fremre_klikkelyd','!fremre_klikkelyd')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'gjesping',
                            'type', 'js',
                            'uri', "addOpt('nlex','gjesping','gjesping')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!gjesping','!gjesping')"
	                               )
	                   ),
                5, new Hash(
                            'contents', 'hosting',
                            'type', 'js',
                            'uri', "addOpt('nlex','hosting','hosting')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!hosting','!hosting')"
	                               )
	                   ),
                6, new Hash(
                            'contents', 'klikkelyd',
                            'type', 'js',
                            'uri', "addOpt('nlex','klikkelyd','klikkelyd')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!klikkelyd','!klikkelyd')"
	                               )
	                   ),
                7, new Hash(
                            'contents', 'knipsing',
                            'type', 'js',
                            'uri', "addOpt('nlex','knipsing','knipsing')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!knipsing','!knipsing')"
	                               )
	                   ),
                8, new Hash(
                            'contents', 'kremting',
                            'type', 'js',
                            'uri', "addOpt('nlex','kremting','kremting')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!kremting','!kremting')"
	                               )
	                   ),
                9, new Hash(
                            'contents', 'kyssing',
                            'type', 'js',
                            'uri', "addOpt('nlex','kyssing','kyssing')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!kyssing','!kyssing')"
	                               )
	                   ),
                10, new Hash(
                            'contents', 'labial_frikativ',
                            'type', 'js',
                            'uri', "addOpt('nlex','labial_frikativ','labial_frikativ')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!labial_frikativ','!labial_frikativ')"
	                               )
	                   ),
                11, new Hash(
                            'contents', 'labial_vibrant',
                            'type', 'js',
                            'uri', "addOpt('nlex','labial_vibrant','labial_vibrant')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!labial_vibrant','!labial_vibrant')"
	                               )
	                   ),
                12, new Hash(
                            'contents', 'latter',
                            'type', 'js',
                            'uri', "addOpt('nlex','latter','latter')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!latter','!latter')"
	                               )
	                   ),
                13, new Hash(
                            'contents', 'leende',
                            'type', 'js',
                            'uri', "addOpt('nlex','leende','leende')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!leende','!leende')"
	                               )
	                   ),
                14, new Hash(
                            'contents', 'lydmalende_ord',
                            'type', 'js',
                            'uri', "addOpt('nlex','lydmalende_ord','lydmalende_ord')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!lydmalende_ord','!lydmalende_ord')"
	                               )
	                   ),
                15, new Hash(
                            'contents', 'nysing',
                            'type', 'js',
                            'uri', "addOpt('nlex','nysing','nysing')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!nysing','!nysing')"
	                               )
	                   ),
                16, new Hash(
                            'contents', 'plystring',
                            'type', 'js',
                            'uri', "addOpt('nlex','plystring','plystring')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!plystring','!plystring')"
	                               )
	                   ),
                17, new Hash(
                            'contents', 'pusting',
                            'type', 'js',
                            'uri', "addOpt('nlex','pusting','pusting')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!pusting','!pusting')"
	                               )
	                   ),
                18, new Hash(
                            'contents', 'raping',
                            'type', 'js',
                            'uri', "addOpt('nlex','raping','raping')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!raping','!raping')"
	                               )
	                   ),
                19, new Hash(
                            'contents', 'sibilant',
                            'type', 'js',
                            'uri', "addOpt('nlex','sibilant','sibilant')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!sibilant','!sibilant')"
	                               )
	                   ),
                20, new Hash(
                            'contents', 'skriking',
                            'type', 'js',
                            'uri', "addOpt('nlex','skriking','skriking')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!skriking','!skriking')"
	                               )
	                   ),
                21, new Hash(
                            'contents', 'snufsing',
                            'type', 'js',
                            'uri', "addOpt('nlex','snufsing','snufsing')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!snufsing','!snufsing')"
	                               )
	                   ),
                22, new Hash(
                            'contents', 'stavet',
                            'type', 'js',
                            'uri', "addOpt('nlex','stavet','stavet')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!stavet','!stavet')"
	                               )
	                   ),
                23, new Hash(
                            'contents', 'stønning',
                            'type', 'js',
                            'uri', "addOpt('nlex','stønning','stønning')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!stønning','!stønning')"
	                               )
	                   ),
                24, new Hash(
                            'contents', 'sugelyd',
                            'type', 'js',
                            'uri', "addOpt('nlex','sugelyd','sugelyd')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!sugelyd','!sugelyd')"
	                               )
	                   ),
                25, new Hash(
                            'contents', 'sukking',
                            'type', 'js',
                            'uri', "addOpt('nlex','sukking','sukking')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!sukking','!sukking')"
	                               )
	                   ),
                26, new Hash(
                            'contents', 'synging',
                            'type', 'js',
                            'uri', "addOpt('nlex','synging','synging')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!synging','!synging')"
	                               )
	                   ),
                27, new Hash(
                            'contents', 'trekker_pusten',
                            'type', 'js',
                            'uri', "addOpt('nlex','trekker_pusten','trekker_pusten')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!trekker_pusten','!trekker_pusten')"
	                               )
	                   ),
                28, new Hash(
                            'contents', 'uforståelig',
                            'type', 'js',
                            'uri', "addOpt('nlex','uforståelig','uforståelig')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!uforståelig','!uforståelig')"
	                               )
	                   ),
                29, new Hash(
                            'contents', 'uklart',
                            'type', 'js',
                            'uri', "addOpt('nlex','uklart','uklart')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('nlex','!uklart','!uklart')"
	                               )
	                   )
                       ),
               8, new Hash(
                           'contents', 'pers &#187;',
                1, new Hash(
                            'contents', '1.',
                            'type', 'js',
                            'uri', "addOpt('pers','1.','1.')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pers','!1.','!1.')"
	                               )
	                   ),
                2, new Hash(
                            'contents', '2.',
                            'type', 'js',
                            'uri', "addOpt('pers','2.','2.')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pers','!2.','!2.')"
	                               )
	                   ),
                3, new Hash(
                            'contents', '3.',
                            'type', 'js',
                            'uri', "addOpt('pers','3.','3.')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pers','!3.','!3.')"
	                               )
	                   )
                       ),
               9, new Hash(
                           'contents', 'temp &#187;',
                1, new Hash(
                            'contents', 'imp',
                            'type', 'js',
                            'uri', "addOpt('temp','imp','imp')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!imp','!imp')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'inf',
                            'type', 'js',
                            'uri', "addOpt('temp','inf','inf')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!inf','!inf')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'inf:imp',
                            'type', 'js',
                            'uri', "addOpt('temp','inf:imp','inf:imp')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!inf:imp','!inf:imp')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'perf-part',
                            'type', 'js',
                            'uri', "addOpt('temp','perf-part','perf-part')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!perf-part','!perf-part')"
	                               )
	                   ),
                5, new Hash(
                            'contents', 'pres',
                            'type', 'js',
                            'uri', "addOpt('temp','pres','pres')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!pres','!pres')"
	                               )
	                   ),
                6, new Hash(
                            'contents', 'pres:inf',
                            'type', 'js',
                            'uri', "addOpt('temp','pres:inf','pres:inf')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!pres:inf','!pres:inf')"
	                               )
	                   ),
                7, new Hash(
                            'contents', 'pret',
                            'type', 'js',
                            'uri', "addOpt('temp','pret','pret')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!pret','!pret')"
	                               )
	                   ),
                8, new Hash(
                            'contents', 'pret:perf-part',
                            'type', 'js',
                            'uri', "addOpt('temp','pret:perf-part','pret:perf-part')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('temp','!pret:perf-part','!pret:perf-part')"
	                               )
	                   )
                       ),
               10, new Hash(
                           'contents', 'def &#187;',
                1, new Hash(
                            'contents', 'be',
                            'type', 'js',
                            'uri', "addOpt('def','be','be')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('def','!be','!be')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'ub',
                            'type', 'js',
                            'uri', "addOpt('def','ub','ub')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('def','!ub','!ub')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'ub_be',
                            'type', 'js',
                            'uri', "addOpt('def','ub_be','ub_be')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('def','!ub_be','!ub_be')"
	                               )
	                   )
                       ),
               11, new Hash(
                           'contents', 'desc &#187;',
                1, new Hash(
                            'contents', 'gjespende',
                            'type', 'js',
                            'uri', "addOpt('desc','gjespende','gjespende')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('desc','!gjespende','!gjespende')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'kommentar',
                            'type', 'js',
                            'uri', "addOpt('desc','kommentar','kommentar')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('desc','!kommentar','!kommentar')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'me',
                            'type', 'js',
                            'uri', "addOpt('desc','me','me')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('desc','!me','!me')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'x',
                            'type', 'js',
                            'uri', "addOpt('desc','x','x')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('desc','!x','!x')"
	                               )
	                   )
                       ),
               12, new Hash(
                           'contents', 'pos &#187;',
                1, new Hash(
                            'contents', '(spm)',
                            'type', 'js',
                            'uri', "addOpt('pos','(spm)','(spm)')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!(spm)','!(spm)')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'adj',
                            'type', 'js',
                            'uri', "addOpt('pos','adj','adj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!adj','!adj')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'adv',
                            'type', 'js',
                            'uri', "addOpt('pos','adv','adv')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!adv','!adv')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'adv:interj',
                            'type', 'js',
                            'uri', "addOpt('pos','adv:interj','adv:interj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!adv:interj','!adv:interj')"
	                               )
	                   ),
                5, new Hash(
                            'contents', 'adv:sbu',
                            'type', 'js',
                            'uri', "addOpt('pos','adv:sbu','adv:sbu')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!adv:sbu','!adv:sbu')"
	                               )
	                   ),
                6, new Hash(
                            'contents', 'cbl',
                            'type', 'js',
                            'uri', "addOpt('pos','cbl','cbl')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!cbl','!cbl')"
	                               )
	                   ),
                7, new Hash(
                            'contents', 'det',
                            'type', 'js',
                            'uri', "addOpt('pos','det','det')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!det','!det')"
	                               )
	                   ),
                8, new Hash(
                            'contents', 'inf-merke',
                            'type', 'js',
                            'uri', "addOpt('pos','inf-merke','inf-merke')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!inf-merke','!inf-merke')"
	                               )
	                   ),
                9, new Hash(
                            'contents', 'interj',
                            'type', 'js',
                            'uri', "addOpt('pos','interj','interj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!interj','!interj')"
	                               )
	                   ),
                10, new Hash(
                            'contents', 'konj',
                            'type', 'js',
                            'uri', "addOpt('pos','konj','konj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!konj','!konj')"
	                               )
	                   ),
                11, new Hash(
                            'contents', 'konj:adv',
                            'type', 'js',
                            'uri', "addOpt('pos','konj:adv','konj:adv')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!konj:adv','!konj:adv')"
	                               )
	                   ),
                12, new Hash(
                            'contents', 'konj:prep:adv',
                            'type', 'js',
                            'uri', "addOpt('pos','konj:prep:adv','konj:prep:adv')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!konj:prep:adv','!konj:prep:adv')"
	                               )
	                   ),
                13, new Hash(
                            'contents', 'konj:sbu',
                            'type', 'js',
                            'uri', "addOpt('pos','konj:sbu','konj:sbu')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!konj:sbu','!konj:sbu')"
	                               )
	                   ),
                14, new Hash(
                            'contents', 'konj:sbu:adv',
                            'type', 'js',
                            'uri', "addOpt('pos','konj:sbu:adv','konj:sbu:adv')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!konj:sbu:adv','!konj:sbu:adv')"
	                               )
	                   ),
                15, new Hash(
                            'contents', 'konj:sbu:det',
                            'type', 'js',
                            'uri', "addOpt('pos','konj:sbu:det','konj:sbu:det')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!konj:sbu:det','!konj:sbu:det')"
	                               )
	                   ),
                16, new Hash(
                            'contents', 'pause',
                            'type', 'js',
                            'uri', "addOpt('pos','pause','pause')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!pause','!pause')"
	                               )
	                   ),
                17, new Hash(
                            'contents', 'pause2',
                            'type', 'js',
                            'uri', "addOpt('pos','pause2','pause2')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!pause2','!pause2')"
	                               )
	                   ),
                18, new Hash(
                            'contents', 'prep',
                            'type', 'js',
                            'uri', "addOpt('pos','prep','prep')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!prep','!prep')"
	                               )
	                   ),
                19, new Hash(
                            'contents', 'prep:sbu',
                            'type', 'js',
                            'uri', "addOpt('pos','prep:sbu','prep:sbu')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!prep:sbu','!prep:sbu')"
	                               )
	                   ),
                20, new Hash(
                            'contents', 'pron',
                            'type', 'js',
                            'uri', "addOpt('pos','pron','pron')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!pron','!pron')"
	                               )
	                   ),
                21, new Hash(
                            'contents', 'pron/det',
                            'type', 'js',
                            'uri', "addOpt('pos','pron/det','pron/det')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!pron/det','!pron/det')"
	                               )
	                   ),
                22, new Hash(
                            'contents', 'sbu',
                            'type', 'js',
                            'uri', "addOpt('pos','sbu','sbu')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!sbu','!sbu')"
	                               )
	                   ),
                23, new Hash(
                            'contents', 'sbu:adv',
                            'type', 'js',
                            'uri', "addOpt('pos','sbu:adv','sbu:adv')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!sbu:adv','!sbu:adv')"
	                               )
	                   ),
                24, new Hash(
                            'contents', 'sbu:prep',
                            'type', 'js',
                            'uri', "addOpt('pos','sbu:prep','sbu:prep')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!sbu:prep','!sbu:prep')"
	                               )
	                   ),
                25, new Hash(
                            'contents', 'subst',
                            'type', 'js',
                            'uri', "addOpt('pos','subst','subst')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!subst','!subst')"
	                               )
	                   ),
                26, new Hash(
                            'contents', 'subst:adj',
                            'type', 'js',
                            'uri', "addOpt('pos','subst:adj','subst:adj')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!subst:adj','!subst:adj')"
	                               )
	                   ),
                27, new Hash(
                            'contents', 'sånn',
                            'type', 'js',
                            'uri', "addOpt('pos','sånn','sånn')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!sånn','!sånn')"
	                               )
	                   ),
                28, new Hash(
                            'contents', 'ukjent',
                            'type', 'js',
                            'uri', "addOpt('pos','ukjent','ukjent')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!ukjent','!ukjent')"
	                               )
	                   ),
                29, new Hash(
                            'contents', 'verb',
                            'type', 'js',
                            'uri', "addOpt('pos','verb','verb')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!verb','!verb')"
	                               )
	                   ),
                30, new Hash(
                            'contents', 'verb:subst',
                            'type', 'js',
                            'uri', "addOpt('pos','verb:subst','verb:subst')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('pos','!verb:subst','!verb:subst')"
	                               )
	                   )
                       ),
               13, new Hash(
                           'contents', 'type &#187;',
                1, new Hash(
                            'contents', '(pres-part)',
                            'type', 'js',
                            'uri', "addOpt('type','(pres-part)','(pres-part)')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!(pres-part)','!(pres-part)')"
	                               )
	                   ),
                2, new Hash(
                            'contents', 'appell',
                            'type', 'js',
                            'uri', "addOpt('type','appell','appell')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!appell','!appell')"
	                               )
	                   ),
                3, new Hash(
                            'contents', 'appell_ubøy',
                            'type', 'js',
                            'uri', "addOpt('type','appell_ubøy','appell_ubøy')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!appell_ubøy','!appell_ubøy')"
	                               )
	                   ),
                4, new Hash(
                            'contents', 'dem',
                            'type', 'js',
                            'uri', "addOpt('type','dem','dem')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!dem','!dem')"
	                               )
	                   ),
                5, new Hash(
                            'contents', 'fork',
                            'type', 'js',
                            'uri', "addOpt('type','fork','fork')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!fork','!fork')"
	                               )
	                   ),
                6, new Hash(
                            'contents', 'forst',
                            'type', 'js',
                            'uri', "addOpt('type','forst','forst')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!forst','!forst')"
	                               )
	                   ),
                7, new Hash(
                            'contents', 'fyll',
                            'type', 'js',
                            'uri', "addOpt('type','fyll','fyll')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!fyll','!fyll')"
	                               )
	                   ),
                8, new Hash(
                            'contents', 'hum',
                            'type', 'js',
                            'uri', "addOpt('type','hum','hum')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!hum','!hum')"
	                               )
	                   ),
                9, new Hash(
                            'contents', 'kvant',
                            'type', 'js',
                            'uri', "addOpt('type','kvant','kvant')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!kvant','!kvant')"
	                               )
	                   ),
                10, new Hash(
                            'contents', 'pers',
                            'type', 'js',
                            'uri', "addOpt('type','pers','pers')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!pers','!pers')"
	                               )
	                   ),
                11, new Hash(
                            'contents', 'poss',
                            'type', 'js',
                            'uri', "addOpt('type','poss','poss')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!poss','!poss')"
	                               )
	                   ),
                12, new Hash(
                            'contents', 'pres-part',
                            'type', 'js',
                            'uri', "addOpt('type','pres-part','pres-part')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!pres-part','!pres-part')"
	                               )
	                   ),
                13, new Hash(
                            'contents', 'prop',
                            'type', 'js',
                            'uri', "addOpt('type','prop','prop')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!prop','!prop')"
	                               )
	                   ),
                14, new Hash(
                            'contents', 'refl',
                            'type', 'js',
                            'uri', "addOpt('type','refl','refl')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!refl','!refl')"
	                               )
	                   ),
                15, new Hash(
                            'contents', 'res',
                            'type', 'js',
                            'uri', "addOpt('type','res','res')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!res','!res')"
	                               )
	                   ),
                16, new Hash(
                            'contents', 'sp',
                            'type', 'js',
                            'uri', "addOpt('type','sp','sp')",
                            1, new Hash(
                                        'contents', 'utelukk',
	                                'type', 'js',
	                                'uri', "addOpt('type','!sp','!sp')"
	                               )
	                   )
                       )));}
