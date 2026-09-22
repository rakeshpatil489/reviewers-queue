(function(){
"use strict";

var P = {
  box:'<path d="M10 2.5 3 6v8l7 3.5 7-3.5V6z"/><path d="M3 6l7 3.5L17 6M10 9.5v8"/>',
  grid:'<rect x="3" y="3" width="5.5" height="5.5" rx="1"/><rect x="11.5" y="3" width="5.5" height="5.5" rx="1"/><rect x="3" y="11.5" width="5.5" height="5.5" rx="1"/><rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1"/>',
  db:'<ellipse cx="10" cy="5" rx="6" ry="2.5"/><path d="M4 5v10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5M4 10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5"/>',
  clip:'<rect x="4" y="3.5" width="12" height="14" rx="1.5"/><rect x="7.5" y="2" width="5" height="3" rx="1"/><path d="M7 9h6M7 12h6M7 15h4"/>',
  queue:'<path d="M3 11.5h4l1 2h4l1-2h4"/><path d="M3 11.5 5 4h10l2 7.5V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>',
  help:'<circle cx="10" cy="10" r="7.5"/><path d="M7.8 7.8a2.3 2.3 0 1 1 3.2 2.1c-.6.3-1 .8-1 1.4v.4"/><path d="M10 14.3v.1"/>',
  left:'<path d="M12 4.5 6.5 10l5.5 5.5"/>',
  up:'<path d="M4.5 12.5 10 7l5.5 5.5"/>',
  down:'<path d="M4.5 7.5 10 13l5.5-5.5"/>',
  search:'<circle cx="9" cy="9" r="5.5"/><path d="m13 13 4 4"/>',
  filter:'<path d="M3 4h14l-5.5 6.5V16l-3 1.5v-7z"/>',
  cols:'<rect x="3" y="3.5" width="14" height="13" rx="1.5"/><path d="M7.7 3.5v13M12.3 3.5v13"/>',
  gauge:'<path d="M3.5 14a7 7 0 1 1 13 0"/><path d="m10 11 3-3.5"/>',
  spark:'<path d="M8 3l1.4 3.6L13 8l-3.6 1.4L8 13l-1.4-3.6L3 8l3.6-1.4zM14.5 11.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z"/>',
  pencil:'<path d="M13.5 3.5l3 3L7 16H4v-3z"/>',
  list:'<path d="M8 5h9M8 10h9M8 15h9M3.5 5h1M3.5 10h1M3.5 15h1"/>',
  check:'<path d="m4.5 10.5 3.5 3.5 7.5-8"/>',
  checkc:'<circle cx="10" cy="10" r="7.5"/><path d="m6.8 10.2 2.2 2.2 4.2-4.6"/>',
  chat:'<path d="M4 4.5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"/>',
  panel:'<rect x="3" y="3.5" width="14" height="13" rx="2"/><path d="M8 3.5v13M13 8l-2 2 2 2"/>',
  file:'<path d="M5 2.5h6.5L15 6v11.5H5z"/><path d="M11.5 2.5V6H15"/>',
  plus:'<path d="M10 4v12M4 10h12"/>',
  sort:'<path d="m7 8 3-3 3 3M7 12l3 3 3-3"/>',
  link:'<path d="M8.5 11.5l3-3M7 9.5l-1.5 1.5a2.5 2.5 0 0 0 3.5 3.5L10.5 13M13 10.5l1.5-1.5A2.5 2.5 0 0 0 11 5.5L9.5 7"/>'
};
function ic(n,cls){return '<span class="ic'+(cls?' '+cls:'')+'" aria-hidden="true"><svg viewBox="0 0 20 20">'+P[n]+'</svg></span>';}

var HARNESS_PATH=[['Section XVI','Machinery and electrical equipment'],['Chapter 85','Electrical machinery and equipment'],['8544','Insulated wire, cable and other insulated conductors']];
var KW_MASTER=[['HA-44101','Sensor harness, 8-pin','8544.30.00','S. Yilmaz','Mar 2025'],['HA-44102','Sensor harness, 8-pin, 1 m','8544.30.00','S. Yilmaz','Mar 2025'],['HA-44110','Relay harness, 6-pin','8544.30.00','Excel import','2023']];

var ITEMS=[
{
  id:'KT-7501',group:'fact',name:'Insulated bottle, 750 ml, stainless steel',supplier:'Hanse Outdoor',due:'24 Sep',dueFor:'autumn launch',importSrc:'PIM export',
  shared:[],
  split:'The two codes sit in different sections. One fact decides which one this product belongs to.',
  cands:[
    {code:'9617.00.11',title:'Vacuum flasks and other vacuum vessels, complete, up to 0.75 l',conf:62,after:96,answer:'yes',path:'Section XX, chapter 96'},
    {code:'7323.93.90',title:'Household articles of stainless steel, other than table articles',conf:33,after:93,answer:'no',path:'Section XV, chapter 73'}
  ],
  q:{
    text:'Is the space between the two walls a vacuum?',
    why:'Heading 9617 covers vacuum vessels. A double wall alone is not enough. Without a vacuum, this is a steel household article.',
    clues:['The product image shows a double wall','The description promises "cold for 24 hours", which suggests a vacuum but doesn\u2019t state it','Capacity is exactly 0.75 l, which still counts as "up to 0.75 l"'],
    yes:'Yes, vacuum-insulated',no:'No, not vacuum-sealed',
    factKey:'Wall construction',yesVal:'Double wall, vacuum-sealed',noVal:'Double wall, no vacuum',
    owner:{name:'Lukas Brenner',first:'Lukas',role:'Sourcing, Home and Outdoor',initials:'LB'},
    ask:'Is KT-7501 (Insulated bottle, 750 ml) vacuum-insulated between the two walls? A line from the supplier spec is enough.'
  },
  facts:[['Description','Double-walled bottle, keeps drinks cold for 24 hours','PIM'],['Capacity','750 ml','PIM'],['Material','Stainless steel 18/8','Supplier datasheet'],['Wall construction',null,null]],
  understanding:{product:'Double-walled drinking bottle of stainless steel 18/8, capacity 750 ml.',use:'Keeping drinks cold or hot on the move.',note:'The description names the effect, not the construction. Whether the walls are vacuum-sealed is open.'},
  reasoning:[
    {rule:'GRI 1',law:'Classification follows the wording of the headings and of the section and chapter notes.',note:'Heading 9617 names vacuum flasks and other vacuum vessels. If the bottle is vacuum-insulated, that heading describes it by name.',refs:['Heading 9617','Heading 7323']},
    {rule:'GRI 6',law:'Subheadings are compared only with subheadings at the same level, by their own wording and notes.',note:'Within 9617, capacity decides the subheading. At exactly 0.75 l the bottle falls under "up to 0.75 l".',refs:['Subheadings of 9617']}
  ],
  why:'The law is clear once the construction is known. The confidence is low because the product data describes the effect, not the construction.',
  master:[['KT-7410','Vacuum flask, 1 l','9617.00.19','M. Koch','Jan 2026'],['KT-7415','Vacuum flask, 1.5 l','9617.00.19','M. Koch','Jan 2026']],
  change:'If the walls are vacuum-sealed, 9617.00.11 rises to 96%. If not, 7323.93.90 rises to 93%.'
},
{
  id:'WR-2044',group:'judgment',name:'Smartwatch with eSIM, 44 mm',supplier:'Nordlicht Wearables',due:'26 Sep',dueFor:'retail launch',importSrc:'SAP, batch 0916',
  shared:[],
  split:'The two codes sit in different sections. The facts are known. The question is what this product principally is.',
  cands:[
    {code:'8517.62.00',title:'Machines for receiving, converting and transmitting data',conf:64,path:'Section XVI, chapter 85',short:'Data exchange'},
    {code:'9102.12.00',title:'Wrist-watches, electrically operated, with opto-electronic display',conf:31,path:'Section XVIII, chapter 91',short:'Timekeeping'}
  ],
  judge:{frame:'Which function gives this product its principal character?',cases:[
    ['Sends messages, calls and health data over LTE without a phone','Most of the spec sheet is about connectivity','Comparable connected wearables have been placed in 8517 62'],
    ['Worn on the wrist and marketed as a watch','Shows the time permanently on its display','Still works as a watch with no connection']
  ]},
  facts:[['Connectivity','LTE via eSIM, Bluetooth, Wi-Fi','Supplier datasheet'],['Display','1.4 inch OLED, always-on time','PIM'],['Sensors','Heart rate, GPS','PIM'],['Case','44 mm, aluminium','image']],
  understanding:{product:'Wrist-worn device with a 1.4 inch always-on OLED, LTE via eSIM, Bluetooth, Wi-Fi, heart-rate sensor and GPS.',use:'Communication, fitness tracking and timekeeping.',note:'The description is detailed and leaves no essential questions open.'},
  reasoning:[
    {rule:'GRI 1',law:'Classification follows the wording of the headings and of the section and chapter notes.',note:'Both headings describe part of what this product does. Neither describes all of it.',refs:['Heading 8517','Heading 9102']},
    {rule:'GRI 3(b)',law:'Composite goods are classified by the component or function that gives them their essential character.',note:'The decision rests on which function is principal. Alice weighs connectivity higher, but the case for a watch is reasonable.',refs:['Classification opinion sample: connected wearables','Notes to chapter 91']}
  ],
  why:'The product data is complete. The confidence is low because the tariff can reasonably be read two ways.',
  master:[],
  change:'No missing fact would settle this. It comes down to which function you judge to be principal.'
},
{
  id:'HA-44135',group:'conflict',name:'Control cabinet harness, 8-pin',supplier:'Kabelwerk Nord GmbH',due:'2 Oct',dueFor:'plant order',importSrc:'SAP, batch 0916',
  shared:HARNESS_PATH,
  split:'Both codes agree down to heading 8544. Alice and your master data disagree on the subheading.',
  cands:[
    {code:'8544.42.90',title:'Other conductors for up to 1,000 V, fitted with connectors',conf:88,tag:'Alice\u2019s suggestion'},
    {code:'8544.30.00',title:'Wiring sets of a kind used in vehicles, aircraft or ships',conf:9,tag:'Master data, 3 similar products'}
  ],
  conflict:{text:'Your team coded 3 similar harnesses from this supplier as vehicle wiring sets. This one is described for industrial control cabinets, which points away from vehicles. The supplier\u2019s automotive category in SAP may explain the earlier decisions.'},
  facts:[['Description','8-pin harness for industrial control cabinets, 1.2 m','SAP'],['Rated voltage','230 V','Supplier datasheet'],['Connectors','Fitted at both ends','Supplier datasheet'],['Supplier category','Automotive','SAP']],
  understanding:{product:'Insulated 8-pin wiring harness, 1.2 m, connectors fitted at both ends, rated 230 V.',use:'Wiring inside industrial control cabinets.',note:'The description is clear, but it contradicts how similar products from this supplier are coded in your master data.'},
  reasoning:[
    {rule:'GRI 1',law:'Classification follows the wording of the headings and of the section and chapter notes.',note:'Heading 8544 fits: an insulated conductor set fitted with connectors.',refs:['Heading 8544']},
    {rule:'GRI 6',law:'Subheadings are compared only with subheadings at the same level, by their own wording and notes.',note:'The description names an industrial use, so 8544 30 does not apply. At 230 V the set falls under 8544 42.',refs:['Subheading 8544 42','Subheading 8544 30']}
  ],
  why:'Alice is fairly sure. The item is here because the suggestion disagrees with your own master data, so one of the two is wrong.',
  master:KW_MASTER,
  change:'If the harness were really built for vehicles, the master data code 8544.30.00 would be right. The SAP description says industrial control cabinets.'
}
];

var GROUPS={
  fact:{label:'Missing information',hint:'The code depends on a fact the product data doesn\u2019t state. Get the fact, and the code follows.'},
  judgment:{label:'Needs experts judgment',hint:'The facts are known, but the tariff can be read two ways. You make the call.'},
  conflict:{label:'Master-Data conflict',hint:'Alice disagrees with how similar products were coded before. One of the two is wrong.'}
};
function groupCount(g){return ITEMS.filter(function(i){return i.group===g;}).length;}
var REASONS=['The product data was wrong or incomplete','Alice misread the product','My legal reading differs','A binding ruling applies','Other, noted in the documentation'];
var SIGNER='Dr. Miriam Brandt';
var QQ=[['why','Why isn\u2019t this above 90%?'],['change','What would change the answer?'],['similar','How did we classify similar products?']];

var NOTES=[
  {t:'Group by cause, not by score',
    what:'The queue is split into three tabs: missing information, needs expert judgment, and master-data conflict.',
    why:'A score tells you how unsure Alice is, not why. Each reason needs a different kind of work, so the queue is organised around the work.',
    a:'Alice can tell which of the three reasons applies to each item. The whole concept leans on this.',view:'list'},
  {t:'Sorted by deadline',
    what:'Items are sorted by when the product is needed, not by the lowest score.',
    why:'Reviewers work against shipments and launches. The most urgent item should be at the top.',view:'list'},
  {t:'Built on what already exists',
    what:'The queue sits next to Projects and reuses traide\u2019s product list and Alice\u2019s suggestion panel.',
    why:'Less to build, and nothing new for users to learn. The only new parts are the grouping and the decision block.'},
  {t:'Compare two codes, not a whole classification',
    what:'Each item shows the two competing codes, a short description of each, and Alice\u2019s confidence.',
    why:'The reviewer only has to choose between two options, so they shouldn\u2019t have to re-read the full tariff path.',
    a:'Most low-confidence items come down to two real candidates. Some may have three or more.',view:'detail'},
  {t:'One question instead of research',
    what:'When a fact is missing, Alice asks the one question that decides the code. If the reviewer doesn\u2019t know, \u201cI don\u2019t know\u201d sends the question to the person who does.',
    why:'The person who knows the product is usually not on the customs team. Asking them is better than guessing under time pressure.',
    a:'One fact is usually enough to settle the code, and the product owner will answer a quick request.',view:'detail',g:'fact'},
  {t:'Every fact shows where it came from',
    what:'Each product fact is labelled with its source: SAP, the PIM, a datasheet or an image. Facts Alice read from an image look weaker until someone confirms them.',
    why:'The reviewer, and later an auditor, can see which facts a person actually checked.',view:'detail'},
  {t:'No default on judgment calls',
    what:'When the rules can be read two ways, Alice\u2019s pick is labelled, but nothing is preselected.',
    opts:['Preselect Alice\u2019s pick: fastest, but easy to approve without thinking.',
      'Hide Alice\u2019s pick: safe, but it throws away useful input.',
      'Label it and preselect nothing: keeps her input and keeps the reviewer deciding. This is the one I chose.'],
    why:'The extra click only appears on the decisions the reviewer signs their name to.',
    a:'Judgment calls are a small part of the queue, so the extra step costs little overall.',view:'detail',g:'judgment'},
  {t:'Start with the evidence',
    what:'For master-data conflicts, the right panel opens on master data instead of Alice, showing the past products that disagree.',
    why:'The conflict is the question, so the reviewer sees it first. They can flag the old products for re-review without changing anything live.',view:'detail',g:'conflict'},
  {t:'Documented as you decide',
    what:'Before approving, the decision bar shows what will be recorded. Approving hands the item to a senior reviewer for sign-off.',
    why:'Documentation happens as part of the decision, not as paperwork afterwards, and the four-eyes check stays in place.',view:'detail'},
  {t:'How I\u2019d know it works',
    what:'Track the median time per item in the queue.',
    why:'That\u2019s where expert time goes. Corrections at sign-off act as the safety check, so speed never comes at the cost of accuracy.',view:'list'}
];

/* state */
var S;
function fresh(){
  var st={};
  ITEMS.forEach(function(it){st[it.id]={status:'open',answer:null,by:null,choice:null,override:null,flag:true,confirmed:{},events:[],openedAt:null,askedAt:null,askText:''};});
  return {view:'list',tab:'all',cur:null,basis:'alice',st:st,durations:[],notes:false,note:null,ovOpen:false,closed:{},cardClosed:{},qa:{},menu:false,flash:false,evOpen:{}};
}
S=fresh();

/* helpers */
function $(s){return document.querySelector(s);}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function clock(){return new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});}
function item(id){for(var i=0;i<ITEMS.length;i++)if(ITEMS[i].id===id)return ITEMS[i];return null;}
function cur(){return S.cur?item(S.cur):null;}
function stOf(it){return S.st[it.id];}
function clone(o){return JSON.parse(JSON.stringify(o));}
function pin(n,cls){return '<span class="pin'+(cls?' '+cls:'')+'" role="button" tabindex="0" data-pin="'+n+'" aria-label="Design note '+n+'">'+n+'</span>';}
function fmtDur(ms){var s=Math.round(ms/1000);if(s<60)return s+'s';return Math.floor(s/60)+'m '+String(s%60).padStart(2,'0')+'s';}
function median(a){if(!a.length)return null;var b=a.slice().sort(function(x,y){return x-y;});var m=Math.floor(b.length/2);return b.length%2?b[m]:(b[m-1]+b[m])/2;}
function tcode(code,cls){return '<span class="tcode'+(cls?' '+cls:'')+'"><span class="eu">EU</span><span>'+(code||'----.--.--')+'</span></span>';}
function approvedCount(){return ITEMS.filter(function(i){return stOf(i).status==='approved';}).length;}
function log(it,text,who,kind){
  var ev=stOf(it).events,last=ev[ev.length-1],e={t:clock(),who:who,text:text,kind:kind||null};
  if(kind&&last&&last.kind===kind)ev[ev.length-1]=e;else ev.push(e);
}
function currentCode(it,st){
  if(st.status==='approved')return st.approvedCode;
  if(st.override)return st.override.code;
  if(st.choice!==null)return it.cands[st.choice].code;
  return null;
}

