// Candy Motorsport Heritage Archive: navigation and page rendering.

const revisionLedgerBlocks=archive[6].blocks.splice(10); const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const $=id=>document.getElementById(id);const groups=[['Home','home'],['Meet the Team','team'],['F1 Seasons','seasons'],['Trophy Cabinet','champ'],['Liveries Collection','liveries'],['Team History','history'],['Media Gallery','gallery'],['Chapters','chapters'],['Update archive','update']];let extra=[];try{extra=JSON.parse(localStorage.getItem('candyArchiveNotes')||'[]')}catch{};const sections=()=>archive.concat(extra);const tbl=(rows,champion2024)=>'<div class="tablewrap"><table>'+rows.map((r,i)=>'<tr>'+r.map((c,j)=>{const trophy=champion2024&&i>0&&j===1&&c===champion2024?' <span class="champion-trophy" title="2024 World Drivers&#39; Champion" aria-label="2024 World Drivers&#39; Champion">🏆</span>':'';return `<${i?'td':'th'}>${esc(c)}${trophy}</${i?'td':'th'}>`}).join('')+'</tr>').join('')+'</table></div>';const blocks=bs=>bs.map(b=>b.type==='table'?tbl(b.rows,b.champion2024):b.type==='image'?`<img src="${b.src}" alt="Archive illustration" loading="lazy">`:b.type==='heading'?`<h3>${esc(b.text)}</h3>`:`<p>${esc(b.text).replace(/\n/g,'<br>')}</p>`).join('');const links=ids=>ids.map(i=>`<div class="entry"><button class="link" onclick="go('s${i}')">${esc(sections()[i].title)} →</button></div>`).join('');const by=re=>sections().map((s,i)=>re.test(s.title)?i:-1).filter(i=>i>=0);const panel=(title,body)=>`<section class="panel"><h2>${title}</h2>${body}</section>`;const dropdown=(title,body)=>
  `<details class="race-report">
    <summary>${esc(title)}</summary>
    <div class="race-report-content">${body}</div>
  </details>`;const stat=(n,v)=>`<div class="stat"><small>${n}</small><strong>${v}</strong></div>`;const latest=archive[archive.length-1];const artwork=latest.blocks.find(b=>b.type==='image');
