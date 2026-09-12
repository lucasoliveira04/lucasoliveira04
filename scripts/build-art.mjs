import { svg, text as t, rect as r, write } from './profile-lib.mjs';

const hero = {};
const label = 'letter-spacing="3" font-weight="700"';
// 01 — Arcade / CRT. Drawn as native SVG so the assets stay editable.
let retro = r(0,0,1200,420,'#100b24',18);
retro += '<circle cx="970" cy="205" r="150" fill="url(#sun)"/>';
for(let y=198;y<354;y+=20) retro += r(810,y,325,9,'#100b24');
retro += '<path d="M0 325H1200V420H0Z" fill="#171035"/>';
for(let x=-600;x<1900;x+=130) retro += `<path d="M600 303L${x} 420" stroke="#56356b" stroke-width="1.5"/>`;
for(const y of [324,340,362,390,419]) retro += `<path d="M0 ${y}H1200" stroke="#583775"/>`;
for(let i=0;i<26;i++) retro += r((i*137+37)%1180,(i*59+26)%270,3,3,i%2?'#62e4ed':'#ffa9df');
retro += t(52,55,18,'#5ee6e7','PLAYER 01 / SÃO PAULO, BR',label);
retro += t(56,150,75,'#652b80','LUCAS OLIVEIRA','font-weight="900" letter-spacing="-3"');
retro += t(52,146,75,'#ffe9fa','LUCAS OLIVEIRA','font-weight="900" letter-spacing="-3"');
retro += t(55,194,23,'#ff93d0','JAVA BACKEND · SPRING · COMPUTER SCIENCE','class="mono"');
retro += t(55,255,28,'#fff2fa','Da API ao byte. Uma fase de cada vez.');
retro += r(54,288,300,43,'#ff75c4',0) + t(75,317,19,'#160c25','PRESS START TO BUILD','class="mono" font-weight="700"');
retro += r(1050,360,13,13,'#6bf0e7',0,'class="cursor"')+t(52,392,16,'#dda5d4','SIDE A: BACKEND     /     SIDE B: ALGORITHMS','class="mono"');
hero.retro=svg('Lucas Oliveira — arcade anos 80 e 90. Java backend, Spring e Ciência da Computação.',retro,420,'<linearGradient id="sun" x2="0" y2="1"><stop stop-color="#ffbd64"/><stop offset="1" stop-color="#fb5cb4"/></linearGradient>');

// 02 — Futurama-inspired delivery terminal with an original illustrated ship.
let future=r(0,0,1200,420,'#0c2926',18);
for(let i=0;i<48;i++) future+=`<circle cx="${(i*173+23)%1200}" cy="${(i*79+17)%420}" r="${i%4===0?2:1}" fill="#91bca3" opacity=".5"/>`;
future+='<circle cx="1010" cy="222" r="155" fill="#194139" stroke="#3c6651"/><ellipse cx="1010" cy="222" rx="215" ry="46" fill="none" stroke="#54765a" stroke-width="2" transform="rotate(-28 1010 222)"/>';
future+=r(42,32,236,32,'#e86243',3)+t(57,54,16,'#fff5d6','PLANET EXPRESS / DEV', 'font-weight="700" letter-spacing="1"');
future+=t(43,140,66,'#f6edcc','GOOD NEWS,','font-weight="900" letter-spacing="-2"')+t(43,210,66,'#b9ee72','EVERYONE!','font-weight="900" letter-spacing="-2"');
future+=t(46,261,27,'#f6edcc','Lucas Oliveira · Engenheiro de entregas HTTP');
future+=t(46,302,21,'#b9d6be','Java / Spring / sistemas em órbita');
future+=r(43,345,598,40,'#173c33',6)+t(60,371,17,'#c6e9a5','ORIGEM: SÃO PAULO   →   DESTINO: PRÓXIMO COMMIT','class="mono"');
future+='<g class="drift"><path d="M811 235L744 217L761 250L738 278L822 263" fill="#ed7649" stroke="#081e1a" stroke-width="5"/><path d="M837 216L836 155L881 204" fill="#c3513f" stroke="#081e1a" stroke-width="5"/><path d="M802 214Q941 151 1108 231Q1094 277 849 281L794 255Z" fill="#9bc783" stroke="#081e1a" stroke-width="6"/><path d="M818 251Q959 264 1091 239" fill="none" stroke="#487b5c" stroke-width="12"/><ellipse cx="1002" cy="214" rx="47" ry="24" fill="#b7e8e4" stroke="#081e1a" stroke-width="5"/><path d="M909 262L862 313L960 273" fill="#b84a3b" stroke="#081e1a" stroke-width="5"/><circle cx="857" cy="235" r="13" fill="#e25843" stroke="#f1e6c4" stroke-width="3"/></g>';
hero.futurama=svg('Lucas Oliveira — central de entregas inspirada em Futurama, com nave verde ilustrada.',future);