/* sidebar */
function renderSide(){
  var left=ITEMS.length-approvedCount();
  $('#side').innerHTML=
    '<div class="brandrow"><span class="word">traide</span><button class="iconbtn" data-act="noop" aria-label="Collapse sidebar">'+ic('panel')+'</button></div>'+
    '<div class="newbtn"><button data-act="noop">'+ic('plus','sm')+'New product</button><button data-act="noop" aria-label="More ways to add">'+ic('down','sm')+'</button></div>'+
    '<nav class="nav" aria-label="Main">'+
      '<button data-act="noop">'+ic('grid')+'Dashboard</button>'+
      '<button data-act="noop">'+ic('db')+'Products</button>'+
      '<button data-act="noop">'+ic('clip')+'Projects</button>'+
      '<button data-act="noop">'+ic('box')+'Single products</button>'+
      '<span data-host><button class="on" data-act="go-list" aria-current="page">'+ic('queue')+'Review queue<span class="newtag">New</span><span class="count">'+left+'</span></button>'+pin(3)+'</span>'+
    '</nav>'+
    '<div class="side-bottom"><button class="helpbtn" data-act="noop">'+ic('help')+'Help center</button>'+
    '<div class="user"><span class="avatar">J</span><div><strong>Jonas Richter</strong><small>Nordwerk GmbH</small></div></div></div>';
}