const standardLiveryPhoto=`<figure class="cm01-photo"><img src="assets/images/cm01-standard-2024.png" alt="Candy Motorsport CM-01 standard 2024 Formula One livery, white and electric pink" loading="lazy"><figcaption>CM-01 · Official standard 2024 livery</figcaption></figure>`;
const lasVegasSugarJackpotPhoto=`<figure class="cm01-photo"><a href="assets/images/las-vegas-sugar-jackpot-2024.png" target="_blank" rel="noopener noreferrer" title="View full-size Sugar Jackpot Las Vegas concept artwork"><img src="assets/images/las-vegas-sugar-jackpot-2024.png" alt="Candy Motorsport CM-01 Sugar Jackpot Las Vegas 2024 special livery, photorealistic night-race concept under the Strip lights" loading="lazy"></a><figcaption>Sugar Jackpot · Las Vegas Grand Prix 2024 · Photorealistic concept render</figcaption></figure>`;
const austinAmericanSugarPhoto=`<figure class="cm01-photo"><a href="assets/images/austin-american-sugar-2024.png" target="_blank" rel="noopener noreferrer" title="View full-size American Sugar Austin concept artwork"><img src="assets/images/austin-american-sugar-2024.png" alt="Candy Motorsport 2024 American Sugar Austin Grand Prix special livery, photorealistic concept showing pink, blue and white Formula One car in motion at Circuit of the Americas" loading="lazy"></a><figcaption>American Sugar · United States Grand Prix 2024 · Concept render (race debut pending)</figcaption></figure>`;
const team=[{"name":"Pierre Gasly","group":"Race Drivers","role":"Car 1","nation":"France","expiry":"2026","photo":"assets/images/19b7f4a4d4455d.jpg","overall":null,"seasons":{"2024":["Drivers' Championship: P3 · 287 points","2 Grand Prix wins"],"2025":["Drivers' Championship: P1 · 25 points (after Round 1)","1 Grand Prix win"]}},{"name":"Daniel Ricciardo","group":"Race Drivers","role":"Car 2","nation":"Australia","expiry":"2026","photo":"assets/images/d2f7de893e3918.jpg","overall":null,"seasons":{"2024":["Drivers' Championship: P5 · 223 points","3 Grand Prix wins · 6 pole positions"],"2025":["Drivers' Championship: P3 · 15 points (after Round 1)","1 Grand Prix podium"]}},{"name":"Abbi Pulling","group":"Driver Academy","role":"Affiliate driver","nation":"United Kingdom","expiry":"Contract through 2029","photo":"assets/images/21838d794821c8.jpg","overall":null,"seasons":{"2024":["4 Formula One FP1 appearances"],"2025":["Formula 3 · Rodin Motorsport","FP1 programme: 0 of 3 completed","Scheduled: Australia, Austria, Mexico"]}},{"name":"Jean-Philippe Moulin","group":"Driver Academy","role":"Affiliate driver","nation":"Belgium","expiry":"2025","photo":"assets/images/af8115b2c1bef8.jpg","overall":null,"seasons":{"2024":["3 Formula One FP1 appearances"],"2025":["Formula 2 · Campos Racing","Bahrain FP1: P1 · 1:35.648","FP1 programme: 1 of 3 completed","Remaining outings: Emilia Romagna, Netherlands"]}},{"name":"Nikola Tsolov","group":"Driver Academy","role":"Affiliate driver","nation":"Bulgaria","expiry":"2027","photo":"assets/images/nikola-tsolov-candy-motorsport-new.png","overall":null,"seasons":{"2024":["No FP1 appearances recorded"],"2025":["Formula 3 · ART Grand Prix","FP1 programme: 0 of 3 completed","Scheduled: Japan, Spain, Italy"]}},{"name":"Hamda Al Qubaisi","group":"Driver Academy","role":"Affiliate driver · 2025","nation":"United Arab Emirates","expiry":"Through 2028","photo":"assets/images/hamda-al-qubaisi-candy-motorsport.png","overall":null,"seasons":{"2025":["Joined Candy Motorsport's academy","FP1 programme: 0 of 3 completed","Scheduled: Canada, Britain, Abu Dhabi"]}},{"name":"Caroline Candy","group":"Leadership","role":"Team principal","nation":"United States","expiry":"Undisclosed","detail":"F1 division","photo":"assets/images/b75fe7691fe868.jpg"},{"name":"Victoria Candy","group":"Leadership","role":"Group chair & CEO","nation":"United States","expiry":"Undisclosed","detail":"Group leadership","photo":"assets/images/6d2de59f53b751.jpg"},{"name":"Pierre Waché","group":"Technical & Sporting","role":"Technical chief","nation":"France","expiry":"2026","detail":"92 OVR · Technical department","photo":"assets/images/8f48115d634180.jpg"},{"name":"Peter Prodromou","group":"Technical & Sporting","role":"Head of aerodynamics","nation":"United Kingdom","expiry":"2026","detail":"87 OVR · Aerodynamics department","photo":"assets/images/242189e4c036b4.jpg"},{"name":"Ron Meadows","group":"Technical & Sporting","role":"Sporting director","nation":"United Kingdom","expiry":"2026","detail":"91 OVR · Sporting department","photo":"assets/images/047a06c369ebdd.jpg"},{"name":"Marcus Dudley","group":"Race Engineering","role":"Car 1 race engineer","nation":"United Kingdom","expiry":"2026","detail":"90 OVR · Pierre Gasly","photo":"assets/images/ec0d302557a240.jpg"},{"name":"Riccardo Adami","group":"Race Engineering","role":"Car 2 race engineer","nation":"Italy","expiry":"2025","detail":"91 OVR · Daniel Ricciardo","photo":"assets/images/9b111b59859f4c.jpg"}];let teamFilter='All';let teamQuery='';let portraits={};function teamPage(){return `<div class="hero"><div class="eyebrow">2025 · Current organisation</div><h1>Meet the Team</h1><p>Meet the people behind Candy Motorsport.</p></div><div class="tools"><input class="edit" aria-label="Find team member" placeholder="Find a name or role" oninput="teamQuery=this.value;drawTeam()"><select aria-label="Department" onchange="teamFilter=this.value;drawTeam()">${['All',...new Set(team.map(t=>t.group))].map(g=>`<option ${g===teamFilter?'selected':''}>${g}</option>`).join('')}</select></div><p class="muted">Driver profiles are organised by season. Open 2024 to view debut-season records; 2025 is shown first. FP1 appearances are marked completed or scheduled.</p><div id="teamcards"></div>`}
function driverSeasons(t){if(!t.seasons)return `<p class="person-detail">${esc(t.detail||'')}</p>`;return `<div class="driver-seasons">${Object.keys(t.seasons).sort((a,b)=>Number(b)-Number(a)).map(y=>`<details class="driver-season" ${y==='2025'?'open':''}><summary>${y} Season</summary><ul>${t.seasons[y].map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`).join('')}</div>`}
function drawTeam(){let el=$('teamcards');if(!el)return;el.innerHTML=[...new Set(team.map(t=>t.group))].filter(g=>teamFilter==='All'||teamFilter===g).map(g=>{let list=team.map((t,i)=>({...t,i})).filter(t=>t.group===g&&(t.name+' '+t.role).toLowerCase().includes(teamQuery.toLowerCase()));return list.length?`<h2 class="teamheading">${g}</h2><div class="teamgrid ${g==='Race Drivers'?'featured':''}">${list.map(t=>`<article class="person"><div class="portrait">${portraits[t.i]||t.photo?`<img src="${portraits[t.i]||t.photo}" alt="Portrait of ${esc(t.name)}">`:`<span>${t.name.split(' ').map(n=>n[0]).join('')}</span><small>Portrait pending</small>`}</div><div class="personbody"><div class="eyebrow">${esc(t.role)}</div><h2>${esc(t.name)}</h2><p class="person-meta">${esc(t.nation)}${t.overall?' · '+esc(t.overall)+' OVR':''}</p><p class="person-contract"><b>Contract:</b> ${esc(t.expiry)}</p>${driverSeasons(t)}</div></article>`).join('')}</div>`:''}).join('')||'<p>No matching personnel.</p>'}
function setPortrait(i,el){let f=el.files[0];if(!f)return;let reader=new FileReader();reader.onload=()=>{let im=new Image();im.onload=()=>{let c=document.createElement('canvas');let scale=Math.min(1,480/im.width,600/im.height);c.width=im.width*scale;c.height=im.height*scale;c.getContext('2d').drawImage(im,0,0,c.width,c.height);portraits[i]=c.toDataURL('image/jpeg',.85);try{localStorage.setItem('candyPortraits',JSON.stringify(portraits))}catch{alert('Portrait storage unavailable; changes remain for this session only.')}drawTeam()};im.src=reader.result};reader.readAsDataURL(f)};
function go(id){location.hash=id;render()}function render(){let id=location.hash.slice(1)||'home';if(id==='races'){location.replace('#seasons');return;}if(id==='races'){location.replace('#seasons');return;}$('nav').innerHTML=groups.map(([n,k])=>`<button class="${id===k?'active':''}" onclick="go('${k}')">${n}</button>`).join('')+'<small>WEB EDITION 1.2<br>Source archive v4.5<br>Fictional F1 Manager career</small>';let out='';if(id==='home'){out=`<div class="hero"><div class="eyebrow">The Pink Empire · Est. Joliet, Illinois 1985</div><h1>HERITAGE<br>ARCHIVE</h1><p>Our history. Our people. Our journey.</p><small>Sweet on the outside. Ruthless on the inside.</small></div><div class="stats">${stat('2025 Constructors · P1','40 pts')}${stat('F1 victories · all-time','6')}${stat('F1 podiums · all-time','18')}${stat('F1 poles','6')}</div><div class="cols">${panel("Latest weekend update","<h3>Bahrain 2025: Gasly wins, Ricciardo P3</h3><p>In partly cloudy skies on 1 March 2025, Pierre Gasly won from P4 (+25 points), with Daniel Ricciardo P3 from P5 (+15 points). Candy Motorsport begins its second season with a double podium and 40 Constructors\u0027 points.</p><p>Jean-Philippe Moulin led FP1 (1:35.648) during his first planned 2025 academy outing.</p><p class=\u0027muted\u0027>Race-target payout and fastest-lap information not reported.</p><button class=\u0027action\u0027 onclick=\u0027go(&quot;s37&quot;)\u0027>Read Bahrain report</button>")}${panel("2025 Championship watch","<p><strong>Candy Motorsport</strong> · 40 pts</p><div class=\u0027bar\u0027><span style=\u0027width:100%\u0027></span></div><p><strong>Red Bull</strong> · 22 pts</p><div class=\u0027bar\u0027><span style=\u0027width:55%\u0027></span></div><p><strong>Ferrari</strong> · 22 pts</p><div class=\u0027bar\u0027><span style=\u0027width:55%\u0027></span></div><p><b>18 points</b> clear after Bahrain. Red Bull ranks above Ferrari on best race finish.</p><hr><p>Gasly · P1 · 25 pts<br>Ricciardo · P3 · 15 pts</p><p class=\u0027muted\u0027>Round 1 of 2025. The final 2024 records remain in the 2024 Season archive.</p>")}</div><div class="stats">${stat('Pre-F1 titles','18')}${stat('Pre-F1 wins','247')}${stat('Latest podium GP','Bahrain')}${stat('2025 status','Round 1 complete')}</div>${panel('Meet the Team','<button class="action" onclick="go(&quot;team&quot;)">Explore current personnel</button>')}${panel('Explore the archive',links([1,2,4,6,7,9,archive.length-1]))}`}

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

else if(id==='seasons'){let season=archive.find(s=>s.title.startsWith('05'));let records=archive.find(s=>s.title.startsWith('06'));let affiliates=archive.find(s=>s.title.startsWith('07'));let gpIds=[8,10,11,12,13,14,15,19,20,21,23,24,26,27,28,29,30,31,32,33];out=`<div class="hero"><div class="eyebrow">Season archive · 2024 inaugural Formula One campaign</div><h1>F1 Seasons</h1><p>Every campaign, every milestone. The Pink Empire's Formula One story.</p>
<div class="season-tabs">
  <button class="season-tab active" onclick="go('seasons')">
    2024 Season
  </button>
  <button class="season-tab" onclick="go('season2025')">
    2025 Season
</button>
</div></div><div class="stats">${stat('Races Logged','24')}${stat('Victories','5')}${stat('Podiums','16')}${stat('Pole positions','6')}</div>${panel("2024 · Inaugural season","<p>Candy Motorsport's first Formula One season delivered a remarkable breakthrough. Across 24 Grands Prix, the team claimed <b>five victories, six pole positions and 16 individual podiums</b>, establishing itself as a front-running contender in its debut campaign. Milestones included its first Grand Prix win in Miami and a landmark one-two finish in Monaco.</p><p>The Pink Empire ended 2024 <b>third in the Constructors' Championship with 510 points</b>, behind Ferrari (604) and Red Bull (614). Pierre Gasly secured <b>P3 in the Drivers' Championship with 287 points</b>, while Daniel Ricciardo finished <b>P5 with 223 points</b>. Their combined performances gave Candy Motorsport a strong foundation for its second season.</p><p>At the front of the field, <b>Max Verstappen retained the World Drivers' Championship</b> and <b>Red Bull retained the World Constructors' Championship</b>. Candy Motorsport closed its inaugural year with another double points finish in Abu Dhabi, completing a season defined by victories, podiums, academy opportunities and resilience.</p><p class='muted'>Final 2024 career results after 24 Grands Prix. This is a fictional F1 Manager career archive, not real-world Formula One results.</p><button class='action' onclick=\"go('s5')\">Open full 2024 season chapter</button>")}${dropdown('Race-by-Race Results',tbl(season.blocks.find(b=>b.type==='table').rows))}${dropdown('2024 Grand Prix Reports',   gpIds.map(i => {     const report = archive[i];     return `<details class="race-report">       <summary>${[   'Round 5 - Chinese Grand Prix | 21st April 2024',   'Round 6 - Miami Grand Prix | 5th May 2024',   'Round 7 - Emilia-Romagna Grand Prix | 19th May 2024',   'Round 8 - Monaco Grand Prix | 26th May 2024',   'Round 9 - Canadian Grand Prix | 9th June 2024',   'Round 10 - Spanish Grand Prix | 23rd June 2024',   'Round 11 - Austrian Grand Prix | 30th June 2024', 'Round 12 - British Grand Prix | 7th July 2024', 'Round 13 - Hungarian Grand Prix | 20th July 2024', 'Round 14 - Belgian Grand Prix | 28th July 2024', 'Round 15 - Dutch Grand Prix | 23rd August 2024', 'Round 16 - Italian Grand Prix | 1st September 2024', 'Round 17 - Azerbaijan Grand Prix | 15th September 2024', 'Round 18 - Singapore Grand Prix | 22nd September 2024', 'Round 19 - United States Grand Prix | 20th October 2024', 'Round 20 - Mexican Grand Prix | 27th October 2024', 'Round 21 - São Paulo Grand Prix | 3rd November 2024', 'Round 22 - Las Vegas Grand Prix | 23rd November 2024', 'Round 23 - Qatar Grand Prix | 1st December 2024', 'Round 24 - Abu Dhabi Grand Prix | 8th December 2024' ][gpIds.indexOf(i)]}</summary>       <div class="race-report-content">         ${blocks(report.blocks)}       </div>     </details>`;   }).join('') )}${dropdown("2024 Drivers' Championship Standings","<table><thead><tr><th>Pos</th><th>Driver</th><th>Constructor</th><th>Points</th></tr></thead><tbody><tr><td>1</td><td>Max Verstappen <span class='champion-trophy' title='2024 World Drivers&#39; Champion' aria-label='2024 World Drivers&#39; Champion'>🏆</span></td><td>Red Bull</td><td>442</td></tr><tr><td>2</td><td>Carlos Sainz</td><td>Ferrari</td><td>327</td></tr><tr><td>3</td><td>Pierre Gasly</td><td>Candy Motorsport</td><td>287</td></tr><tr><td>4</td><td>Charles Leclerc</td><td>Ferrari</td><td>277</td></tr><tr><td>5</td><td>Daniel Ricciardo</td><td>Candy Motorsport</td><td>223</td></tr><tr><td>6</td><td>Lando Norris</td><td>McLaren</td><td>189</td></tr><tr><td>7</td><td>Sergio Pérez</td><td>Red Bull</td><td>172</td></tr><tr><td>8</td><td>Oscar Piastri</td><td>McLaren</td><td>136</td></tr><tr><td>9</td><td>Lewis Hamilton</td><td>Mercedes</td><td>128</td></tr><tr><td>10</td><td>Yuki Tsunoda</td><td>RB</td><td>94</td></tr><tr><td>11</td><td>George Russell</td><td>Mercedes</td><td>48</td></tr><tr><td>12</td><td>Fernando Alonso</td><td>Aston Martin</td><td>43</td></tr><tr><td>13</td><td>Lance Stroll</td><td>Aston Martin</td><td>36</td></tr><tr><td>14</td><td>Ayumu Iwasa</td><td>RB</td><td>10</td></tr><tr><td>15</td><td>Alexander Albon</td><td>Williams</td><td>7</td></tr><tr><td>16</td><td>Valtteri Bottas</td><td>Kick Sauber</td><td>2</td></tr><tr><td>17</td><td>Esteban Ocon</td><td>Alpine</td><td>2</td></tr><tr><td>18</td><td>Nico Hülkenberg</td><td>Haas</td><td>0</td></tr><tr><td>19</td><td>Kevin Magnussen</td><td>Haas</td><td>0</td></tr><tr><td>20</td><td>Zhou Guanyu</td><td>Kick Sauber</td><td>0</td></tr><tr><td>21</td><td>Logan Sargeant</td><td>Williams</td><td>0</td></tr><tr><td>22</td><td>Victor Martins</td><td>Alpine</td><td>0</td></tr></tbody></table><p class='muted'>Final standings after the Abu Dhabi Grand Prix, 8 December 2024. Max Verstappen is officially the 2024 World Drivers' Champion. Reported Grand Prix points only; no unreported fastest-lap points added.</p>")}${dropdown("2024 Constructors' Championship Standings","<table><thead><tr><th>Pos</th><th>Constructor</th><th>Points</th></tr></thead><tbody><tr><td>1</td><td>Red Bull <span class='champion-trophy' title='2024 World Constructors&#39; Champion' aria-label='2024 World Constructors&#39; Champion'>🏆</span></td><td>614</td></tr><tr><td>2</td><td>Ferrari</td><td>604</td></tr><tr><td>3</td><td>Candy Motorsport</td><td>510</td></tr><tr><td>4</td><td>McLaren</td><td>325</td></tr><tr><td>5</td><td>Mercedes</td><td>176</td></tr><tr><td>6</td><td>RB</td><td>104</td></tr><tr><td>7</td><td>Aston Martin</td><td>80</td></tr><tr><td>8</td><td>Williams</td><td>7</td></tr><tr><td>9</td><td>Kick Sauber</td><td>2</td></tr><tr><td>10</td><td>Alpine</td><td>2</td></tr><tr><td>11</td><td>Haas</td><td>0</td></tr></tbody></table><p class='muted'>Final standings after the Abu Dhabi Grand Prix, 8 December 2024. Candy Motorsport finished P3 on 510 points, 94 behind Ferrari. Red Bull are the 2024 Constructors' Champions.</p>")}${dropdown('2024 Championship Records & Statistics',blocks(records.blocks))}${dropdown('Affiliate Driver Outings',blocks(affiliates.blocks))}${dropdown('2024 Liveries','<h3>Standard 2024 Livery | CM-01</h3>' + blocks(archive[9].blocks.slice(0,1)) + '<div class="season-livery-photo">'+standardLiveryPhoto+'</div>' + blocks(archive[9].blocks.slice(1,8)) + `
  <h3>Austin Grand Prix | American Sugar</h3>
  <p>Pink, blue and white angular stripes honour American racing heritage and the team's Illinois roots.</p>
  <div class="season-livery-photo">${austinAmericanSugarPhoto}</div>
  <p class="muted">Photorealistic design visual, not an actual race photograph. Austin debut pending.</p>

  <h3>Las Vegas Grand Prix | Sugar Jackpot</h3>
  <p>The special livery features vivid red, electric pink, gold-yellow, green and black geometric graphics inspired by the spectacle of the Las Vegas Strip.</p>
  <div class="season-livery-photo">${lasVegasSugarJackpotPhoto}</div>
  <p class="muted">Photorealistic night-race concept render, not an actual race photograph. Race debut pending.</p>
`)}${dropdown('2024 Driver & Team Announcements',
  [16,17,18,22,25,34].map(i => `
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
  <div class="stats">${stat('Races Logged','1')}${stat('Victories','1')}${stat('Podiums','2')}${stat('Pole positions','0')}</div>
  ${panel('2025 · Second Formula One season',`
    <p>Candy Motorsport started its second Formula One season with <b>a victory and a double podium in Bahrain</b>. Pierre Gasly won from fourth on the grid for 25 points, while Daniel Ricciardo finished third from fifth for another 15. The team leads the Constructors' Championship with <b>40 points</b> after Round 1.</p>
    <p><b>Gasly leads the Drivers' Championship on 25 points</b>, with Ricciardo third on 15. The Constructors' lead over Red Bull and Ferrari is 18 points. Jean-Philippe Moulin topped Bahrain FP1 (1:35.648) on his first of three planned academy appearances.</p>
    <p>The C40 continues Candy Motorsport's Ferrari powertrain partnership. The fictional public-facing partner lineup features Visa, Dell Technologies, Logitech, Puma, Bose and Wise.</p>
    <p class="muted">Provisional 2025 F1 Manager career results after Bahrain (Round 1 of 24), 1 March 2025. This is a fictional career archive; remaining races await results.</p>
    <button class="action" onclick="go('s37')">Open Bahrain Grand Prix report</button>
  `)}
  ${dropdown('2025 Driver & Team Lineup', `<p>Complete 2025 career-season grid: 11 constructors and 22 race drivers, confirmed by Candy Motorsport management.</p>${blocks(archive[67].blocks.slice(2,3))}<p class="muted">Career-save roster; championship standings are recorded separately as race results become available.</p>`)}
  ${dropdown('Race-by-Race Results', `<div class="tablewrap"><table><thead><tr><th>Round</th><th>Grand Prix</th><th>Gasly</th><th>Ricciardo</th><th>Team points</th><th>Total</th></tr></thead><tbody><tr><td>1</td><td>Bahrain</td><td>P1 · 25</td><td>P3 · 15</td><td>40</td><td>40</td></tr></tbody></table></div><p class="muted">Rounds 2–24 awaiting results.</p>`)}
  ${dropdown('2025 Grand Prix Reports', archive.filter(chapter => /^\d+\s+Round \d+ - .* Grand Prix \| .* 2025$/.test(chapter.title)).map(chapter => `<details class="race-report"><summary>${esc(chapter.title.replace(/^\d+\s+/, ''))}</summary><div class="race-report-content">${blocks(chapter.blocks)}</div></details>`).join(''))}
 ${dropdown("2025 Drivers\u0027 Championship Standings", blocks([archive[37].blocks.find(x=>x.type==="table"&&x.rows[0][0]==="Pos"&&x.rows[0][1]==="Driver")]))}
${dropdown("2025 Constructors\u0027 Championship Standings", blocks([archive[37].blocks.find(x=>x.type==="table"&&x.rows[0][0]==="Pos"&&x.rows[0][1]==="Constructor")]))}
  ${dropdown('2025 Championship Records & Statistics',`
    <h3>2025 Season Snapshot · After Bahrain</h3>
    ${tbl([['Metric','2025 after Round 1'],['Grands Prix completed','1 of 24'],['Grand Prix victories','1 · Pierre Gasly at Bahrain'],['Individual podiums','2 · Gasly P1 and Ricciardo P3'],['Pole positions','0'],['Constructors points','40 · P1 (provisional)'],['Pierre Gasly','25 points · P1 (provisional)'],['Daniel Ricciardo','15 points · P3 (provisional)'],['Academy FP1 appearances','1 of 12 completed · Moulin P1 at Bahrain']])}
    <p class="muted">Confirmed 2025 results through Round 1 only. Remaining 23 Grands Prix and 11 planned academy FP1 outings are pending.</p>
  `)}
  ${dropdown('Affiliate Driver Outings', `<p><b>Approved 2025 FP1 plan:</b> 12 scheduled outings, three per academy driver and six substitutions per car. Bahrain FP1 completed: Jean-Philippe Moulin P1 (1:35.648, cloudy). One of twelve scheduled outings completed.</p>${blocks(archive[69].blocks.slice(2))}`)}  ${dropdown('2025 Liveries', `
  <h3>Standard 2025 Livery | C40</h3>
  <p>Hot pink and white bodywork, bold yellow wings and C40 anniversary branding define Candy Motorsport's standard 2025 design.</p>
  <div class="season-livery-photo">
    <figure class="cm01-photo">
      <a href="assets/images/c40-standard-livery-2025.png" target="_blank" rel="noopener noreferrer" title="View full-size C40 standard livery artwork">
        <img src="assets/images/c40-standard-livery-2025.png" alt="Candy Motorsport C40 standard 2025 livery at the Illinois home testing circuit, photorealistic concept artwork" loading="lazy" onerror="this.closest('a').style.display='none';this.closest('figure').querySelector('.livery-upload-pending').style.display='block'">
      </a>
      <p class="muted livery-upload-pending" style="display:none">Image asset awaiting upload to the website repository.</p>
      <figcaption>C40 · Standard 2025 livery · Illinois home testing circuit · photorealistic concept render</figcaption>
    </figure>
  </div>
  <h3>2025 · Special Edition Collection</h3>
  <p>Four race-weekend special-edition livery documents. Designs and artwork will be added as they are confirmed.</p>
  ${[62,63,64,65].map(i => `
    <h3>${esc(archive[i].title.replace(/^\\d+\\s+2025 Special Edition Livery \\| /,''))}</h3>
    ${blocks(archive[i].blocks.slice(1))}
  `).join('')}
`)}
${dropdown('2025 Driver & Team News', `<article class="panel"><h3>Ron Meadows · Sporting Director Renewal Through 2026</h3>${blocks(archive[70].blocks)}</article><article class="panel"><h3>2025 Affiliate FP1 Schedule · Approved</h3>${blocks(archive[69].blocks.slice(0,2))}${blocks(archive[69].blocks.slice(3))}</article><article class="panel"><h3>2025 Affiliate Driver Academy · F2 and F3 Placements</h3>${blocks(archive[68].blocks)}</article><article class="panel"><h3>2025 Driver & Team Lineup · Full Grid Confirmed</h3>${blocks(archive[67].blocks)}</article><article class="panel"><h3>Visa · 2025 Partnership Announcement</h3>${blocks(archive[66].blocks)}</article><article class="panel"><h3>Hamda Al Qubaisi · Driver Academy</h3>${blocks(archive[35].blocks)}</article><article class="panel"><h3>Ferrari · Powertrain Partnership</h3>${blocks(archive[36].blocks)}</article>`)}`;
}

else if(id==='champ'){
  const honours=archive[3].blocks, record=archive[6].blocks;
  const trophySection=(title,body)=>`<section class="panel trophy-section"><h2>${title}</h2>${body}</section>`;
  const victoryTable=record.find(b=>b.type==='table'&&b.rows[0][0]==='Win no.');
  const podiumTable=record.find(b=>b.type==='table'&&b.rows[0][0]==='No.');
  const seasonTable=record.find(b=>b.type==='table'&&b.rows[0][0]==='Season');
  const poleRows=[["Grand Prix","Date","Driver","Pole lap","Conditions"],["Miami","4 May 2024","Daniel Ricciardo","1:38.085","Moderate rain"],["Emilia-Romagna","18 May 2024","Daniel Ricciardo","1:20.385","Heavy rain"],["Monaco","25 May 2024","Daniel Ricciardo","1:09.327","Partly cloudy"],["Canada","8 Jun 2024","Daniel Ricciardo","1:09.969","Not recorded"],["Great Britain","6 Jul 2024","Daniel Ricciardo","1:26.049","Cloudy"],["Netherlands","24 Aug 2024","Daniel Ricciardo","1:09.153","Partly cloudy"]];
  out=`
    <div class="hero trophy-hero"><div class="eyebrow">Candy Motorsport · Est. 1985</div><h1>THE TROPHY CABINET</h1><p>Four decades of racing heritage, with Formula One records updated through Bahrain 2025.</p></div>
    <div class="stats trophy-stats">
      ${stat('Historic Championships','18')}
      ${stat('Pre-F1 Race Wins','247')}
      ${stat('Formula One Victories','6')}
      ${stat('F1 Individual Podiums','18')}
      ${stat('Formula One Poles','6')}
    </div>
    ${trophySection('🏆 Champions\u0027 Gallery',`<p>18 confirmed titles from the pre-F1 era, 1988–2023. These are historic championships, not Formula One world titles.</p>${dropdown('Explore All 18 Championship Titles',blocks(honours.slice(0,1))) }`)}
    ${trophySection('🥇 Heritage Race Victories',`<p>247 pre-F1 race wins and landmark victories including Daytona and the 24 Hours of Le Mans LMP2 class.</p>${blocks(honours.slice(1,4))}`)}
    ${trophySection('🏎️ Formula One | Season Breakdown',`<p>2024 is complete; 2025 figures reflect only Bahrain Round 1. Podiums count individual driver finishes, so a double podium adds two.</p>${blocks([seasonTable])}<p class="muted">Career totals: 6 wins, 6 poles, 18 individual podiums and 550 reported Grand Prix points across 25 race weekends. No Formula One world championship titles recorded.</p>`)}
    ${trophySection('🏁 Grand Prix Victories',`<p>Five wins in 2024, followed by Pierre Gasly's Bahrain victory on 1 March 2025.</p>${dropdown('All Six Formula One Victories',blocks([victoryTable]))}`)}
    ${trophySection('🥉 Podiums & Trophies',`<p>16 individual podiums in 2024, plus Gasly P1 and Ricciardo P3 at Bahrain in 2025.</p>${dropdown('All 18 Individual Formula One Podiums',blocks([podiumTable]))}`)}
    ${trophySection('⏱️ Pole Positions',`<p>Six poles, all achieved by Daniel Ricciardo in 2024. None recorded yet in 2025.</p>${dropdown('2024 Pole Position Register',tbl(poleRows))}`)}
    ${trophySection('📊 Championship Record',`<p><b>2024:</b> Candy Motorsport finished P3 in the Constructors' Championship (510 points); Pierre Gasly P3 in the Drivers' Championship (287 points), Daniel Ricciardo P5 (223 points).</p><p><b>2025 after Bahrain:</b> Candy Motorsport leads the Constructors' Championship on 40 points, 18 clear of Red Bull and Ferrari. Gasly leads the Drivers' standings with 25 points; Ricciardo is P3 with 15.</p><p class="muted">No F1 Drivers' or Constructors' World Championship titles won to date. The 2025 standings are provisional after one round.</p>`)}
    ${trophySection('⭐ Legendary Milestones',`<p>From the founding of Candy Motorsport to its first Grand Prix win and the first race of the 2025 campaign.</p>${dropdown('Explore Historical Milestones',blocks(record.filter(b=>b.type==='heading'&&b.text==='Milestone register').length?record.slice(record.findIndex(b=>b.type==='heading'&&b.text==='Milestone register'),record.findIndex(b=>b.type==='heading'&&b.text==='Revision ledger')):[]))}`)}
  `;
}
else if(id==='ledger'){out=`<div class="hero"><div class="eyebrow">Heritage Archive · Change history</div><h1>REVISION LEDGER</h1><p>A chronological record of archive updates and the protocol for maintaining our history.</p></div>${panel('Revision history',blocks(revisionLedgerBlocks))}<div class="tools"><button class="action" onclick="go('champ')">Back to championships & trophies</button></div>`}
else if(id==='team'){out=teamPage()}
else if(id==='gallery'){
  const photos=[{src:'assets/images/cm01-standard-2024.png',chapter:'CM-01 · Standard 2024 Livery',chapterId:9},{src:'assets/images/las-vegas-sugar-jackpot-2024.png',chapter:'Sugar Jackpot · Las Vegas 2024 concept render',chapterId:9},...sections().flatMap((section,i)=>
    section.blocks
      .filter(b=>b.type==='image')
      .map(b=>({
        src:b.src,
        chapter:b.src==='assets/images/austin-american-sugar-2024.png' ? 'American Sugar · 2024 Austin concept render' : section.title,
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
    <div class="livery-page">
    <div class="hero livery-hero">
      <div class="eyebrow">Candy Motorsport · Racing identity</div>
      <h1>The Liveries Collection</h1>
      <p>From our signature electric pink to special
      editions celebrating the cities and circuits
      of Formula One.</p>
    </div>

    <div class="livery-highlights">
      <div><small>2025 identity</small><strong>C40</strong><span>Pink · White · Yellow</span></div>
      <div><small>2024 chassis</small><strong>CM-01</strong><span>Pink · White</span></div>
      <div><small>2024 special editions</small><strong>4 designs</strong><span>Miami · Britain · Austin · Las Vegas</span></div>
    </div>

    <section class="livery-section">
      <div class="livery-heading"><div><small>2025 · CURRENT DESIGN</small><h2>C40 · Standard 2025 Livery</h2></div><span class="livery-pill">Current</span></div>
      <p>The C40 identity combines signature pink and white bodywork with yellow wings and the new anniversary branding.</p>
      <figure class="livery-feature">
        <a href="assets/images/c40-standard-livery-2025.png" target="_blank" rel="noopener noreferrer"><img src="assets/images/c40-standard-livery-2025.png" alt="Candy Motorsport C40 2025 standard livery at Illinois test circuit, photorealistic concept" loading="lazy" onerror="this.closest('a').style.display='none';this.closest('figure').querySelector('.livery-pending').style.display='block'"></a>
        <p class="livery-pending" style="display:none">Image awaiting upload to website repository.</p>
        <figcaption>2025 standard design · Illinois home testing circuit · concept render</figcaption>
      </figure>
    </section>
    <section class="livery-section">
      <div class="livery-heading"><div><small>2024 · HERITAGE</small><h2>CM-01 · Standard 2024 Livery</h2></div><span class="livery-pill muted-pill">Archive</span></div>
      ${standardLiveryPhoto}
      <p>White bodywork, sweeping electric-pink graphics and exposed black aerodynamics established the team's inaugural Formula One identity.</p>
    </section>

    ${panel('2024 · Special Edition Collection',`
      <p>Four distinctive designs, each celebrating
      a particular race weekend while preserving
      the Pink Empire's signature personality.</p>

      ${dropdown('Miami Grand Prix | Sugar Vice',
        blocks(liveries.slice(1,5)))}

      ${dropdown('British Grand Prix | Sherbert Lemon',
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
        ${austinAmericanSugarPhoto}
        <p class="muted">Photorealistic design concept; actual race-weekend photography and debut confirmation are still pending.</p>
      `)}

      ${dropdown('Las Vegas Grand Prix · Sugar Jackpot',`
        <h3>Las Vegas after dark</h3>
        <p>Vivid red, electric pink, gold-yellow, green and black geometric patterns evoke the lights and spectacle of the Las Vegas Strip.</p>
        <p><b>Status:</b> Designed in-game. Grand Prix debut pending.</p>
        ${lasVegasSugarJackpotPhoto}
        <p class="muted">Photorealistic design concept depicting the car under Las Vegas night-race lights; not an actual race photograph.</p>
      `)}
    `)}

    ${panel('2025 · Special Edition Collection',`
      <p>Four named special-edition livery documents for Candy Motorsport's 2025 season. Design details and artwork will be added when confirmed.</p>
      ${dropdown('Japanese Grand Prix | Sakura Sugar', blocks(archive[62].blocks))}
      ${dropdown('Miami Grand Prix | Sugar Clouds', blocks(archive[63].blocks))}
      ${dropdown('Belgium Grand Prix | Praline Royale', blocks(archive[64].blocks))}
      ${dropdown('United States Grand Prix | Sugar Rocket', blocks(archive[65].blocks))}
    `)}
      </div>
  `;
}
;if(id==='races')out+=panel('2024 season results',tbl(archive.find(s=>s.title.startsWith('05')).blocks.find(b=>b.type==='table').rows));if(id==='timeline')out+=blocks(archive.find(s=>s.title.startsWith('06')).blocks)}$('main').innerHTML=out+'<footer>Candy Motorsport · fictional career archive · Source: Heritage Archive Edition 9.7 · Not affiliated with Formula One.</footer>';if(id==='team'){teamQuery='';drawTeam()}}
function add(){let t=$('nt').value.trim(),b=$('nb').value.trim();if(!t||!b)return $('msg').textContent='Enter a title and details.';extra.push({title:t,blocks:[{type:'text',text:b}]});save();render();$('msg').textContent='Entry added.'}function save(){try{localStorage.setItem('candyArchiveNotes',JSON.stringify(extra))}catch{alert('Browser storage unavailable. Export entries before closing.')}}function exportNotes(){let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(extra,null,2)],{type:'application/json'}));a.download='candy-archive-updates.json';a.click()}async function importNotes(el){try{let x=JSON.parse(await el.files[0].text());if(!Array.isArray(x)||!x.every(s=>typeof s.title==='string'&&Array.isArray(s.blocks)&&s.blocks.every(b=>b.type==='text'&&typeof b.text==='string')))throw Error();extra=x;save();render()}catch{alert('Invalid archive update file')}}$('search').addEventListener('input',e=>{let q=e.target.value.trim().toLowerCase();if(!q)return render();let ids=sections().map((s,i)=>[s,i]).filter(([s])=>(s.title+' '+s.blocks.map(b=>b.text||b.rows?.flat().join(' ')||'').join(' ')).toLowerCase().includes(q)).map(x=>x[1]);$('main').innerHTML='<h1>Search results</h1><p>'+ids.length+' matching chapters</p>'+panel('Results',links(ids)||'No matching records.')});window.addEventListener('hashchange',()=>{$('search').value='';render()});render();