// 03 — Windows XP. Vector landscape, Luna-style title bar, taskbar.
let xp=r(0,0,1200,420,'url(#sky)',18);
xp+='<g fill="#fff" opacity=".65"><ellipse cx="110" cy="91" rx="145" ry="33"/><ellipse cx="178" cy="66" rx="69" ry="32"/><ellipse cx="1050" cy="61" rx="156" ry="29"/></g><path d="M0 310Q294 203 579 299T1200 219V420H0Z" fill="#72a93b"/><path d="M0 334Q306 300 540 331T1200 261V420H0Z" fill="#4f941f"/>';
xp+=r(155,38,889,319,'#1748b6',9)+r(160,43,879,31,'url(#luna)',6)+t(175,65,18,'#fff','Propriedades de Lucas Oliveira','font-weight="700"');
xp+=r(160,76,879,276,'#ece9d8');
for(const [x,c,s] of [[949,'#347bea','_'],[978,'#347bea','□'],[1007,'#d95933','×']]) xp+=r(x,47,25,23,c,3,'stroke="#e3eaff"')+t(x+7,65,18,'#fff',s);
xp+=r(181,93,78,28,'#fff',4,'stroke="#b5b3aa"')+t(197,113,16,'#263a55','Geral');
xp+=r(262,96,94,25,'#e5e2d2',4,'stroke="#b5b3aa"')+t(276,114,16,'#263a55','Projetos');
xp+=r(359,96,88,25,'#e5e2d2',4,'stroke="#b5b3aa"')+t(374,114,16,'#263a55','Sistema');
xp+=r(181,120,836,177,'#fff',0,'stroke="#c2c2b9"');
xp+=r(209,153,80,65,'#bddbff',6,'stroke="#2863ac" stroke-width="3"')+r(216,160,66,44,'#337adb',1)+r(241,220,15,13,'#698bb9')+r(226,232,46,6,'#577da9');
xp+=t(320,169,34,'#143876','Lucas Oliveira','font-weight="700"')+t(321,204,22,'#33485f','Desenvolvedor Java Backend')+t(321,244,18,'#465970','Spring Framework · Ciência da Computação / UNINOVE')+t(321,274,18,'#465970','São Paulo, SP · Curiosidade instalada com sucesso.');
xp+=r(805,310,97,29,'#fafafa',3,'stroke="#426497"')+t(841,331,16,'#26364c','OK')+r(914,310,101,29,'#fafafa',3,'stroke="#8b929b"')+t(934,331,16,'#26364c','Aplicar');
xp+=r(0,382,1200,38,'url(#luna)')+'<path d="M0 382H136Q150 400 136 420H0Z" fill="#38943a"/>';
xp+=t(23,409,24,'#fff','iniciar','font-style="italic" font-weight="700"')+r(158,388,277,27,'#1e4eb4',3)+t(172,408,17,'#fff','Lucas Oliveira — README')+t(1065,408,16,'#fff','Java · Spring');
hero['windows-xp']=svg('Área de trabalho inspirada no Windows XP mostrando as propriedades de Lucas Oliveira.',xp,420,'<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#2e7ed1"/><stop offset="1" stop-color="#bbdfff"/></linearGradient><linearGradient id="luna" x2="0" y2="1"><stop stop-color="#5ca0ff"/><stop offset=".2" stop-color="#2771ed"/><stop offset="1" stop-color="#1549bc"/></linearGradient>');

