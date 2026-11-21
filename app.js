// Candy Motorsport Heritage Archive: navigation and page rendering.

const revisionLedgerBlocks=archive[6].blocks.splice(10); const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const $=id=>document.getElementById(id);const groups=[['Home','home'],['Team History','history'],['F1 Seasons','seasons'],['Trophy Cabinet','champ'],['Meet the Team','team'],['Liveries Collection','liveries'],['Media Gallery','gallery'],['Chapters','chapters'],['Update archive','update']];let extra=[];try{extra=JSON.parse(localStorage.getItem('candyArchiveNotes')||'[]')}catch{};const sections=()=>archive.concat(extra);const tbl=rows=>'<div class="tablewrap"><table>'+rows.map((r,i)=>'<tr>'+r.map(c=>`<${i?'td':'th'}>${esc(c)}</${i?'td':'th'}>`).join('')+'</tr>').join('')+'</table></div>';const blocks=bs=>bs.map(b=>b.type==='table'?tbl(b.rows):b.type==='image'?`<img src="${b.src}" alt="Archive illustration" loading="lazy">`:b.type==='heading'?`<h3>${esc(b.text)}</h3>`:`<p>${esc(b.text).replace(/\n/g,'<br>')}</p>`).join('');const links=ids=>ids.map(i=>`<div class="entry"><button class="link" onclick="go('s${i}')">${esc(sections()[i].title)} →</button></div>`).join('');const by=re=>sections().map((s,i)=>re.test(s.title)?i:-1).filter(i=>i>=0);const panel=(title,body)=>`<section class="panel"><h2>${title}</h2>${body}</section>`;const dropdown=(title,body)=>
  `<details class="race-report">
    <summary>${esc(title)}</summary>
    <div class="race-report-content">${body}</div>
  </details>`;const stat=(n,v)=>`<div class="stat"><small>${n}</small><strong>${v}</strong></div>`;const latest=archive[archive.length-1];const artwork=latest.blocks.find(b=>b.type==='image');