/* list view */
function renderList(){
  var tabs=[['all','All',ITEMS.length],['fact',GROUPS.fact.label,groupCount('fact')],['judgment',GROUPS.judgment.label,groupCount('judgment')],['conflict',GROUPS.conflict.label,groupCount('conflict')]];
  var rows=ITEMS.filter(function(i){return S.tab==='all'||i.group===S.tab;});
  var total=S.tab==='all'?ITEMS.length:groupCount(S.tab);
  var done=approvedCount(), m=median(S.durations);
  var hint=S.tab==='all'?'Every suggestion below Alice\u2019s 90% release threshold, tagged with why she is unsure.':GROUPS[S.tab].hint;
  var h='<div class="topbar"><h1>'+ic('queue')+'Review queue</h1><button class="ghost" style="margin-left:auto" data-act="noop">'+ic('gauge')+'Review rules for this project</button></div>';
  h+='<div class="tabs" role="tablist"><span data-host style="display:flex;gap:4px;flex-wrap:wrap">'+tabs.map(function(t){
    return '<button class="tab t-'+t[0]+'" role="tab" data-ltab="'+t[0]+'" aria-selected="'+(S.tab===t[0])+'">'+(t[0]!=='all'?'<span class="dot"></span>':'')+t[1]+'<span class="n">'+t[2]+'</span></button>';
  }).join('')+pin(1)+'</span>'+
  '<div class="tools"><button data-act="noop">'+ic('search','sm')+'Search</button><button data-act="noop">'+ic('filter','sm')+'Filter</button><button data-act="noop">'+ic('cols','sm')+'Columns</button><span class="pager">1 - '+rows.length+' of '+total+'</span></div></div>';
  if(done===ITEMS.length){
    h+='<div class="donebar"><p><strong>All three sample products are reviewed.</strong> Median time per item: '+(m?fmtDur(m):'not measured')+'. Each one is waiting for sign-off from '+SIGNER+'.</p><button class="btn" data-act="reset">Reset the prototype</button></div>';
  }
  h+='<div class="listmeta"><p>'+esc(hint)+'</p><span data-host style="display:flex;gap:8px;flex-wrap:wrap"><span class="pill"><b>'+done+'</b> of '+ITEMS.length+' reviewed</span><span class="pill">Median per item <b>'+(m?fmtDur(m):'not yet')+'</b></span>'+pin(10)+'</span></div>';
  h+='<div class="tablewrap"><table class="ltable"><thead><tr><th style="width:36px"><span class="cb" aria-hidden="true"></span></th><th><span class="sorth">Art. No.'+ic('sort','sm')+'</span></th><th><span class="sorth">Product'+ic('sort','sm')+'</span></th><th>Why it\u2019s here</th><th>Alice\u2019s suggestion</th><th data-host><span class="sorth">Needed by'+ic('sort','sm')+'</span>'+pin(2,'inside')+'</th><th><span class="sorth">Decision'+ic('sort','sm')+'</span></th></tr></thead><tbody>';
  rows.forEach(function(it){
    var st=stOf(it),badge,codeHTML;
    if(st.status==='approved'){badge='<span class="badge done">To sign-off</span>';codeHTML=tcode(st.approvedCode);}
    else if(st.status==='waiting'){badge='<span class="badge wait">Waiting on '+esc(it.q.owner.first)+'</span>';codeHTML=tcode(it.cands[0].code,'pend')+'<span class="conf">'+it.cands[0].conf+'%</span>';}
    else{badge='<span class="badge pend">Pending</span>';codeHTML=tcode(it.cands[0].code,'pend')+'<span class="conf">'+it.cands[0].conf+'%</span>';}
    h+='<tr data-open="'+it.id+'" tabindex="0">'+
      '<td><span class="cb" aria-hidden="true"></span></td>'+
      '<td><span class="art'+(st.status==='approved'?'':' pend')+'">'+ic('box','sm')+it.id+'</span></td>'+
      '<td class="pname">'+esc(it.name)+'<small>'+esc(it.supplier)+'</small></td>'+
      '<td><span class="cause g-'+it.group+'">'+GROUPS[it.group].label+'</span></td>'+
      '<td style="white-space:nowrap">'+codeHTML+'</td>'+
      '<td style="white-space:nowrap">'+it.due+'</td>'+
      '<td>'+badge+'</td></tr>';
  });
  h+='</tbody></table></div>';
  $('#main').innerHTML='<div class="page">'+h+'</div>';
}

