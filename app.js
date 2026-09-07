const trips=[
  ['日本','⛩','雄獅旅遊','東京輕井澤・富士山慢遊五日','5 天・10–12 月',32900,9.3],
  ['歐洲','🏰','可樂旅遊','德奧捷童話小鎮・十日','10 天・11–1 月',76800,9.1],
  ['東南亞','🌿','東南旅遊','峴港會安・五星海濱度假五日','5 天・全年出發',21800,9.5],
  ['海島','🐠','易遊網','沖繩親子樂園・海洋假期四日','4 天・9–3 月',26900,9.0],
  ['日本','🍁','鳳凰旅遊','京都奈良・秋楓鐵道六日','6 天・11–12 月',39800,9.4],
  ['海島','🌊','五福旅遊','宿霧跳島・鯨鯊體驗五日','5 天・全年出發',24800,8.9]
];
const messages={budget:'峴港會安・五星海濱度假五日｜NT$ 21,800 起，CP 9.5 的預算首選。',comfort:'東京輕井澤・富士山慢遊五日｜步調舒適、移動距離適中。',family:'沖繩親子樂園・海洋假期四日｜樂園與海洋館一次滿足。',scenery:'京都奈良・秋楓鐵道六日｜把楓葉與古寺都收進鏡頭。'};
const grid=document.querySelector('#tripGrid');
function render(area='all'){grid.innerHTML=trips.filter(t=>area==='all'||t[0]===area).map(t=>`<article class="card"><div class="visual ${t[0]}">${t[1]}<b>✦ CP ${t[6]}</b></div><div class="info"><span class="agency">${t[2]}</span><h3>${t[3]}</h3><span class="meta">${t[4]} ・ 含機票＋住宿</span><div class="price">NT$ ${t[5].toLocaleString()} 起</div></div></article>`).join('')}
document.querySelector('#filters').addEventListener('click',e=>{if(!e.target.dataset.area)return;document.querySelectorAll('#filters button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');render(e.target.dataset.area)});
document.querySelector('#needs').addEventListener('click',e=>{if(e.target.dataset.need)document.querySelector('#result').innerHTML=`<b>為你推薦</b><br>${messages[e.target.dataset.need]}`});
render();document.querySelector('#result').innerHTML=`<b>為你推薦</b><br>${messages.budget}`;