const standardLiveryPhoto=`<figure class="cm01-photo"><img src="assets/images/cm01-standard-2024.png" alt="Candy Motorsport CM-01 standard 2024 Formula One livery, white and electric pink" loading="lazy"><figcaption>CM-01 · Official standard 2024 livery</figcaption></figure>`;
const team=[{"name":"Pierre Gasly","group":"Race Drivers","role":"Car 1","nation":"France","expiry":"2026","detail":"84 OVR · 137 points · 1 win","photo":"assets/images/19b7f4a4d4455d.jpg"},{"name":"Daniel Ricciardo","group":"Race Drivers","role":"Car 2","nation":"Australia","expiry":"2026","detail":"82 OVR · 159 points · 3 wins","photo":"assets/images/d2f7de893e3918.jpg"},{"name":"Abbi Pulling","group":"Driver Academy","role":"Affiliate driver","nation":"United Kingdom","expiry":"Contract through 2029","detail":"60 OVR · 2 FP1 outings","photo":"assets/images/21838d794821c8.jpg"},{"name":"Jean-Philippe Moulin","group":"Driver Academy","role":"Affiliate driver","nation":"Belgium","expiry":"2025","detail":"70 OVR · 1 FP1 outing","photo":"assets/images/af8115b2c1bef8.jpg"},{"name":"Corinne Morel","group":"Driver Academy","role":"Affiliate driver","nation":"Belgium","expiry":"2024","detail":"61 OVR · 1 FP1 outing","photo":"assets/images/b780f83dcaea45.jpg"},{"name":"Caroline Candy","group":"Leadership","role":"Team principal","nation":"United States","expiry":"Undisclosed","detail":"F1 division","photo":"assets/images/b75fe7691fe868.jpg"},{"name":"Victoria Candy","group":"Leadership","role":"Group chair & CEO","nation":"United States","expiry":"Undisclosed","detail":"Group leadership","photo":"assets/images/6d2de59f53b751.jpg"},{"name":"Pierre Waché","group":"Technical & Sporting","role":"Technical chief","nation":"France","expiry":"2026","detail":"92 OVR · Technical department","photo":"assets/images/8f48115d634180.jpg"},{"name":"Peter Prodromou","group":"Technical & Sporting","role":"Head of aerodynamics","nation":"United Kingdom","expiry":"2026","detail":"87 OVR · Aerodynamics department","photo":"assets/images/242189e4c036b4.jpg"},{"name":"Ron Meadows","group":"Technical & Sporting","role":"Sporting director","nation":"United Kingdom","expiry":"2025","detail":"90 OVR · Sporting department","photo":"assets/images/047a06c369ebdd.jpg"},{"name":"Marcus Dudley","group":"Race Engineering","role":"Car 1 race engineer","nation":"United Kingdom","expiry":"2026","detail":"90 OVR · Pierre Gasly","photo":"assets/images/ec0d302557a240.jpg"},{"name":"Riccardo Adami","group":"Race Engineering","role":"Car 2 race engineer","nation":"Italy","expiry":"2025","detail":"91 OVR · Daniel Ricciardo","photo":"assets/images/9b111b59859f4c.jpg"}];let teamFilter='All';let teamQuery='';let portraits={};function teamPage(){return `<div class="hero"><div class="eyebrow">2024 · Current organisation</div><h1>Meet the Team</h1><p>The people behind the Pink Empire.</p></div><div class="tools"><input class="edit" aria-label="Find team member" placeholder="Find a name or role" oninput="teamQuery=this.value;drawTeam()"><select aria-label="Department" onchange="teamFilter=this.value;drawTeam()">${['All',...new Set(team.map(t=>t.group))].map(g=>`<option ${g===teamFilter?'selected':''}>${g}</option>`).join('')}</select></div><p class="muted">Current named personnel, pre-Silverstone 2024. Official fictional Candy Motorsport team portraits.</p><div id="teamcards"></div>`}function drawTeam(){let el=$('teamcards');if(!el)return;el.innerHTML=[...new Set(team.map(t=>t.group))].filter(g=>teamFilter==='All'||teamFilter===g).map(g=>{let list=team.map((t,i)=>({...t,i})).filter(t=>t.group===g&&(t.name+' '+t.role).toLowerCase().includes(teamQuery.toLowerCase()));return list.length?`<h2 class="teamheading">${g}</h2><div class="teamgrid ${g==='Race Drivers'?'featured':''}">${list.map(t=>`<article class="person"><div class="portrait">${portraits[t.i]||t.photo?`<img src="${portraits[t.i]||t.photo}" alt="Portrait of ${esc(t.name)}">`:`<span>${t.name.split(' ').map(n=>n[0]).join('')}</span><small>Portrait pending</small>`}</div><div class="personbody"><div class="eyebrow">${t.role}</div><h2>${t.name}</h2><p>${t.nation} · ${t.detail}</p><p><b>Contract:</b> ${t.expiry}</p></div></article>`).join('')}</div>`:''}).join('')||'<p>No matching personnel.</p>'}function setPortrait(i,el){let f=el.files[0];if(!f)return;let reader=new FileReader();reader.onload=()=>{let im=new Image();im.onload=()=>{let c=document.createElement('canvas');let scale=Math.min(1,480/im.width,600/im.height);c.width=im.width*scale;c.height=im.height*scale;c.getContext('2d').drawImage(im,0,0,c.width,c.height);portraits[i]=c.toDataURL('image/jpeg',.85);try{localStorage.setItem('candyPortraits',JSON.stringify(portraits))}catch{alert('Portrait storage unavailable; changes remain for this session only.')}drawTeam()};im.src=reader.result};reader.readAsDataURL(f)};
function go(id){location.hash=id;render()}function render(){let id=location.hash.slice(1)||'home';if(id==='races'){location.replace('#seasons');return;}if(id==='races'){location.replace('#seasons');return;}$('nav').innerHTML=groups.map(([n,k])=>`<button class="${id===k?'active':''}" onclick="go('${k}')">${n}</button>`).join('')+'<small>WEB EDITION 1.2<br>Source archive v3.6<br>Fictional F1 Manager career</small>';let out='';if(id==='home'){out=`<div class="hero"><div class="eyebrow">The Pink Empire · Est. Joliet, Illinois 1985</div><h1>HERITAGE<br>ARCHIVE</h1><p>Our history. Our people. Our journey.</p><small>Sweet on the outside. Ruthless on the inside.</small></div><div class="stats">${stat('Constructors · P1','296 pts')}${stat('F1 victories','4')}${stat('F1 podiums','12')}${stat('F1 poles','5')}</div><div class="cols">${panel('Latest announcement', ''+'<h3>Candy Motorsport leads the World Championship!</h3><p>A historic double podium at Silverstone puts Candy Motorsport first in the Constructors Championship with 296 points, just one ahead of Red Bull. Ricciardo finished second and Gasly third.</p><button class="action" onclick="go(&quot;s19&quot;)">Read race report</button>')}${panel('Championship watch', [['Candy Motorsport',296],['Red Bull',295],['Ferrari',278]].map(([n,v])=>`<p><strong>${n}</strong> · ${v} pts</p><div class="bar"><span style="width:${v/296*100}%"></span></div>`).join('')+'<p><b>1 point</b> ahead of Red Bull</p><hr><p>Ricciardo · P2 · 159 pts<br>Gasly · P4 · 137 pts</p><p class="muted">After Silverstone, 7 July 2024</p>')}</div><div class="stats">${stat('Pre-F1 titles','18')}${stat('Pre-F1 wins','247')}${stat('Podium streak','8')}${stat('Next race','HUN')}</div>${panel('Meet the Team','<button class="action" onclick="go(&quot;team&quot;)">Explore current personnel</button>')}${panel('Explore the archive',links([1,2,4,6,7,9,archive.length-1]))}`}

else if(/^s\d+$/.test(id)&&sections()[+id.slice(1)]){
  const i=+id.slice(1);
  const chapter=sections()[i];
  const chapterNumber=String(i+1).padStart(2,'0');
  const chapterTitle=chapter.title.replace(/^\d+\s+/,'');
  const totalChapters=sections().length;

  out=`
    <div class="chapter-hero">
      <div class="chapter-hero-top">
        <span class="chapter-kicker">
          CANDY MOTORSPORT · HERITAGE ARCHIVE
        </span>
        <span class="chapter-reference">
          RECORD ${chapterNumber}
        </span>
      </div>

      <h1>${esc(chapterTitle)}</h1>

      <p>
        The Pink Empire · Official Historical Collection
      </p>

      <div class="chapter-hero-footer">
        <span>EST. 1985 · JOLIET, ILLINOIS</span>
        <span>
          CHAPTER ${i+1} OF ${totalChapters}
        </span>
      </div>
    </div>

    <div class="chapter-reading-layout">
      <article class="chapter-document">
        <div class="chapter-document-label">
          HISTORICAL RECORD ${chapterNumber}
        </div>

        ${blocks(chapter.blocks)}
      </article>
    </div>

    <nav class="chapter-navigation"
         aria-label="Chapter navigation">

      <button class="chapter-back"
              onclick="go('chapters')">
        ← Back to Chapters
      </button>

      <div class="chapter-navigation-arrows">
        ${i>0?`
          <button class="chapter-nav-button"
                  onclick="go('s${i-1}')">
            ← Previous Chapter
          </button>
        `:''}

        ${i<totalChapters-1?`
          <button class="chapter-nav-button"
                  onclick="go('s${i+1}')">
            Next Chapter →
          </button>
        `:''}
      </div>
    </nav>
  `;
}

else if(id==='seasons'){let season=archive.find(s=>s.title.startsWith('05'));let records=archive.find(s=>s.title.startsWith('06'));let affiliates=archive.find(s=>s.title.startsWith('07'));let gpIds=[8,10,11,12,13,14,15,19];out=`<div class="hero"><div class="eyebrow">Season archive · 2024 inaugural Formula One campaign</div><h1>F1 Seasons</h1><p>Every campaign, every milestone. The Pink Empire's Formula One story.</p>
<div class="season-tabs">
  <button class="season-tab active" onclick="go('seasons')">
    2024 Season
  </button>
  <button class="season-tab" onclick="go('season2025')">
    2025 Season
</button>
</div></div><div class="stats">${stat('2024 races logged','12')}${stat('Victories','4')}${stat('Podiums','12')}${stat('Pole positions','5')}</div>${panel('2024 · Inaugural season',`<p><b>Constructors: P1 · 296 points</b> after the British Grand Prix. Candy Motorsport leads on 296 points; Red Bull has 295 and Ferrari has 278.</p><p>Daniel Ricciardo: P2 · 159 points<br>Pierre Gasly: P4 · 137 points</p><p class="muted">Historical cut-off: after Silverstone, before Hungary 2024. This page reflects the recorded career archive, not real-world Formula One results.</p><button class="action" onclick="go('s5')">Open full 2024 season chapter</button>`)}${dropdown('Race-by-Race Results',tbl(season.blocks.find(b=>b.type==='table').rows))}${dropdown('2024 Grand Prix Reports',   gpIds.map(i => {     const report = archive[i];     return `<details class="race-report">       <summary>${[   'Round 5 - Chinese Grand Prix | 21st April 2024',   'Round 6 - Miami Grand Prix | 5th May 2024',   'Round 7 - Emilia-Romagna Grand Prix | 19th May 2024',   'Round 8 - Monaco Grand Prix | 26th May 2024',   'Round 9 - Canadian Grand Prix | 9th June 2024',   'Round 10 - Spanish Grand Prix | 23rd June 2024',   'Round 11 - Austrian Grand Prix | 30th June 2024', 'Round 12 - British Grand Prix | 7th July 2024' ][gpIds.indexOf(i)]}</summary>       <div class="race-report-content">         ${blocks(report.blocks)}       </div>     </details>`;   }).join('') )}${dropdown("2024 Drivers' Championship Standings",`
  <table>
    <thead>
      <tr>
        <th>Pos</th>
        <th>Driver</th>
        <th>Constructor</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>Daniel Ricciardo</td>
        <td>Candy Motorsport</td>
        <td>159</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Pierre Gasly</td>
        <td>Candy Motorsport</td>
        <td>137</td>
      </tr>
    </tbody>
  </table>
  <p class="muted">Standings after Round 12, British Grand Prix. Other drivers will be added when their positions and points are confirmed.</p>
`)}${dropdown("2024 Constructors' Championship Standings",`
  <table>
    <thead><tr><th>Pos</th><th>Constructor</th><th>Points</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Candy Motorsports</td><td>296</td></tr>
      <tr><td>2</td><td>Red Bull</td><td>295</td></tr>
      <tr><td>3</td><td>Ferrari</td><td>278</td></tr>
      <tr><td>4</td><td>McLaren</td><td>166</td></tr>
      <tr><td>5</td><td>Mercedes</td><td>94</td></tr>
      <tr><td>6</td><td>Aston Martin</td><td>48</td></tr>
      <tr><td>7</td><td>RB</td><td>30</td></tr>
      <tr><td>8</td><td>Kick Sauber</td><td>2</td></tr>
      <tr><td>9</td><td>Alpine</td><td>2</td></tr>
      <tr><td>10</td><td>Williams</td><td>1</td></tr>
      <tr><td>11</td><td>Haas</td><td>0</td></tr>
    </tbody>
  </table>
  <p class="muted">Confirmed standings after Round 12, British Grand Prix, 7 July 2024.</p>
`)}${dropdown('2024 Championship Records & Statistics',blocks(records.blocks))}${dropdown('Affiliate Driver Outings',blocks(affiliates.blocks))}${dropdown('CM-01 · Standard 2024 Livery',standardLiveryPhoto)}${dropdown('2024 Special Liveries',blocks(archive[9].blocks.slice(0,8)) + `
  <h3>Austin Grand Prix | American Sugar</h3>
  <p>Pink, blue and white angular stripes honour American racing heritage and the team's Illinois roots.</p>
  <p><b>To be revealed soon.</b></p>

  <h3>Las Vegas Grand Prix | Sugar Jackpot</h3>
  <p>Pink, gold and black celebrate the illuminated casinos and glamour of the Las Vegas Strip.</p>
  <p><b>To be revealed soon.</b></p>
`)}${dropdown('2024 Driver & Team Announcements',
  [16,17,18].map(i => `
    <article class="panel">
      <h3>${esc(archive[i].title.replace(/^\d+\s+/,''))}</h3>
      ${blocks(archive[i].blocks)}
    </article>
  `).join('')
)}`}
  else if(id==='season2025'){
  out=`<div class="hero">
    <div class="eyebrow">Season archive · 2025 Formula One campaign</div>
    <h1>F1 Seasons</h1>
    <p>Every campaign, every milestone. The Pink Empire's Formula One story.</p>
    <div class="season-tabs">
      <button class="season-tab" onclick="go('seasons')">2024 Season</button>
      <button class="season-tab active" onclick="go('season2025')">2025 Season</button>
    </div>
  </div>
  ${panel('2025 · Season archive',`
    <p>The 2025 Candy Motorsport Formula One campaign will be documented here as the season progresses.</p>
    <p class="muted">Race results, championship standings, driver statistics and Grand Prix reports will be added when confirmed.</p>
  `)}
  ${dropdown('Race-by-Race Results','<p>No results recorded yet.</p>')}
  ${dropdown('2025 Grand Prix Reports','<p>No reports recorded yet.</p>')}
 ${dropdown("2025 Drivers' Championship Standings",`
  <table>
    <thead>
      <tr>
        <th>Pos</th>
        <th>Driver</th>
        <th>Constructor</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="4">Awaiting 2025 championship results.</td>
      </tr>
    </tbody>
  </table>
`)}

${dropdown("2025 Constructors' Championship Standings",`
  <table>
    <thead>
      <tr>
        <th>Pos</th>
        <th>Constructor</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">Awaiting 2025 championship results.</td>
      </tr>
    </tbody>
  </table>
`)}
  ${dropdown('Affiliate Driver Outings',   '<p>No 2025 affiliate driver outings recorded yet.</p>')}  ${dropdown('2025 Special Liveries',   '<p>To be announced.</p>')}  ${dropdown('2025 Driver & Team News',   '<p>No 2025 driver or team announcements recorded yet.</p>')}`;
}

else if(id==='champ'){
  const honours=archive[3].blocks;
  const record=archive[6].blocks;
  const titleBlock=(title,body)=>`
    <section class="panel trophy-section">
      <h2>${title}</h2>
      ${body}
    </section>`;

  out=`
    <div class="hero trophy-hero">
      <div class="eyebrow">Candy Motorsport · Est. 1985</div>
      <h1>THE TROPHY CABINET</h1>
      <p>Forty years of racing. A legacy built on winning.</p>
    </div>

    <div class="stats trophy-stats">
      ${stat('Historic Championships','18')}
      ${stat('Pre-F1 Race Wins','247')}
      ${stat('Formula One Victories','4')}
      ${stat('Formula One Podiums','12')}
    </div>

    ${titleBlock("🏆 Champions' Gallery",`
      <p>From the first regional championships to national
      stock-car glory and international endurance titles.</p>
      ${dropdown('Explore All 18 Championship Titles',
        blocks(honours.slice(0,1)))}
    `)}

    ${titleBlock('🥇 The Crown Jewels',`
      <p>Our greatest victories across the decades,
      including Daytona and Le Mans.</p>
      ${blocks(honours.slice(1,4))}
    `)}

    ${titleBlock('🏎️ Formula One Silverware',`
      <p>The Pink Empire's Formula One achievements,
      beginning with its inaugural 2024 campaign.</p>
      ${dropdown('Grand Prix Victories',
        blocks(record.slice(2,4)))}
      ${dropdown('Podiums & Trophies',
        blocks(record.slice(4,6)))}
      
${dropdown('Pole Positions & Championship Status',`
  <h3>2024 Pole Position Register</h3>
  ${tbl([
    ['Grand Prix','Date','Driver','Pole Lap','Conditions'],
    ['Miami','4 May 2024','Daniel Ricciardo','1:38.085','Moderate rain'],
    ['Emilia-Romagna','18 May 2024','Daniel Ricciardo','1:20.388','Heavy rain'],
    ['Monaco','25 May 2024','Daniel Ricciardo','1:09.327','Partly cloudy'],
    ['Canada','8 June 2024','Daniel Ricciardo','1:09.969','Not recorded'], ['Great Britain','6 July 2024','Daniel Ricciardo','1:26.049','Cloudy']
  ])}

  <h3>Notable Qualifying Achievements</h3>
  <p><strong>Monaco:</strong> Pierre Gasly qualified P2
  with a 1:09.375, securing Candy Motorsport's
  first all-team front-row lockout.</p>
  <p><strong>Canada:</strong> Pierre Gasly qualified P5
  with a 1:10.692.</p>

  <h3>Championship Status</h3>
  <p>No Formula One Drivers' or Constructors'
  Championship titles recorded at the
  archive cut-off.</p>
`)}

    `)}

    ${titleBlock('⭐ Legendary Milestones',`
      <p>The moments that transformed a family racing
      organisation into a Formula One contender.</p>
      ${dropdown('Explore the Milestone Wall',
        blocks(record.slice(8,10)))}
    `)}
  `;
}
else if(id==='ledger'){out=`<div class="hero"><div class="eyebrow">Heritage Archive · Change history</div><h1>REVISION LEDGER</h1><p>A chronological record of archive updates and the protocol for maintaining our history.</p></div>${panel('Revision history',blocks(revisionLedgerBlocks))}<div class="tools"><button class="action" onclick="go('champ')">Back to championships & trophies</button></div>`}
else if(id==='team'){out=teamPage()}
else if(id==='gallery'){
  const photos=[{src:'assets/images/cm01-standard-2024.png',chapter:'CM-01 · Standard 2024 Livery',chapterId:9},...sections().flatMap((section,i)=>
    section.blocks
      .filter(b=>b.type==='image')
      .map(b=>({
        src:b.src,
        chapter:section.title,
        chapterId:i
      }))
  )];

  const photoCard=(photo,i)=>`
    <div class="gallery-card">
      <a href="${esc(photo.src)}" target="_blank"
         rel="noopener noreferrer"
         title="Open full-size photograph">
        <img src="${esc(photo.src)}"
             alt="${esc(photo.chapter)}"
             loading="lazy">
      </a>
      <div class="gallery-caption">
        <small>ARCHIVE IMAGE ${String(i+1).padStart(2,'0')}</small>
        <h3>${esc(photo.chapter.replace(/^\d+\s+/,''))}</h3>
        <button class="link"
                onclick="go('s${photo.chapterId}')">
          Explore archive chapter →
        </button>
      </div>
    </div>
  `;

  out=`
    <div class="hero">
      <div class="eyebrow">
        Candy Motorsport · The visual archive
      </div>
      <h1>THE MEDIA GALLERY</h1>
      <p>Forty years of ambition. One Pink Empire.
      Explore the photographs and artwork preserving
      Candy Motorsport's racing story.</p>
    </div>

    <div class="stats">
      ${stat('Archive Images',photos.length)}
      ${stat('Founded','1985')}
      ${stat('F1 Debut','2024')}
      ${stat('Our Heritage','Joliet, Illinois')}
    </div>

    ${panel('Through the Lens',`
      <p>From distinctive racing colours to
      unforgettable Formula One moments,
      this collection celebrates the people,
      machines and milestones of Candy Motorsport.</p>
      <p class="muted">
        Select any photograph to view the original
        image, or explore its archive chapter
        to discover the story behind it.
      </p>
    `)}

    <section class="panel">
      <h2>📸 The Photographic Collection</h2>
      <p>Official images preserved in the
      Candy Motorsport Heritage Archive.</p>

      <div class="media-exhibition">
        ${photos.map(photoCard).join('') ||
          '<p>No photographs have been archived yet.</p>'}
      </div>
    </section>

    ${panel('The Collection Continues',`
      <p>The Media Gallery will expand as new
      photographs, special liveries and historic
      racing moments are added to the archive.</p>
      <p>Every image is another chapter in
      the story of the Pink Empire.</p>
    `)}
  `;
}

else if(id==='update'){out='<h1>Update archive</h1><article><p>Add a new historical entry. Entries are saved in this browser only, and can be exported as JSON for backup or future updates. The source chapters remain unchanged.</p><label>Entry title<br><input class="edit" id="nt" placeholder="British Grand Prix"></label><p><label>Details<textarea id="nb"></textarea></label></p><button class="action" onclick="add()">Save entry</button><div class="tools"><button class="action" onclick="exportNotes()">Export entries</button><label>Import entries <input type="file" accept=".json" onchange="importNotes(this)"></label></div><p id="msg" role="status"></p>'+links(extra.map((_,i)=>archive.length+i))+'</article>'}
else{let re={history:/^0[1-4]/,races:/Grand Prix|inaugural season/,champ:/Championship|records|honour roll/,people:/family leadership|Formula One project|Affiliate|renewal|line-up/,liveries:/livery/,news:/renewal|line-up/,timeline:/Living Formula One/}[id];let ids=re?by(re):sections().map((_,i)=>i);out = id === 'history'   ? `<div class="hero">        <div class="eyebrow">Candy Motorsport · Est. 1985</div>        <h1>Team History</h1>        <p>The story of the Pink Empire, from its origins in Joliet to its arrival in Formula One.</p>      </div>` +     ids.map(i => {       const chapter = sections()[i];       return `<article class="panel">         <h2>${esc(chapter.title)}</h2>         ${blocks(chapter.blocks)}       </article>`;     }).join('')   : '<h1>' + esc(groups.find(g => g[1] === id)?.[0] || 'All chapters') +     '</h1>' + panel('Browse records', links(ids));

if(id==='chapters'){
  const chapters=sections();

  const chapterCard=(chapter,i)=>{
    const preview=chapter.blocks
      .find(b=>b.type==='text' && b.text.length>60);

    
const description=(()=>{
  if(!preview) {
    return 'Explore this historical archive record.';
  }

  const text=preview.text
    .replace(/\s+/g,' ')
    .trim();

  if(text.length<=160) return text;

  const excerpt=text.slice(0,160);
  const sentenceEnd=Math.max(
    excerpt.lastIndexOf('. '),
    excerpt.lastIndexOf('! '),
    excerpt.lastIndexOf('? ')
  );

  if(sentenceEnd>=80) {
    return excerpt.slice(0,sentenceEnd+1);
  }

  const wordEnd=excerpt.lastIndexOf(' ');

  return excerpt.slice(0,wordEnd>0?wordEnd:160)
    .replace(/[,:;–-]+$/,'')+'…';
})();


    return `
      <article class="chapter-card">
        <div class="chapter-number">
          RECORD ${String(i+1).padStart(2,'0')}
        </div>
        <h3>${esc(chapter.title.replace(/^\d+\s+/,''))}</h3>
        <p>${esc(description)}</p>
        <button class="action" onclick="go('s${i}')">
          Explore Chapter →
        </button>
      </article>
    `;
  };

  out=`
    <div class="hero">
      <div class="eyebrow">
        Candy Motorsport · Historical records
      </div>
      <h1>CHAPTERS</h1>
      <p>Explore the stories, milestones and
      defining moments behind the Pink Empire.</p>
    </div>

    <div class="stats">
      ${stat('Archive Records',chapters.length)}
      ${stat('Founded','1985')}
      ${stat('Formula One Debut','2024')}
      ${stat('Home','Joliet, Illinois')}
    </div>

    ${panel('The Historical Library',`
      <p>Every great racing organisation has a
      story worth preserving. Discover the people,
      achievements and defining moments that
      shaped Candy Motorsport.</p>
      <p class="muted">
        Select any chapter to explore its complete
        historical record.
      </p>
    `)}

    <section class="panel">
      <h2>📚 Explore the Archive</h2>
      <div class="chapters-grid">
        ${chapters.map(chapterCard).join('')}
      </div>
    </section>
  `;
}

     if(id==='liveries'){
  const liveries=archive[9].blocks;

  out=`
    <div class="hero">
      <div class="eyebrow">Candy Motorsport · Racing identity</div>
      <h1>The Liveries Collection</h1>
      <p>From our signature electric pink to special
      editions celebrating the cities and circuits
      of Formula One.</p>
    </div>

    <div class="stats">
      ${stat('2024 Chassis','CM-01')}
      ${stat('Standard Identity','Pink & White')}
      ${stat('2024 Specials','4')}
      ${stat('American Specials','3')}
    </div>

    ${dropdown('CM-01 · Standard 2024 Livery',`
      ${standardLiveryPhoto}
      <p>White bodywork, sweeping electric-pink
      graphics, a bright pink front wing, a white
      rear wing and dark exposed lower bodywork
      define Candy Motorsport's Formula One identity.</p>
      <p>The design connects the team's American
      racing heritage with its new international
      ambitions under Caroline Candy.</p>
    `)}

    ${panel('2024 · Special Edition Collection',`
      <p>Four distinctive designs, each celebrating
      a particular race weekend while preserving
      the Pink Empire's signature personality.</p>

      ${dropdown('Miami Grand Prix · Miami Sugar Vice',
        blocks(liveries.slice(1,5)))}

      ${dropdown('British Grand Prix · Sherbet Lemon Edition',
        blocks(liveries.slice(5,9)))}

      ${dropdown('United States Grand Prix · American Sugar',`
        <h3>Texas-inspired racing colours</h3>
        <p>Electric pink meets blue and white in
        bold angular graphics inspired by American
        motorsport and the team's Illinois roots.</p>
        <p>The design celebrates Candy Motorsport's
        journey from Walter Candy's Joliet workshop
        to the Formula One grid.</p>
        <p><b>Status:</b> Designed in-game.
        Grand Prix debut pending.</p>
        <p><b>Official photographs:</b>
        To be revealed soon.</p>
      `)}

      ${dropdown('Las Vegas Grand Prix · Sugar Jackpot',`
        <h3>Las Vegas after dark</h3>
        <p>Electric pink, gold and black create
        a dramatic interpretation of the city's
        illuminated casinos and nightlife.</p>
        <p>The gold detailing brings a celebratory
        character to the CM-01 while the pink
        preserves Candy Motorsport's identity.</p>
        <p><b>Status:</b> Designed in-game.
        Grand Prix debut pending.</p>
        <p><b>Official photographs:</b>
        To be revealed soon.</p>
      `)}
    `)}

    ${panel('Future Seasons · Special Editions',`
      <p>Future Formula One liveries will be
      documented here as they are designed,
      approved and officially unveiled.</p>
      ${dropdown('2025 Special Liveries',`
        <p>No 2025 special editions have been
        confirmed in the archive yet.</p>
      `)}
    `)}
  `;
}
;if(id==='races')out+=panel('2024 season results',tbl(archive.find(s=>s.title.startsWith('05')).blocks.find(b=>b.type==='table').rows));if(id==='timeline')out+=blocks(archive.find(s=>s.title.startsWith('06')).blocks)}$('main').innerHTML=out+'<footer>Candy Motorsport · fictional career archive · Source: Heritage Archive v3.6 · Not affiliated with Formula One.</footer>';if(id==='team'){teamQuery='';drawTeam()}}
function add(){let t=$('nt').value.trim(),b=$('nb').value.trim();if(!t||!b)return $('msg').textContent='Enter a title and details.';extra.push({title:t,blocks:[{type:'text',text:b}]});save();render();$('msg').textContent='Entry added.'}function save(){try{localStorage.setItem('candyArchiveNotes',JSON.stringify(extra))}catch{alert('Browser storage unavailable. Export entries before closing.')}}function exportNotes(){let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(extra,null,2)],{type:'application/json'}));a.download='candy-archive-updates.json';a.click()}async function importNotes(el){try{let x=JSON.parse(await el.files[0].text());if(!Array.isArray(x)||!x.every(s=>typeof s.title==='string'&&Array.isArray(s.blocks)&&s.blocks.every(b=>b.type==='text'&&typeof b.text==='string')))throw Error();extra=x;save();render()}catch{alert('Invalid archive update file')}}$('search').addEventListener('input',e=>{let q=e.target.value.trim().toLowerCase();if(!q)return render();let ids=sections().map((s,i)=>[s,i]).filter(([s])=>(s.title+' '+s.blocks.map(b=>b.text||b.rows?.flat().join(' ')||'').join(' ')).toLowerCase().includes(q)).map(x=>x[1]);$('main').innerHTML='<h1>Search results</h1><p>'+ids.length+' matching chapters</p>'+panel('Results',links(ids)||'No matching records.')});window.addEventListener('hashchange',()=>{$('search').value='';render()});render();