/* detail view */
function shownConf(it,st,i){
  if(it.group==='fact'&&st.choice!==null&&!st.override){var s=it.cands[st.choice];return i===st.choice?s.after:Math.max(1,99-s.after);}
  return it.cands[i].conf;
}
function tclistHTML(it,st){
  var sel=st.override?-1:st.choice;
  return '<div class="tclist" data-host>'+pin(4)+it.cands.map(function(c,i){
    var shown=shownConf(it,st,i),cls=sel===null?'':(sel===i?'win':'lose');
    var pct=shown!==c.conf?'<s>'+c.conf+'%</s>'+shown+'%':c.conf+'%';
    return '<div class="trow '+cls+'">'+tcode(c.code,sel===i?'pend':'')+'<span class="cand-title">'+esc(c.title)+'</span><span class="pct" data-host>'+pct+(i===0?'':'')+'</span></div>';
  }).join('')+'</div>';
}
function evidenceHTML(it,st){
  var open=!!S.evOpen[it.id];
  return '<button type="button" class="link sm evtog" data-act="ev-toggle" aria-expanded="'+open+'">Why is Alice asking? \u00b7 View evidence ('+it.q.clues.length+')</button>'+
    (open?'<p class="q-why">'+esc(it.q.why)+'</p><ul class="clues">'+it.q.clues.map(function(c){return '<li>'+esc(c)+'</li>';}).join('')+'</ul>':'');
}
function tariffFact(it,st){
  var q=it.q,head='<p class="subh">Two possible classifications</p><p class="subp">One fact decides between them.</p>'+tclistHTML(it,st);
  if(st.status==='waiting'){
    return head+'<div class="decide g-fact" data-host>'+pin(5,'inside')+'<p class="dlabel">Waiting for an answer</p><p class="q-text">'+esc(q.owner.name)+' has the question</p><p class="q-why">Sent at '+st.askedAt+'. The product is out of your way and returns to the queue when '+esc(q.owner.first)+' answers.</p><div class="waitq">'+esc(st.askText)+'</div>'+
      '<div class="row"><button class="btn" data-act="sim-reply">Simulate '+esc(q.owner.first)+'\u2019s reply</button><span class="proto">Prototype only</span><button class="link" data-act="cancel-ask">Withdraw the question</button></div></div>';
  }
  var dis=st.status==='approved'?' disabled':'',ans=st.answer,sc=st.choice!==null&&!st.override?it.cands[st.choice]:null;
  return head+'<div class="decide g-fact" data-host>'+pin(5,'inside')+
    '<p class="dlabel">Alice needs one fact</p><p class="q-text">'+esc(q.text)+'</p>'+
    evidenceHTML(it,st)+
    '<div class="answers" role="group" aria-label="Your answer">'+
      '<button type="button" class="ans'+(ans==='yes'?' on':'')+'" data-answer="yes"'+dis+' role="radio" aria-checked="'+(ans==='yes')+'"><span class="ans-radio" aria-hidden="true"></span>'+esc(q.yes)+'</button>'+
      '<button type="button" class="ans'+(ans==='no'?' on':'')+'" data-answer="no"'+dis+' role="radio" aria-checked="'+(ans==='no')+'"><span class="ans-radio" aria-hidden="true"></span>'+esc(q.no)+'</button>'+
      '<span data-host style="display:inline-flex"><button type="button" class="ans" data-act="ask"'+dis+'><span class="ans-radio" aria-hidden="true"></span>I don\u2019t know</button>'+''+'</span>'+
    '</div>'+
    (ans?'<p class="chosen">'+ic('checkc','sm')+'Your answer: <strong>'+esc(ans==='yes'?q.yes:q.no)+'</strong></p>':'')+
    (ans&&sc?'<p class="answered">'+(st.by==='you'?'Recorded as your answer.':'Answered by '+esc(q.owner.name)+'.')+' '+sc.code+' is now at '+sc.after+'%, above the release threshold.</p>':'')+
    '</div>';
}
function judgeClassificationsHTML(it,st){
  var sel=st.override?-1:st.choice;
  return '<div class="tclist" data-host>'+pin(4)+it.cands.map(function(c,i){
    var cls=sel===null?'':(sel===i?'win':'lose');
    var tag=i===0?'<span class="cand-tag alice">Alice’s suggestion</span>':'<span class="cand-tag">Alternative</span>';
    return '<div class="trow '+cls+'">'+tag+tcode(c.code,sel===i?'pend':'')+'<span class="cand-title">'+esc(c.title)+'</span><span class="pct" data-host>'+c.conf+'%'+(i===0?'':'')+'</span></div>';
  }).join('')+'</div>';
}
function judgeEvidenceHTML(it,st){
  var open=!!S.evOpen[it.id],j=it.judge;
  return '<button type="button" class="link sm evtog" data-act="ev-toggle" aria-expanded="'+open+'">Why does this need a judgment call? · View both cases</button>'+
    (open?'<div class="cases">'+it.cands.map(function(c,i){
      return '<div class="case"><h3>The case for <span class="mono">'+c.code+'</span></h3><ul>'+j.cases[i].map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
    }).join('')+'</div>':'');
}
function tariffJudge(it,st){
  var j=it.judge,dis=st.status==='approved'?' disabled':'',sel=st.override?-1:st.choice;
  var head='<p class="subh">Two possible classifications</p><p class="subp">The tariff can be read two ways. You make the call.</p>'+judgeClassificationsHTML(it,st);
  return head+'<div class="decide g-judgment" data-host>'+pin(7,'inside')+
    '<p class="dlabel">Your call</p><p class="q-text">'+esc(j.frame)+'</p>'+
    judgeEvidenceHTML(it,st)+
    '<div class="answers" role="radiogroup" aria-label="Your call">'+it.cands.map(function(c,i){
      var on=sel===i;
      return '<button type="button" class="ans'+(on?' on':'')+'" data-choose="'+i+'"'+dis+' role="radio" aria-checked="'+on+'"><span class="ans-radio" aria-hidden="true"></span>'+c.code+' — '+esc(c.short)+'</button>';
    }).join('')+'</div>'+
    (sel!==null&&sel>=0?'<p class="chosen">'+ic('checkc','sm')+'Your answer: <strong>'+it.cands[sel].code+' — '+esc(it.cands[sel].short)+'</strong></p>':'')+
    '</div>';
}
function masterTable(rows){
  return '<table class="mtable"><thead><tr><th>Product</th><th>Code</th><th>Decided by</th><th>When</th></tr></thead><tbody>'+
    rows.map(function(r){return '<tr><td><span class="mono">'+r[0]+'</span><br>'+esc(r[1])+'</td><td class="mono" style="white-space:nowrap">'+r[2]+'</td><td>'+esc(r[3])+'</td><td style="white-space:nowrap">'+esc(r[4])+'</td></tr>';}).join('')+'</tbody></table>';
}
function conflictEvidenceHTML(it,st){
  var open=!!S.evOpen[it.id];
  return '<button type="button" class="link sm evtog" data-act="ev-toggle" aria-expanded="'+open+'">Why is there a conflict? · View evidence</button>'+
    (open?'<p class="q-why">'+esc(it.conflict.text)+' The affected products are listed under Master data on the right.</p>':'');
}
function tariffConflict(it,st){
  var dis=st.status==='approved'?' disabled':'',c0=st.choice===0&&!st.override,c1=st.choice===1&&!st.override;
  var head='<p class="subh">Two possible classifications</p><p class="subp">Alice disagrees with your master data. One of the two is wrong.</p>'+tclistHTML(it,st);
  return head+'<div class="decide g-conflict" data-host>'+pin(8,'inside')+
    '<p class="dlabel">Settle the conflict</p><p class="q-text">Is this harness a vehicle wiring set, as your master data suggests?</p>'+
    conflictEvidenceHTML(it,st)+
    '<div class="answers" role="radiogroup" aria-label="Which code is right">'+
      '<button type="button" class="ans'+(c0?' on':'')+'" data-choose="0"'+dis+' role="radio" aria-checked="'+c0+'"><span class="ans-radio" aria-hidden="true"></span>No, use '+it.cands[0].code+'</button>'+
      '<button type="button" class="ans'+(c1?' on':'')+'" data-choose="1"'+dis+' role="radio" aria-checked="'+c1+'"><span class="ans-radio" aria-hidden="true"></span>Yes, keep '+it.cands[1].code+'</button></div>'+
    (c0||c1?'<p class="chosen">'+ic('checkc','sm')+'Your answer: <strong>'+(c0?'No, use '+it.cands[0].code:'Yes, keep '+it.cands[1].code)+'</strong></p>':'')+
    (c0?'<label class="check"><input type="checkbox" data-flag'+(st.flag?' checked':'')+dis+'>Flag the 3 master data products for re-review</label><p class="hint">They stay valid until someone reviews them. Nothing changes in SAP yet.</p>':'')+
    '</div>';
}
function provHTML(src,it,st,key){
  if(src===null)return '<span class="prov miss">Missing</span>';
  if(src==='image'){
    if(st.confirmed[key])return '<span class="prov you">Confirmed by you</span>';
    return '<button class="link sm" data-confirm="'+esc(key)+'"'+(st.status==='approved'?' disabled':'')+' style="margin-right:8px">Confirm</button><span class="prov weak">Read from image</span>';
  }
  if(src==='you')return '<span class="prov you">Your answer</span>';
  if(src==='owner')return '<span class="prov you">Answered by '+esc(it.q.owner.name)+'</span>';
  return '<span class="prov">'+esc({'SAP':'From SAP','PIM':'From PIM'}[src]||src)+'</span>';
}
function factsHTML(it,st){
  return '<div class="graybox" data-host>'+pin(6)+'<table class="facts"><tbody>'+it.facts.map(function(f){
    var k=f[0],v=f[1],src=f[2],cls='';
    if(v===null){
      if(st.answer){v=st.answer==='yes'?it.q.yesVal:it.q.noVal;src=st.by==='you'?'you':'owner';}
      else{v='Not stated';cls='missing';}
    }
    if(src==='image'&&!st.confirmed[k])cls='weak';
    return '<tr class="'+cls+'"><th scope="row">'+esc(k)+'</th><td>'+esc(v)+'</td><td class="src">'+provHTML(src,it,st,k)+'</td></tr>';
  }).join('')+'</tbody></table></div>';
}
function auditHTML(it,st){
  var base=[
    {t:'09:02',who:'System',text:'Imported from '+it.importSrc},
    {t:'09:03',who:'Fast Lane',text:'No rule matched'},
    {t:'09:03',who:'Alice',text:'Suggested '+it.cands[0].code+' at '+it.cands[0].conf+'%'},
    {t:'09:03',who:'System',text:it.group==='conflict'?'Sent to review: below 90% and differs from 3 master data products':'Sent to review: below the 90% release threshold'}
  ];
  return '<ol class="audit">'+base.concat(st.events).map(function(e){
    return '<li class="done"><span class="a-check" aria-hidden="true">'+ic('checkc','sm')+'</span><div class="a-meta">'+e.t+', '+esc(e.who)+'</div><div class="a-text">'+esc(e.text)+'</div></li>';
  }).join('')+'<li class="pending"><div class="a-meta">Next</div><div class="a-text">'+(st.status==='approved'?'Sign-off by '+SIGNER:'Your review, then sign-off by '+SIGNER)+'</div></li></ol>';
}
function sect(key,title,body){
  var closed=S.closed[key];
  return '<section class="sect'+(closed?' closed':'')+'"><button class="shead" data-sect="'+key+'" aria-expanded="'+!closed+'"><h2>'+title+'</h2>'+ic('up')+'</button><div class="sbody">'+body+'</div></section>';
}
function recordText(it,st){
  if(st.override)return 'your code, your reason, the suggestion you replaced and your name';
  if(it.group==='fact')return 'the answer from '+(st.by==='you'?'you':it.q.owner.name)+', Alice\u2019s reasoning and your name';
  if(it.group==='judgment')return 'your choice, both arguments, Alice\u2019s reasoning and your name';
  return 'your choice'+(st.choice===0&&st.flag?', 3 flagged master data products':'')+' and your name';
}
function emptyPrompt(it){
  if(it.group==='fact')return 'Answer Alice\u2019s question to choose a code.';
  if(it.group==='judgment')return 'Choose a code. Nothing is preselected.';
  return 'Choose which code is right.';
}
function decisionHTML(it,st){
  if(st.status==='approved')return '<div class="dec-done">'+tcode(st.approvedCode)+'<span>Reviewed by you. Waiting for sign-off from '+SIGNER+', Head of Customs.</span><button class="link" data-act="reopen">Reopen</button></div>';
  if(st.status==='waiting')return '<div class="dec-done"><span>Decision paused until '+esc(it.q.owner.first)+' answers.</span></div>';
  var code=currentCode(it,st),title=st.override?'Your code. Reason: '+st.override.reason:(st.choice!==null?it.cands[st.choice].title:'');
  var ov=S.ovOpen?'<div class="override" data-host>'+''+
    '<label>Code<input id="ovCode" inputmode="numeric" autocomplete="off" placeholder="0000.00.00"></label>'+
    '<label>Why you\u2019re overriding<select id="ovReason"><option value="">Choose a reason</option>'+REASONS.map(function(r){return '<option>'+esc(r)+'</option>';}).join('')+'</select></label>'+
    '<button class="btn" data-act="ov-apply">Use this code</button><button class="link" data-act="ov-cancel">Cancel</button><p class="err" id="ovErr" role="alert"></p></div>':'';
  return ov+'<div class="dec-row" data-host>'+pin(9)+
    '<div class="dec-sum">'+(code?'<span class="line">'+tcode(code,'pend')+'<span class="dec-title">'+esc(title)+'</span></span><span class="dec-rec">Documented with '+recordText(it,st)+'.</span>':'<span class="dec-empty">'+emptyPrompt(it)+'</span>')+'</div>'+
    '<div class="dec-actions">'+(S.ovOpen?'':'<button class="link" data-act="override">Use another code</button>')+
    '<button class="btn primary" data-act="approve"'+(code?'':' disabled')+'>Approve and send for sign-off</button></div></div>';
}
function basisHTML(it,st){
  var h='';
  if(S.basis==='fast'){
    h='<p class="btitle">'+ic('gauge')+'Fast Lane</p><div class="bempty">No Fast Lane rule matched this product, so Alice classified it. Fast Lane rules apply first and release matching products automatically.</div>';
  } else if(S.basis==='master'){
    h='<p class="btitle">'+ic('db')+'Master data</p>';
    if(!it.master.length)h+='<div class="bempty">No similar products in your master data yet. This decision will be the first reference.</div>';
    else{
      if(it.group==='conflict')h+='<p class="subp" style="margin-bottom:10px">These products from the same supplier are coded '+it.cands[1].code+'. Alice suggests '+it.cands[0].code+' for this one, so one side is wrong.</p>';
      else h+='<p class="subp" style="margin-bottom:10px">Similar products your team has already classified.</p>';
      h+=masterTable(it.master);
      if(it.group==='conflict'&&st.choice===0&&!st.override)h+='<p class="subp" style="margin-top:10px">'+(st.flag?'All 3 will be flagged for re-review when you approve.':'They will stay as they are.')+'</p>';
    }
  } else {
    var u=it.understanding;
    var c1=S.cardClosed[it.id+':u'],c2=S.cardClosed[it.id+':a'];
    h='<p class="btitle">'+ic('spark')+'Alice\u2019s suggestion</p>'+
      '<div class="acard'+(c1?' closed':'')+'"><button data-card="u" aria-expanded="'+!c1+'"><span class="sq"></span>Product understanding<span class="chev">'+ic('up','sm')+'</span></button><div class="abody"><ul>'+
        '<li><strong>Product:</strong> '+esc(u.product)+'</li><li><strong>Intended use:</strong> '+esc(u.use)+'</li><li><strong>Note:</strong> '+esc(u.note)+'</li></ul></div></div>'+
      '<div class="acard'+(c2?' closed':'')+'"><button data-card="a" aria-expanded="'+!c2+'">'+ic('spark','sm')+'Analysis<span class="chev">'+ic('up','sm')+'</span></button><div class="abody">'+
        '<h4>a) Rules applied</h4>'+it.reasoning.map(function(r){return '<div class="rstep"><span class="rn">'+esc(r.rule)+'</span><p class="law">'+esc(r.law)+'</p><p class="rapp">'+esc(r.note)+'</p><div class="refs">'+r.refs.map(function(x){return '<span class="ref">'+esc(x)+'</span>';}).join('')+'</div></div>';}).join('')+
        '<h4 style="margin-top:12px">b) Why the confidence is '+it.cands[0].conf+'%</h4><p>'+esc(it.why)+'</p>'+
        '<p style="margin-top:10px;color:var(--ink-3);font-size:12px">Rule texts are paraphrased and references are samples for this concept.</p></div></div>';
    var qa=S.qa[it.id]||[];
    h+=qa.map(function(x){return '<div class="qa"><b>'+esc(x.q)+'</b>'+esc(x.a)+'</div>';}).join('');
  }
  return h;
}
function renderDetail(){
  var it=cur(),st=stOf(it),idx=ITEMS.indexOf(it)+1;
  var code=currentCode(it,st);
  var fieldCls=st.status==='approved'?'':(code?'pend':'empty');
  var tariffBody=(it.group==='fact'?tariffFact(it,st):it.group==='judgment'?tariffJudge(it,st):tariffConflict(it,st))+
    '<div class="tfield"><span class="k" style="color:var(--ink-3);margin-right:6px">Tariff number</span>'+tcode(code,fieldCls+(S.flash?' flash':''))+
    '<button class="sqbtn" data-act="override" aria-label="Enter another code"'+(st.status!=='open'?' disabled':'')+'>'+ic('pencil','sm')+'</button><button class="sqbtn" data-act="noop" aria-label="Browse the tariff">'+ic('list','sm')+'</button>'+
    '<span class="cap">'+(st.status==='approved'?'Reviewed by you':(code?'Selected, not yet approved':'Not decided'))+'</span></div>';
  var productBody='<div class="kv"><span class="k">Art. No.</span><span class="v"><span class="art">'+ic('box','sm')+it.id+'</span><button class="sqbtn" data-act="noop" aria-label="Edit article number">'+ic('pencil','sm')+'</button><button class="btn" data-act="noop" style="margin-left:auto;padding:6px 12px">'+ic('file','sm')+'Datasheet PDF</button></span><span class="k">Name</span><span class="v">'+esc(it.name)+'</span><span class="k">Supplier</span><span class="v">'+esc(it.supplier)+'</span></div>'+
    factsHTML(it,st);
  var seg=[['fast','Fast Lane','gauge'],['master','Master data','db'],['alice','Alice\u2019s suggestion','chat']];
  var h='<div class="dtop"><button class="crumb" data-act="go-list">'+ic('left','sm')+'Review queue</button><span class="art">'+ic('box','sm')+it.id+'</span><span class="dname">'+esc(it.name)+'</span>'+
    '<div class="dnav"><span class="pos"><b>'+idx+'</b> <span>/ '+ITEMS.length+'</span></span><button data-act="prev" aria-label="Previous product">'+ic('up','sm')+'</button><button data-act="next" aria-label="Next product">'+ic('down','sm')+'</button></div></div>'+
    '<div class="dbody"><div class="dleft"><div class="dscroll">'+
      '<h2 class="dtitle">Your decision</h2>'+
      '<div class="banner" data-host>'+''+'<div class="brow"><span class="cause g-'+it.group+'">'+GROUPS[it.group].label+'</span><span class="due">Needed by '+it.due+' for the '+esc(it.dueFor)+'</span></div><p>'+esc(GROUPS[it.group].hint)+'</p></div>'+
      sect('product','Product',productBody)+
      sect('tariff','Tariff classification',tariffBody)+
      sect('doc','Documentation',auditHTML(it,st))+
    '</div><div class="decision">'+decisionHTML(it,st)+'</div></div>'+
    '<div class="dright"><div class="bhead"><p class="lbl">Choose a decision basis</p><div class="seg" role="group" aria-label="Decision basis">'+seg.map(function(s){
      return '<button data-basis="'+s[0]+'" aria-pressed="'+(S.basis===s[0])+'">'+ic(s[2],'sm')+s[1]+(s[0]==='master'&&it.group==='conflict'?'<span class="alert" aria-label="Conflict"></span>':'')+'</button>';
    }).join('')+'</div></div>'+
    '<div class="bscroll">'+basisHTML(it,st)+'</div>'+
    '<form class="askbar" id="askForm"><button type="button" class="qqbtn" data-act="qq" aria-expanded="'+S.menu+'">Quick questions'+ic('down','sm')+'</button><input class="askin" id="askIn" placeholder="Ask about this classification" autocomplete="off">'+
    '<div class="menu'+(S.menu?' show':'')+'">'+QQ.map(function(q){return '<button type="button" data-qq="'+q[0]+'">'+esc(q[1])+'</button>';}).join('')+'</div></form>'+
    '</div></div>';
  $('#main').innerHTML=h;
  S.flash=false;
}

