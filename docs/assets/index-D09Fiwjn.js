(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const l={classic:{id:"classic",code:"V2",title:"Classic Circuit",tagline:"For V3 Support staff — can you work a Classic (V2) ticket?",audience:"V3 Support → Classic (V2)",accent:"classic",questions:[{id:"c1",category:"Product ID",ui:null,scenario:"A screenshot shows an older CoreBridge layout. The company field says nothing useful. A teammate labels the ticket “Legacy.”",question:"Which statement is correct?",choices:["Classic, Legacy, and Evo are three names for the same UI","Classic is V2; Legacy is the older V3 UI; Evo is the newer V3 UI","Legacy is V2; Classic and Evo are both V3","Evo is V2; Classic is the new V3 UI"],correct:1,explain:"Classic = V2. V3 has two UIs: Legacy (older) and Evo (newer). Mislabeling Classic as Legacy sends people down the wrong KB and test system.",tip:"When unsure, use the screenshot/URL first — not the queue name alone."},{id:"c2",category:"Routing",ui:null,scenario:"Ticket comes into v3 Support. Customer mentions “we’re still on Classic” and pastes a Classic-era URL.",question:"Best first move?",choices:["Answer with Evo Settings paths — Classic maps 1:1 to Evo","Confirm Classic (V2), use Classic-appropriate guidance, and don’t send them to evo.corebridge.net workflows","Tell them Classic is unsupported and close the ticket","Convert the ticket Type to Feature Request automatically"],correct:1,explain:"Classic is a different product generation than V3 Legacy/Evo. Match the product before teaching clicks, and avoid Evo-only navigation.",tip:"Ask for a URL or screenshot if “Classic” might mean “old looking Legacy.”"},{id:"c3",category:"Migration",ui:null,scenario:"Company custom field shows “Transitional Classic to Legacy.” Customer UI in the attachment looks like Legacy V3.",question:"How should you treat product family for troubleshooting?",choices:["Always treat transitional as Classic until go-live email arrives","Treat as Legacy V3 when the UI/evidence is Legacy (unless evidence clearly shows Classic or Evo)","Always treat transitional as Evo","Ignore the field and use whichever KB article ranks first"],correct:1,explain:"“Transitional Classic to Legacy” generally points to the Legacy V3 path unless attachment/customer text clearly shows Classic or Evo.",tip:"Evidence priority: screenshot/UI → customer text → company version field."},{id:"c4",category:"Expectations",ui:null,scenario:"Classic customer asks for an Evo-only capability (e.g. Quick Price / Evo Settings → Approval Process).",question:"Correct support posture?",choices:["Give them the Evo click-path and hope the menus appear","Explain the feature is Evo (V3 new UI), confirm they’re on Classic, and set expectations / migration options without inventing Classic steps","File it as a Classic defect because the button is missing","Tell them to toggle “Evo mode” under Classic Global Settings"],correct:1,explain:"Don’t force Evo workflows onto Classic. Name the product correctly, then either Classic workarounds or migration/Evo adoption framing.",tip:"CoreBridge encourages Evo adoption — mention benefit when it truly closes a Classic gap, without being pushy."},{id:"c5",category:"Language",ui:null,scenario:"Internal note: “V2 customer can’t change payment terms on the order.” Another agent replies with the Legacy clear/reselect customer steps.",question:"What’s the terminology issue?",choices:["Nothing — V2 and Legacy are interchangeable","V2 means Classic; Legacy steps are for Legacy V3 UI and may not apply to Classic","V2 always means Evo in Freshdesk","Payment terms never exist outside Evo"],correct:1,explain:"Saying “V2” means Classic. Pasting Legacy V3 procedures onto a Classic ticket is a common cross-training miss.",tip:"Say Classic / Legacy / Evo out loud in replies and notes — avoid ambiguous “V2/V3 UI” shorthand."},{id:"c6",category:"KB Hygiene",ui:null,scenario:"You’re about to send a KB link from “New CoreBridge EVO Interface” to a Classic shop.",question:"What should you do?",choices:["Send it — screenshots are close enough","Don’t cite Evo KB for Classic; find Classic-appropriate guidance or explain the mismatch","Send Evo KB plus Legacy KB and let them pick","Only send Confluence internal pages to customers"],correct:1,explain:"KB must match the product the customer is on. Evo articles can actively mis-train Classic users.",tip:"Same rule in reverse: don’t send Classic-only steps into an Evo ticket."},{id:"c7",category:"Test Systems",ui:null,scenario:"You’re reproducing a Classic customer issue in the lab and almost log into Evo “to compare.”",question:"Correct practice?",choices:["Compare freely across Classic / Legacy / Evo to find any working path","Stay on the matching product family; don’t hop UIs to “see if it works elsewhere”","Always reproduce Classic bugs in Evo because it’s newer","Only Classic issues can be reproduced; V3 issues cannot"],correct:1,explain:"Lock product family for the whole repro. Cross-UI comparison creates false conclusions and bad customer guidance.",tip:"If the product family is unclear, stop and clarify before clicking."},{id:"c8",category:"Ambiguity",ui:null,scenario:"Customer says: “We’re on the old CoreBridge.” No screenshot yet.",question:"Best clarifying question?",choices:["“Are you on Classic (V2), Legacy (older V3 UI), or Evo (newer V3 UI)?” — and ask for a URL/screenshot","“Old” always means Classic — proceed with Classic steps","“Old” always means Legacy — proceed with Management → Global Settings","Ask only whether they pay annually or monthly"],correct:0,explain:"Customers say “old” for both Classic and Legacy. Disambiguate with Classic vs Legacy vs Evo plus URL/screenshot.",tip:"One clarifying question beats three wrong articles."},{id:"c9",category:"Handoffs",ui:null,scenario:"V2 Support asks V3 Support to “just take this Classic payment issue” with no product confirmation in the thread.",question:"What should the receiving agent verify first?",choices:["That Freshdesk Type is set — product family doesn’t matter","That it truly is Classic (V2), not Legacy/Evo mislabeled as V2","That the customer has already upgraded to Evo","That Bugbot has reviewed the ticket"],correct:1,explain:"Queue names and “V2” slang get overloaded. Confirm Classic vs Legacy vs Evo before owning the technical answer.",tip:"Check company software version + attachment UI before rewriting the reply."},{id:"c10",category:"Customer Reply",ui:null,scenario:"You’re writing a customer-facing reply for a confirmed Classic shop that wants a V3/Evo-only reporting view.",question:"Best reply shape?",choices:["Pretend the feature exists in Classic and send Evo screenshots","Confirm they’re on Classic, explain the capability lives on V3/Evo, and outline practical next steps (workaround and/or talking to their CSM about V3/Evo)","Only say “please upgrade” with no product names","Close as Solved — Not Reproducible"],correct:1,explain:"Be accurate and helpful: name Classic vs V3/Evo, give any Classic-safe workaround, and offer a clean path forward without shame.",tip:"Tone: expert partner, not “your software is ancient.”"}]},v3:{id:"v3",code:"V3",title:"V3 Gauntlet",tagline:"For V2 Support staff — Legacy UI and Evo UI on V3",audience:"V2 Support → V3 (Legacy + Evo)",accent:"v3",questions:[{id:"v1",category:"Payment Terms",ui:"Legacy",scenario:"Legacy V3 customer: “I need Net 30 on this estimate, not Due on Receipt.” The estimate is already open.",question:"Correct Legacy approach?",choices:["Change Payment Terms directly on the estimate under Order Details","Update Payment Terms on the customer (Companies → Accounting Details), then clear and re-select the customer on the estimate","Void and recreate — terms only apply at creation","Terms can only change after invoicing"],correct:1,explain:"On Legacy V3, terms aren’t edited directly on the estimate/order. Update the customer, then clear/re-select so Accounting Details refresh.",tip:"Clarify “change terms” vs “collect payment.”"},{id:"v2",category:"Payment Terms",ui:"Evo",scenario:"Evo customer: “Change this order from Due on Receipt to Net 30.”",question:"Correct Evo approach?",choices:["Only the Legacy clear/reselect customer workaround works","Change Payment Terms directly on the order under Order Details","Terms lock after the first line item","Create a credit memo for the due-date difference"],correct:1,explain:"Evo allows Payment Terms changes on the Estimate/Order itself. The Legacy customer clear/reselect path is not required.",tip:"Same English request, different UI — always confirm Legacy vs Evo first."},{id:"v3q",category:"Sales Tax",ui:"Legacy",scenario:"Admin updated a tax rate in Legacy. Open estimates still show the old tax amount.",question:"Why, and how do you fix one estimate?",choices:["Tax updates are overnight only","Open estimates don’t auto-recalc; clear and re-select the same tax group (or customer) on each estimate","Run Management → Recalculate All Tax","Only invoices recalculate"],correct:1,explain:"Tax is calculated when applied. Updating a tax item/group doesn’t refresh already-open estimates. No bulk recalc — fix each one.",tip:"Set expectations: every open estimate needs a manual refresh."},{id:"v4",category:"New Order",ui:"Evo",scenario:"Agent bookmarks `/sales/orders/new`. Customers report incomplete orders.",question:"What’s wrong?",choices:["That deep link skips the customer wizard — use the grid New Order button (or company Estimates & Orders → +)","Browser cache — hard refresh always fixes it","New Order requires RFQ license","Only admins can create orders"],correct:0,explain:"Evo’s `/sales/orders/new` deep link isn’t the supported New Order path and skips the customer wizard.",tip:"Train the button, not the raw URL."},{id:"v5",category:"Proofs",ui:"Legacy",scenario:"Estimate converted to an order; proofs/approvals from the estimate didn’t carry over.",question:"Most likely cause?",choices:["Proofs never carry in Legacy","Copy Approvals is off under Estimate & Order options / cloning defaults","They used a guest link","Proofs attach only after the first invoice"],correct:1,explain:"Copy Approvals controls whether proofs carry on convert. Enabling it applies going forward — it won’t retrofix old orders.",tip:"Ask if this is new behavior or always happened."},{id:"v6",category:"Proofs",ui:"Evo",scenario:"Customer never saw a proof. Staff “built” it in Evo.",question:"Most likely miss?",choices:["Proofs require a hard-copy print first","A draft is invisible until posted; approvals are per line item (portal or anonymous link)","Proofs only exist on invoices","Copy Approvals (Legacy setting) is required in Evo"],correct:1,explain:"Building ≠ posting. Customers see posted proofs via Customer Portal or anonymous link.",tip:"Ask: posted? which line? portal or anonymous link?"},{id:"v7",category:"Navigation",ui:"Legacy",scenario:"V2 agent starts telling a Legacy shop to use the Evo Settings gear for email templates / estimate options.",question:"Where should you send them in Legacy?",choices:["Settings gear top-right (same as Evo)","Management module → Global Settings / related Management areas","Sales → Customers → System","Accounting → Preferences only"],correct:1,explain:"Legacy configuration lives under Management. Evo Settings paths don’t map 1:1.",tip:"If lost, ask which left-nav modules they see."},{id:"v8",category:"Settings Map",ui:"Evo",scenario:"Need Approval Process config for an Evo shop.",question:"Correct Evo path?",choices:["Management → Global Settings","Settings → Customer Portal → Approval Process","Accounting → Payment Terms → Approvals","Sales → Estimates → Global"],correct:1,explain:"Evo approval process lives under Settings → Customer Portal → Approval Process.",tip:"Prefer Evo Settings search over inventing Legacy-shaped paths."},{id:"v9",category:"Customers",ui:"Evo",scenario:"Shop asks why a company shows as Prospect instead of Client in Evo.",question:"What does that mean?",choices:["Prospect = inactive; Client = active","Lead = no estimate/order yet; Prospect = estimate created; Client = order created","Prospect means missing billing contact","Lifecycle only applies to personal accounts"],correct:1,explain:"Evo’s Lead → Prospect → Client progression is separate from Active/Inactive.",tip:"Don’t “activate” them when they actually need an order created."},{id:"v10",category:"Quick Price",ui:"Evo",scenario:"Front counter needs a fast price for a walk-in not in the system yet.",question:"Best Evo tool?",choices:["Create a fake Walk-In company every time","Use Quick Price — no customer required until Convert","Only formal estimates allow pricing without a customer","Use RFQ and award to the walk-in"],correct:1,explain:"Quick Price is for unknown/walk-in pricing. Customer is chosen on convert; need at least one line item.",tip:"Leaving Quick Price discards the draft — warn before navigating away."}]}},h="cb-cross-train-leaderboard-v2";function g(){return{classic:[],v3:[]}}function y(){try{const t=localStorage.getItem(h);if(!t){const a=localStorage.getItem("cb-cross-train-leaderboard-v1");if(a){const o=JSON.parse(a),r={classic:Array.isArray(o.legacy)?o.legacy:[],v3:Array.isArray(o.evo)?o.evo:[]};return localStorage.setItem(h,JSON.stringify(r)),r}return g()}const s=JSON.parse(t);return{classic:Array.isArray(s.classic)?s.classic:[],v3:Array.isArray(s.v3)?s.v3:[]}}catch{return g()}}function k(t){localStorage.setItem(h,JSON.stringify(t))}function C(t,s){const a=y(),o=a[t]||[],r={...s,name:String(s.name||"Agent").trim().slice(0,24)||"Agent",at:new Date().toISOString()};return o.push(r),o.sort((n,i)=>i.score!==n.score?i.score-n.score:i.correct!==n.correct?i.correct-n.correct:n.ms-i.ms),a[t]=o.slice(0,25),k(a),a[t]}const E=["A","B","C","D"],u=document.getElementById("app"),e={view:"hub",boardTab:"classic",gameId:null,player:"",index:0,answers:[],streak:0,streakBest:0,score:0,startedAt:0,locked:!1};function c(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function v(t){const s=Math.round(t/1e3),a=Math.floor(s/60),o=s%60;return a>0?`${a}m ${o}s`:`${o}s`}function L(t){return t===null?"Challenger":t===1?"Arena Champion":t<=3?"Podium Pro":t<=10?"Queue Crusher":"Trained Agent"}function $(t){return t?`<span class="${t.toLowerCase()==="legacy"?"ui-pill legacy":"ui-pill"}">${c(t)} UI</span>`:""}function d(){e.view==="hub"?f():e.view==="setup"?S():e.view==="quiz"?m():e.view==="results"&&O()}function p(t,{showHome:s=!0}={}){return`
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <span class="brand-kicker">CoreBridge Support</span>
          <h1>Cross-Training Arena</h1>
        </div>
        ${s?'<button class="ghost-btn" type="button" data-action="home">Home</button>':""}
      </header>
      ${t}
    </div>
    <div class="streak-banner" id="streakBanner" aria-live="polite"></div>
  `}function x(t){const s=y()[t]||[];return s.length?`<ol class="board-list">${s.map((a,o)=>`
      <li>
        <span class="rank">${o+1}</span>
        <div>
          <div class="who">${c(a.name)}</div>
          <div class="meta">${a.correct}/${a.total} correct · ${v(a.ms)} · best streak ${a.streakBest}</div>
        </div>
        <span class="pts">${a.score}</span>
      </li>`).join("")}</ol>`:'<p class="empty">No scores yet — be the first on the board.</p>'}function f(){u.innerHTML=p(`
    <section class="hero">
      <div class="hero-card">
        <h2>Train across the aisle. Keep it fun.</h2>
        <p>
          Two 10-question runs from real ticket themes.
          Classic is V2. V3 has two UIs — Legacy (older) and Evo (newer).
        </p>
      </div>
      <div class="game-grid">
        <article class="game-card classic">
          <span class="badge">V3 staff · learn Classic</span>
          <h3>${c(l.classic.title)}</h3>
          <p>${c(l.classic.tagline)}</p>
          <button class="primary-btn" type="button" data-action="start" data-game="classic">
            Start Classic Circuit →
          </button>
        </article>
        <article class="game-card v3">
          <span class="badge">V2 staff · learn V3</span>
          <h3>${c(l.v3.title)}</h3>
          <p>${c(l.v3.tagline)}</p>
          <button class="primary-btn" type="button" data-action="start" data-game="v3">
            Start V3 Gauntlet →
          </button>
        </article>
      </div>
    </section>
    <section class="panel">
      <h3>Leaderboard</h3>
      <div class="board-tabs">
        <button class="tab ${e.boardTab==="classic"?"active":""}" type="button" data-action="board-tab" data-tab="classic">Classic Circuit</button>
        <button class="tab ${e.boardTab==="v3"?"active":""}" type="button" data-action="board-tab" data-tab="v3">V3 Gauntlet</button>
      </div>
      <div id="boardMount">${x(e.boardTab)}</div>
    </section>
  `,{showHome:!1})}function S(){const t=l[e.gameId];u.innerHTML=p(`
    <section class="panel setup accent-${t.accent}">
      <span class="badge">${c(t.audience)}</span>
      <h2 style="font-family:var(--font-display);margin:0.6rem 0 0.35rem;letter-spacing:-0.02em;font-weight:700;">${c(t.title)}</h2>
      <p class="hint">10 ticket-style scenarios. Correct answers earn points; streaks multiply the fun. Wrong answers still teach — read the tip, then continue.</p>
      <label for="playerName">Callsign (your name)</label>
      <input id="playerName" maxlength="24" placeholder="e.g. Alex" value="${c(e.player)}" autocomplete="nickname" />
      <div class="actions-row" style="justify-content:flex-start">
        <button class="primary-btn" type="button" data-action="begin">Enter the arena →</button>
        <button class="ghost-btn" type="button" data-action="home">Back</button>
      </div>
    </section>
  `);const s=document.getElementById("playerName");s==null||s.focus(),s==null||s.addEventListener("keydown",a=>{a.key==="Enter"&&b()})}function b(){const t=document.getElementById("playerName");e.player=((t==null?void 0:t.value)||e.player||"Agent").trim().slice(0,24)||"Agent",e.index=0,e.answers=[],e.streak=0,e.streakBest=0,e.score=0,e.startedAt=Date.now(),e.locked=!1,e.view="quiz",d()}function V(t){const a=Math.min(t-1,4)*25;return 100+Math.max(0,a)}function A(t){const s=document.getElementById("streakBanner");s&&(s.textContent=t,s.classList.add("show"),setTimeout(()=>s.classList.remove("show"),900))}function m(){const t=l[e.gameId],s=t.questions[e.index],a=e.answers[e.index],o=Math.round(e.index/t.questions.length*100);u.innerHTML=p(`
    <div class="accent-${t.accent}">
      <div class="quiz-head">
        <div class="progress-wrap">
          <div class="progress-label">
            <span>${c(t.title)}</span>
            <span>Q ${e.index+1} / ${t.questions.length}</span>
          </div>
          <div class="progress-bar ${t.accent}"><span style="width:${o}%"></span></div>
        </div>
        <div class="hud">
          <div class="hud-chip">Score <strong>${e.score}</strong></div>
          <div class="hud-chip">Streak <strong>${e.streak}</strong></div>
        </div>
      </div>

      <div class="scenario">
        <p>${c(s.scenario)}</p>
        <span class="cat-pill">${c(s.category)}</span>
        ${$(s.ui)}
      </div>

      <div class="question-block panel">
        <h2>${c(s.question)}</h2>
        <div class="choices" id="choices">
          ${s.choices.map((r,n)=>{let i="choice";return a&&(n===s.correct?i+=" correct":n===a.picked&&!a.ok?i+=" wrong":i+=" dim"),`
                <button class="${i}" type="button" data-action="pick" data-i="${n}" ${a?"disabled":""}>
                  <span class="letter">${E[n]}</span>
                  <span>${c(r)}</span>
                </button>`}).join("")}
        </div>
        ${a?`
          <div class="feedback ${a.ok?"good":"bad"}">
            <h3>${a.ok?T(a.streak):"Not quite — here's the play"}</h3>
            <p>${c(s.explain)}</p>
            <p class="tip">Pro tip: ${c(s.tip)}</p>
            <div class="feedback-actions">
              <button class="primary-btn" type="button" data-action="next">
                ${e.index+1>=t.questions.length?"See results →":"Next scenario →"}
              </button>
            </div>
          </div>`:""}
      </div>
    </div>
  `)}function T(t){return t>=5?"On fire — 5+ streak!":t>=3?"Nice streak!":t===2?"Two in a row!":"Nailed it!"}function q(t){if(e.locked)return;const a=l[e.gameId].questions[e.index];if(e.answers[e.index])return;e.locked=!0;const o=t===a.correct;if(o){e.streak+=1,e.streakBest=Math.max(e.streakBest,e.streak);const r=V(e.streak);e.score+=r,e.streak>=2&&A(`${e.streak}× streak · +${r}`)}else e.streak=0;e.answers[e.index]={picked:t,ok:o,streak:e.streak},m(),e.locked=!1}function I(){const t=l[e.gameId];if(e.index+1>=t.questions.length){P();return}e.index+=1,m()}function P(){const t=l[e.gameId],s=e.answers.filter(i=>i.ok).length,a=Date.now()-e.startedAt,o={name:e.player,score:e.score,correct:s,total:t.questions.length,streakBest:e.streakBest,ms:a},r=C(e.gameId,o);e.lastEntry=o;const n=r.find(i=>i.name===o.name&&i.score===o.score&&i.ms===o.ms);e.lastRank=n?r.indexOf(n)+1:null,e.view="results",d(),s>=8&&B()}function B(){const t=document.createElement("div");t.className="confetti";const s=["#99ca3d","#a8d65c","#7eb8ff","#f4f5f6","#b5e05a","#ff6b5b"];for(let a=0;a<36;a++){const o=document.createElement("i");o.style.left=`${Math.random()*100}%`,o.style.background=s[a%s.length],o.style.animationDuration=`${1.6+Math.random()*1.4}s`,o.style.animationDelay=`${Math.random()*.4}s`,t.appendChild(o)}document.body.appendChild(t),setTimeout(()=>t.remove(),3200)}function O(){const t=l[e.gameId],s=e.lastEntry,a=e.lastRank,o=L(a);u.innerHTML=p(`
    <section class="panel results accent-${t.accent}">
      <span class="badge">${c(t.title)}</span>
      <p style="margin:0.75rem 0 0;color:var(--fg-muted);font-weight:600;">${c(e.player)} · ${c(o)}</p>
      <div class="score-burst">${s.score}</div>
      <p class="rank-line">${a?`#${a} on the ${c(t.title)} board`:"Score saved"}</p>
      <div class="stat-row">
        <div class="stat"><div class="n">${s.correct}/${s.total}</div><div class="l">Correct</div></div>
        <div class="stat"><div class="n">${s.streakBest}</div><div class="l">Best streak</div></div>
        <div class="stat"><div class="n">${v(s.ms)}</div><div class="l">Time</div></div>
      </div>
      <div class="actions-row">
        <button class="primary-btn" type="button" data-action="retry">Play again →</button>
        <button class="ghost-btn" type="button" data-action="other">Try the other game</button>
        <button class="ghost-btn" type="button" data-action="home">Leaderboard</button>
      </div>
      <div class="review">
        <h3 style="font-family:var(--font-display);margin-bottom:0.65rem;font-weight:700;">Quick review</h3>
        ${t.questions.map((r,n)=>{const i=e.answers[n],w=r.ui?` · ${r.ui}`:"";return`
              <details>
                <summary>
                  <span class="${i!=null&&i.ok?"ok":"no"}">${i!=null&&i.ok?"✓":"✗"}</span>
                  ${n+1}. ${c(r.category)}${c(w)} — ${c(r.question.slice(0,64))}${r.question.length>64?"…":""}
                </summary>
                <p style="color:var(--fg-muted);line-height:1.45;margin:0.55rem 0 0;">${c(r.explain)}</p>
              </details>`}).join("")}
      </div>
    </section>
  `)}u.addEventListener("click",t=>{const s=t.target.closest("[data-action]");if(!s)return;const a=s.dataset.action;if(a==="home"){e.view="hub",d();return}if(a==="board-tab"){e.boardTab=s.dataset.tab,f();return}if(a==="start"){e.gameId=s.dataset.game,e.view="setup",d();return}if(a==="begin"){b();return}if(a==="pick"){q(Number(s.dataset.i));return}if(a==="next"){I();return}if(a==="retry"){e.view="setup",d();return}a==="other"&&(e.gameId=e.gameId==="classic"?"v3":"classic",e.view="setup",d())});d();