// 04 — IntelliJ-inspired editor. Text remains crisp at any scale.
let ide=r(0,0,1200,420,'#1e1f22',16)+r(0,0,1200,45,'#2b2d30',16)+r(0,30,1200,15,'#2b2d30');
ide+=r(19,10,27,27,'#8d73ee',5)+t(24,29,15,'#fff','IJ','font-weight="700"')+t(64,29,17,'#dfe1e5','lucas-oliveira')+t(229,29,16,'#a8abb5','/ main')+t(962,29,16,'#a9b8ff','Java Backend');
ide+=r(0,45,258,346,'#26282c')+t(22,78,15,'#b2b6bf','Project','font-weight="700"');
const tree=[['⌄ lucas-oliveira','#dfe1e5',110],['  ⌄ src','#c6ccd7',146],['    ⌄ main/java','#c6ccd7',181],['      Lucas.java','#b0bfff',217],['  ⌄ projects','#c6ccd7',261],['    api_share_file','#a9b1bd',294],['    dsa','#a9b1bd',327],['    garbage_collector','#a9b1bd',360]];
ide+=r(9,196,240,32,'#344565',5);
for(const [value,color,y] of tree)ide+=t(17,y,17,color,value,'class="mono"');
ide+=r(259,45,179,42,'#1e1f22')+t(280,72,17,'#dfe1e5','Lucas.java')+r(259,85,179,2,'#7b91ff');
const code=[
  [['#cf8e6d','public class '],['#dfe1e5','Lucas {']],
  [['#80858f','  // Da API ao byte.']],
  [['#cf8e6d','  String '],['#c2a6ef','name'],['#dfe1e5',' = '],['#a5c484','"Lucas Oliveira"'],['#dfe1e5',';']],
  [['#cf8e6d','  String '],['#c2a6ef','focus'],['#dfe1e5',' = '],['#a5c484','"Java / Spring"'],['#dfe1e5',';']],
  [['#cf8e6d','  String[] '],['#c2a6ef','exploring'],['#dfe1e5',' = {']],
  [['#a5c484','    "algoritmos", "memória em C"']],
  [['#dfe1e5','  };']],
  [['#dfe1e5','}']]
];
code.forEach((parts,i)=>{ide+=t(287,123+i*31,18,'#737782',i+1,'class="mono" text-anchor="end"');ide+=`<text x="315" y="${123+i*31}" font-size="21" class="mono" xml:space="preserve">`+parts.map(([color,value])=>`<tspan fill="${color}">${value.replaceAll('&','&amp;').replaceAll('<','&lt;')}</tspan>`).join('')+'</text>';});
ide+=r(769,350,10,22,'#ced5e6',0,'class="cursor"');
ide+=r(0,391,1200,29,'#2b2d30')+t(18,411,15,'#afb4bf','Git: main')+t(861,411,15,'#afb4bf','São Paulo  |  UTF-8  |  Java');
hero.intellij=svg('Editor inspirado no IntelliJ com uma classe Java que apresenta Lucas Oliveira.',ide);

// 05 — Editorial minimalism: warm paper, ink, green orbital punctuation.
let minimal=r(0,0,1200,420,'#f6f5ef',14)+t(49,55,17,'#59705e','LUCAS OLIVEIRA / DESENVOLVEDOR',label);
minimal+='<path d="M50 83H1150" stroke="#cfd6c8"/>';
minimal+=t(45,183,78,'#202d25','Da API','font-weight="700" letter-spacing="-4"')+t(45,267,78,'#202d25','ao byte.','font-weight="700" letter-spacing="-4"');
minimal+=t(49,322,23,'#52604f','Java, Spring e a curiosidade de entender por dentro.');
minimal+=t(49,389,17,'#59705e','SÃO PAULO · CIÊNCIA DA COMPUTAÇÃO / UNINOVE','letter-spacing="1"');
minimal+='<circle cx="965" cy="211" r="111" fill="none" stroke="#cbd5c4"/><circle cx="965" cy="211" r="71" fill="none" stroke="#cbd5c4"/><path d="M872 145L828 211L872 277M1058 145L1102 211L1058 277" fill="none" stroke="#345e40" stroke-width="7" stroke-linecap="round"/><circle cx="965" cy="211" r="14" fill="#3b754a" class="pulse"/>';
hero.minimalista=svg('Lucas Oliveira. Da API ao byte. Composição minimalista em papel claro e verde.',minimal);

for(const [theme,content] of Object.entries(hero))await write(`assets/${theme}/hero.svg`,content);
console.log('5 banners SVG autorais gerados.');