function renderAll(keepScroll){
  var ae=document.activeElement,key=null;
  if(ae&&ae!==document.body&&ae.getAttribute){
    ['data-open','data-choose','data-answer','data-act','data-ltab','data-basis','data-confirm','data-sect','data-card'].some(function(a){
      if(ae.hasAttribute(a)){key='['+a+'="'+ae.getAttribute(a)+'"]';return true;}return false;
    });
  }
  var ds=document.querySelector('.dscroll'),bs=document.querySelector('.bscroll');
  var y1=ds?ds.scrollTop:0,y2=bs?bs.scrollTop:0;
  if(S.view==='detail'&&cur()){var st=stOf(cur());if(st.status==='open'&&!st.openedAt)st.openedAt=Date.now();}
  renderSide();
  if(S.view==='detail'&&cur())renderDetail();else{S.view='list';renderList();}
  if(keepScroll){var d2=document.querySelector('.dscroll'),b2=document.querySelector('.bscroll');if(d2)d2.scrollTop=y1;if(b2)b2.scrollTop=y2;}
  if(key){var el=document.querySelector(key);if(el&&!el.disabled)el.focus({preventScroll:true});}
  if(S.note!==null)requestAnimationFrame(function(){positionNote(S.note,false);});
}

/* actions */
var toastTimer=null,advanceTimer=null;
function toast(title,sub,undo){
  var el=$('#toast');
  el.innerHTML=ic('checkc')+'<div class="tb"><strong>'+esc(title)+'</strong>'+(sub?esc(sub):'')+'</div>'+(undo?'<button class="undo" id="undoBtn">Undo</button>':'');
  el.classList.add('show');clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){el.classList.remove('show');},5200);
  if(undo)$('#undoBtn').onclick=function(){undo();el.classList.remove('show');};
}
function openItem(id){
  clearTimeout(advanceTimer);
  var it=item(id);
  S.view='detail';S.cur=id;S.ovOpen=false;S.menu=false;
  S.basis=it.group==='conflict'?'master':'alice';
  renderAll(false);
}
function goList(){clearTimeout(advanceTimer);S.view='list';S.cur=null;S.ovOpen=false;S.menu=false;renderAll(false);}
function step(dir){
  var o=ITEMS.map(function(i){return i.id;}),i=S.cur?o.indexOf(S.cur):-1;
  openItem(o[(i+dir+o.length)%o.length]);
}
function nextOpen(fromId){
  var o=ITEMS.map(function(i){return i.id;}),s=o.indexOf(fromId);
  for(var k=1;k<=o.length;k++){var id=o[(s+k)%o.length];if(stOf(item(id)).status==='open')return id;}
  return null;
}
function answer(a,by){
  var it=cur();if(!it||it.group!=='fact')return;
  var st=stOf(it);if(st.status==='approved')return;
  st.answer=a;st.by=by;st.override=null;
  st.choice=it.cands.findIndex(function(c){return c.answer===a;});
  if(by==='you')log(it,'You answered "'+(a==='yes'?it.q.yes:it.q.no)+'"','You','answer');
  else log(it,it.q.owner.name+' answered "'+(a==='yes'?it.q.yes:it.q.no)+'"',it.q.owner.name,null);
  S.flash=true;renderAll(true);
}
function choose(i){
  var it=cur();if(!it)return;
  var st=stOf(it);if(st.status!=='open'||i<0||i>=it.cands.length)return;
  if(it.group==='fact'){answer(it.cands[i].answer,'you');return;}
  st.choice=i;st.override=null;
  log(it,'You chose '+it.cands[i].code+(it.cands[i].tag?' ('+it.cands[i].tag+')':''),'You','choice');
  S.flash=true;renderAll(true);
}
function approve(){
  var it=cur();if(!it)return;
  var st=stOf(it);if(st.status!=='open')return;
  var code=currentCode(it,st);if(!code)return;
  var snap=clone(st),dl=S.durations.length;
  st.status='approved';st.approvedCode=code;
  if(it.group==='conflict'&&st.choice===0&&st.flag&&!st.override)log(it,'You flagged 3 master data products for re-review','You',null);
  log(it,'You approved '+code,'You',null);
  log(it,'Sent to '+SIGNER+' for sign-off','System',null);
  if(st.openedAt)S.durations.push(Date.now()-st.openedAt);
  S.ovOpen=false;S.closed.doc=false;
  renderAll(true);
  var id=it.id;
  toast('Classification reviewed',code+' was sent to '+SIGNER+' for sign-off.',function(){
    clearTimeout(advanceTimer);S.st[id]=snap;S.durations.length=dl;openItem(id);
  });
  clearTimeout(advanceTimer);
  advanceTimer=setTimeout(function(){
    if(S.cur!==id||S.view!=='detail')return;
    var n=nextOpen(id);
    if(n)openItem(n);else goList();
  },1800);
}
function openAsk(){
  var it=cur(),q=it.q;
  $('#askSheet').innerHTML='<h2 id="askTitle">Ask the person who knows</h2>'+
    '<div class="person"><span class="avatar">'+q.owner.initials+'</span><div><strong>'+esc(q.owner.name)+'</strong><small>'+esc(q.owner.role)+'</small></div></div>'+
    '<label for="askText">Your question</label><textarea id="askText">'+esc(q.ask)+'</textarea>'+
    '<div class="preview"><strong>What '+esc(q.owner.first)+' gets</strong><br>An email with your question, the product details and one-click answers. No traide login needed. The answer is documented with '+esc(q.owner.first)+'\u2019s name.<div class="fake"><span>Yes</span><span>No</span><span>Add a note</span></div></div>'+
    '<div class="actions"><button class="btn" data-act="ask-cancel">Cancel</button><button class="btn primary" data-act="ask-send">Send question</button></div>';
  $('#askSheet').classList.add('show');$('#scrim').classList.add('show');
  setTimeout(function(){var t=$('#askText');if(t)t.focus();},60);
}
function closeAsk(){$('#askSheet').classList.remove('show');if(!$('#brief').classList.contains('show'))$('#scrim').classList.remove('show');}
function sendAsk(){
  var it=cur(),st=stOf(it),txt=($('#askText').value||'').trim();
  if(!txt){$('#askText').focus();return;}
  var snap=clone(st);
  st.status='waiting';st.askedAt=clock();st.askText=txt;st.answer=null;st.choice=null;st.by=null;st.override=null;
  log(it,'You asked '+it.q.owner.name+': '+txt,'You',null);
  closeAsk();
  var id=it.id,n=nextOpen(id);
  if(n)openItem(n);else goList();
  toast('Question sent to '+it.q.owner.name,'The product returns to the queue when '+it.q.owner.first+' answers.',function(){S.st[id]=snap;openItem(id);});
}
function simReply(){
  var it=cur(),st=stOf(it);
  st.status='open';st.openedAt=Date.now();
  answer(it.cands[0].answer,'owner');
  toast(it.q.owner.name+' answered','The product is back in your queue.');
}
function applyOverride(){
  var it=cur(),st=stOf(it),raw=($('#ovCode').value||'').replace(/[\s.]/g,''),reason=$('#ovReason').value,err=$('#ovErr');
  if(!/^\d{8}$/.test(raw)){err.textContent='Enter an 8-digit code, for example 8544.42.90.';$('#ovCode').focus();return;}
  if(!reason){err.textContent='Choose why you\u2019re overriding. The reason is documented and goes back to Alice.';$('#ovReason').focus();return;}
  var code=raw.slice(0,4)+'.'+raw.slice(4,6)+'.'+raw.slice(6);
  st.override={code:code,reason:reason};
  log(it,'You entered '+code+' instead of the suggestions. Reason: '+reason,'You','choice');
  S.ovOpen=false;S.flash=true;renderAll(true);
}
function quickQ(key,free){
  var it=cur();if(!it)return;
  S.menu=false;
  if(key==='similar'){S.basis='master';renderAll(true);return;}
  var qa=S.qa[it.id]=S.qa[it.id]||[];
  if(free)qa.push({q:free,a:'In the live product, Alice answers free questions here. This concept only simulates the quick questions.'});
  else if(key==='why')qa.push({q:QQ[0][1],a:it.why});
  else qa.push({q:QQ[1][1],a:it.change});
  S.basis='alice';renderAll(true);
  var bs=document.querySelector('.bscroll');if(bs)bs.scrollTop=bs.scrollHeight;
}
function openBrief(){$('#brief').classList.add('show');$('#scrim').classList.add('show');$('#brief').scrollTop=0;setTimeout(function(){var b=document.querySelector('[data-act="close-brief"]');if(b)b.focus({preventScroll:true});},30);}
function closeBrief(){$('#brief').classList.remove('show');if(!$('#askSheet').classList.contains('show'))$('#scrim').classList.remove('show');}

/* design notes */
function setNotes(on){S.notes=on;document.body.classList.toggle('notes-on',on);$('#notesToggle').checked=on;if(!on)closeNote();}
function closeNote(){S.note=null;$('#pop').classList.remove('show');document.querySelectorAll('.pin.active').forEach(function(p){p.classList.remove('active');});}
function openNote(n){
  if(!S.notes)setNotes(true);
  var note=NOTES[n-1];if(!note)return;
  clearTimeout(advanceTimer);
  if(note.view==='list'){S.view='list';S.cur=null;if(n===1||n===2)S.tab='all';}
  if(note.view==='detail'){
    var need=note.g,c=cur();
    var ok=S.view==='detail'&&c&&(!need||c.group===need)&&stOf(c).status!=='waiting';
    if(!ok){
      var pool=ITEMS.filter(function(i){return (!need||i.group===need)&&stOf(i).status==='open';});
      if(!pool.length)pool=ITEMS.filter(function(i){return (!need||i.group===need)&&stOf(i).status!=='waiting';});
      if(!pool.length)pool=ITEMS.filter(function(i){return !need||i.group===need;});
      S.view='detail';S.cur=pool[0].id;S.basis=pool[0].group==='conflict'?'master':'alice';
    }
    S.closed.tariff=false;S.closed.product=false;
  }
  S.note=n;
  renderAll(false);
  requestAnimationFrame(function(){positionNote(n,true);});
}
function positionNote(n,scroll){
  var p=document.querySelector('.pin[data-pin="'+n+'"]'),pop=$('#pop'),note=NOTES[n-1];
  document.querySelectorAll('.pin.active').forEach(function(x){x.classList.remove('active');});
  pop.innerHTML='<button class="pop-x" data-act="note-close" aria-label="Close note">\u00d7</button><div class="pop-n">Design note '+n+' of '+NOTES.length+'</div><h3>'+esc(note.t)+'</h3>'+
    '<p class="pop-sec"><strong>What:</strong> '+esc(note.what)+'</p>'+
    (note.opts?'<p class="pop-sec"><strong>What I considered:</strong></p><ul class="pop-opts">'+note.opts.map(function(o){return '<li>'+esc(o)+'</li>';}).join('')+'</ul>':'')+
    '<p class="pop-sec"><strong>Why:</strong> '+esc(note.why)+'</p>'+
    (note.a?'<p class="pop-assume"><strong>Assuming:</strong> '+esc(note.a)+'</p>':'')+
    '<div class="pop-nav"><button class="btn" data-act="note-prev"'+(n===1?' disabled':'')+'>Previous</button><button class="btn" data-act="note-next">'+(n===NOTES.length?'Done':'Next')+'</button></div>';
  pop.classList.add('show');
  if(!p||!p.offsetParent){pop.style.left='50%';pop.style.top='90px';pop.style.transform='translateX(-50%)';return;}
  p.classList.add('active');
  if(scroll)p.scrollIntoView({block:'center',behavior:'smooth'});
  var place=function(){
    var r=p.getBoundingClientRect(),w=pop.offsetWidth,h=pop.offsetHeight;
    var left=r.left-w-14,top=r.top-8;
    if(left<12)left=Math.min(r.right+14,window.innerWidth-w-12);
    if(left<12)left=12;
    if(top+h>window.innerHeight-12)top=window.innerHeight-h-12;
    if(top<12)top=12;
    pop.style.transform='none';pop.style.left=left+'px';pop.style.top=top+'px';
  };
  place();if(scroll)setTimeout(place,400);
}
function reset(){clearTimeout(advanceTimer);var n=S.notes;S=fresh();setNotes(n);renderAll(false);toast('Prototype reset','All sample products are pending again.');}

/* events */
document.addEventListener('click',function(e){
  var p=e.target.closest('.pin');
  if(p){e.preventDefault();e.stopPropagation();var n=+p.dataset.pin;if(S.note===n)closeNote();else openNote(n);return;}
  if(e.target.id==='scrim'){closeAsk();closeBrief();return;}
  if(S.menu&&!e.target.closest('.askbar')){S.menu=false;var m=document.querySelector('.menu');if(m)m.classList.remove('show');}
  var t=e.target.closest('[data-open],[data-choose],[data-answer],[data-act],[data-ltab],[data-basis],[data-confirm],[data-sect],[data-card],[data-qq]');
  if(!t){if(!e.target.closest('#pop'))closeNote();return;}
  if(t.disabled)return;
  if(t.hasAttribute('data-open')){openItem(t.getAttribute('data-open'));return;}
  if(t.hasAttribute('data-choose')){choose(+t.getAttribute('data-choose'));return;}
  if(t.hasAttribute('data-answer')){answer(t.getAttribute('data-answer'),'you');return;}
  if(t.hasAttribute('data-ltab')){S.tab=t.getAttribute('data-ltab');renderAll(false);return;}
  if(t.hasAttribute('data-basis')){S.basis=t.getAttribute('data-basis');renderAll(true);return;}
  if(t.hasAttribute('data-sect')){var k=t.getAttribute('data-sect');S.closed[k]=!S.closed[k];renderAll(true);return;}
  if(t.hasAttribute('data-card')){var ck=S.cur+':'+t.getAttribute('data-card');S.cardClosed[ck]=!S.cardClosed[ck];renderAll(true);return;}
  if(t.hasAttribute('data-qq')){quickQ(t.getAttribute('data-qq'));return;}
  if(t.hasAttribute('data-confirm')){var it=cur(),ky=t.getAttribute('data-confirm');stOf(it).confirmed[ky]=true;log(it,'You confirmed "'+ky+'", which Alice read from an image','You',null);renderAll(true);return;}
  switch(t.getAttribute('data-act')){
    case 'approve':approve();break;
    case 'override':S.ovOpen=true;renderAll(true);setTimeout(function(){var c=$('#ovCode');if(c)c.focus();},30);break;
    case 'ov-cancel':S.ovOpen=false;renderAll(true);break;
    case 'ov-apply':applyOverride();break;
    case 'ask':openAsk();break;
    case 'ev-toggle':(function(){var it=cur();S.evOpen[it.id]=!S.evOpen[it.id];renderAll(true);})();break;
    case 'ask-cancel':closeAsk();break;
    case 'ask-send':sendAsk();break;
    case 'sim-reply':simReply();break;
    case 'cancel-ask':(function(){var it=cur();stOf(it).status='open';log(it,'You withdrew the question to '+it.q.owner.name,'You',null);renderAll(true);})();break;
    case 'reopen':(function(){clearTimeout(advanceTimer);var it=cur(),st=stOf(it);st.status='open';st.openedAt=Date.now();log(it,'You reopened the product. Sign-off request withdrawn','You',null);renderAll(true);})();break;
    case 'go-list':goList();break;
    case 'prev':step(-1);break;
    case 'next':step(1);break;
    case 'qq':S.menu=!S.menu;renderAll(true);break;
    case 'brief':openBrief();break;
    case 'close-brief':closeBrief();break;
    case 'reset':reset();break;
    case 'noop':toast('Outside this concept','This prototype covers the review queue only.');break;
    case 'note-close':closeNote();break;
    case 'note-next':if(S.note>=NOTES.length)closeNote();else openNote(S.note+1);break;
    case 'note-prev':if(S.note>1)openNote(S.note-1);break;
  }
});
document.addEventListener('submit',function(e){
  if(e.target.id==='askForm'){e.preventDefault();var v=($('#askIn').value||'').trim();if(v)quickQ(null,v);}
});
document.addEventListener('change',function(e){
  if(e.target.id==='notesToggle'){setNotes(e.target.checked);if(e.target.checked)openNote(1);return;}
  if(e.target.hasAttribute('data-flag')){var it=cur();stOf(it).flag=e.target.checked;renderAll(true);}
});
window.addEventListener('resize',function(){if(S.note!==null)positionNote(S.note,false);});
document.addEventListener('scroll',function(){if(S.note!==null)positionNote(S.note,false);},{passive:true,capture:true});

renderAll(false);
openBrief();
})();
