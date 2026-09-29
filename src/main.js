import { games } from "./data/games.js";
import { addScore, loadBoard } from "./leaderboard.js";

const LETTERS = ["A", "B", "C", "D"];
const app = document.getElementById("app");

const state = {
  view: "hub",
  boardTab: "classic",
  gameId: null,
  player: "",
  index: 0,
  answers: [],
  streak: 0,
  streakBest: 0,
  score: 0,
  startedAt: 0,
  locked: false,
};

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatMs(ms) {
  const s = Math.round(ms / 1000);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m > 0 ? `${m}m ${r}s` : `${r}s`;
}

function titleFor(rank) {
  if (rank === null) return "Challenger";
  if (rank === 1) return "Arena Champion";
  if (rank <= 3) return "Podium Pro";
  if (rank <= 10) return "Queue Crusher";
  return "Trained Agent";
}

function uiPill(ui) {
  if (!ui) return "";
  const cls = ui.toLowerCase() === "legacy" ? "ui-pill legacy" : "ui-pill";
  return `<span class="${cls}">${esc(ui)} UI</span>`;
}

function render() {
  if (state.view === "hub") renderHub();
  else if (state.view === "setup") renderSetup();
  else if (state.view === "quiz") renderQuiz();
  else if (state.view === "results") renderResults();
}

function shell(inner, { showHome = true } = {}) {
  return `
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <span class="brand-kicker">CoreBridge Support</span>
          <h1>Cross-Training Arena</h1>
        </div>
        ${
          showHome
            ? `<button class="ghost-btn" type="button" data-action="home">Home</button>`
            : ""
        }
      </header>
      ${inner}
    </div>
    <div class="streak-banner" id="streakBanner" aria-live="polite"></div>
  `;
}

function boardRows(gameId) {
  const list = loadBoard()[gameId] || [];
  if (!list.length) {
    return `<p class="empty">No scores yet — be the first on the board.</p>`;
  }
  return `<ol class="board-list">${list
    .map(
      (row, i) => `
      <li>
        <span class="rank">${i + 1}</span>
        <div>
          <div class="who">${esc(row.name)}</div>
          <div class="meta">${row.correct}/${row.total} correct · ${formatMs(row.ms)} · best streak ${row.streakBest}</div>
        </div>
        <span class="pts">${row.score}</span>
      </li>`
    )
    .join("")}</ol>`;
}

function renderHub() {
  app.innerHTML = shell(
    `
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
          <h3>${esc(games.classic.title)}</h3>
          <p>${esc(games.classic.tagline)}</p>
          <button class="primary-btn" type="button" data-action="start" data-game="classic">
            Start Classic Circuit →
          </button>
        </article>
        <article class="game-card v3">
          <span class="badge">V2 staff · learn V3</span>
          <h3>${esc(games.v3.title)}</h3>
          <p>${esc(games.v3.tagline)}</p>
          <button class="primary-btn" type="button" data-action="start" data-game="v3">
            Start V3 Gauntlet →
          </button>
        </article>
      </div>
    </section>
    <section class="panel">
      <h3>Leaderboard</h3>
      <div class="board-tabs">
        <button class="tab ${state.boardTab === "classic" ? "active" : ""}" type="button" data-action="board-tab" data-tab="classic">Classic Circuit</button>
        <button class="tab ${state.boardTab === "v3" ? "active" : ""}" type="button" data-action="board-tab" data-tab="v3">V3 Gauntlet</button>
      </div>
      <div id="boardMount">${boardRows(state.boardTab)}</div>
    </section>
  `,
    { showHome: false }
  );
}

function renderSetup() {
  const g = games[state.gameId];
  app.innerHTML = shell(`
    <section class="panel setup accent-${g.accent}">
      <span class="badge">${esc(g.audience)}</span>
      <h2 style="font-family:var(--font-display);margin:0.6rem 0 0.35rem;letter-spacing:-0.02em;font-weight:700;">${esc(g.title)}</h2>
      <p class="hint">10 ticket-style scenarios. Correct answers earn points; streaks multiply the fun. Wrong answers still teach — read the tip, then continue.</p>
      <label for="playerName">Callsign (your name)</label>
      <input id="playerName" maxlength="24" placeholder="e.g. Alex" value="${esc(state.player)}" autocomplete="nickname" />
      <div class="actions-row" style="justify-content:flex-start">
        <button class="primary-btn" type="button" data-action="begin">Enter the arena →</button>
        <button class="ghost-btn" type="button" data-action="home">Back</button>
      </div>
    </section>
  `);
  const input = document.getElementById("playerName");
  input?.focus();
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") beginGame();
  });
}

function beginGame() {
  const input = document.getElementById("playerName");
  state.player = (input?.value || state.player || "Agent").trim().slice(0, 24) || "Agent";
  state.index = 0;
  state.answers = [];
  state.streak = 0;
  state.streakBest = 0;
  state.score = 0;
  state.startedAt = Date.now();
  state.locked = false;
  state.view = "quiz";
  render();
}

function pointsFor(streakAfterCorrect) {
  const base = 100;
  const bonus = Math.min(streakAfterCorrect - 1, 4) * 25;
  return base + Math.max(0, bonus);
}

function flashStreak(text) {
  const el = document.getElementById("streakBanner");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 900);
}

function renderQuiz() {
  const g = games[state.gameId];
  const q = g.questions[state.index];
  const answered = state.answers[state.index];
  const pct = Math.round((state.index / g.questions.length) * 100);

  app.innerHTML = shell(`
    <div class="accent-${g.accent}">
      <div class="quiz-head">
        <div class="progress-wrap">
          <div class="progress-label">
            <span>${esc(g.title)}</span>
            <span>Q ${state.index + 1} / ${g.questions.length}</span>
          </div>
          <div class="progress-bar ${g.accent}"><span style="width:${pct}%"></span></div>
        </div>
        <div class="hud">
          <div class="hud-chip">Score <strong>${state.score}</strong></div>
          <div class="hud-chip">Streak <strong>${state.streak}</strong></div>
        </div>
      </div>

      <div class="scenario">
        <p>${esc(q.scenario)}</p>
        <span class="cat-pill">${esc(q.category)}</span>
        ${uiPill(q.ui)}
      </div>

      <div class="question-block panel">
        <h2>${esc(q.question)}</h2>
        <div class="choices" id="choices">
          ${q.choices
            .map((c, i) => {
              let cls = "choice";
              if (answered) {
                if (i === q.correct) cls += " correct";
                else if (i === answered.picked && !answered.ok) cls += " wrong";
                else cls += " dim";
              }
              return `
                <button class="${cls}" type="button" data-action="pick" data-i="${i}" ${answered ? "disabled" : ""}>
                  <span class="letter">${LETTERS[i]}</span>
                  <span>${esc(c)}</span>
                </button>`;
            })
            .join("")}
        </div>
        ${
          answered
            ? `
          <div class="feedback ${answered.ok ? "good" : "bad"}">
            <h3>${answered.ok ? streakHeadline(answered.streak) : "Not quite — here's the play"}</h3>
            <p>${esc(q.explain)}</p>
            <p class="tip">Pro tip: ${esc(q.tip)}</p>
            <div class="feedback-actions">
              <button class="primary-btn" type="button" data-action="next">
                ${state.index + 1 >= g.questions.length ? "See results →" : "Next scenario →"}
              </button>
            </div>
          </div>`
            : ""
        }
      </div>
    </div>
  `);
}

function streakHeadline(streak) {
  if (streak >= 5) return "On fire — 5+ streak!";
  if (streak >= 3) return "Nice streak!";
  if (streak === 2) return "Two in a row!";
  return "Nailed it!";
}

function pickAnswer(i) {
  if (state.locked) return;
  const g = games[state.gameId];
  const q = g.questions[state.index];
  if (state.answers[state.index]) return;

  state.locked = true;
  const ok = i === q.correct;
  if (ok) {
    state.streak += 1;
    state.streakBest = Math.max(state.streakBest, state.streak);
    const gained = pointsFor(state.streak);
    state.score += gained;
    if (state.streak >= 2) flashStreak(`${state.streak}× streak · +${gained}`);
  } else {
    state.streak = 0;
  }

  state.answers[state.index] = { picked: i, ok, streak: state.streak };
  renderQuiz();
  state.locked = false;
}

function nextQuestion() {
  const g = games[state.gameId];
  if (state.index + 1 >= g.questions.length) {
    finishGame();
    return;
  }
  state.index += 1;
  renderQuiz();
}

function finishGame() {
  const g = games[state.gameId];
  const correct = state.answers.filter((a) => a.ok).length;
  const ms = Date.now() - state.startedAt;
  const entry = {
    name: state.player,
    score: state.score,
    correct,
    total: g.questions.length,
    streakBest: state.streakBest,
    ms,
  };
  const list = addScore(state.gameId, entry);
  state.lastEntry = entry;
  const saved = list.find(
    (r) => r.name === entry.name && r.score === entry.score && r.ms === entry.ms
  );
  state.lastRank = saved ? list.indexOf(saved) + 1 : null;
  state.view = "results";
  render();
  if (correct >= 8) sprinkleConfetti();
}

function sprinkleConfetti() {
  const layer = document.createElement("div");
  layer.className = "confetti";
  const colors = ["#99ca3d", "#a8d65c", "#7eb8ff", "#f4f5f6", "#b5e05a", "#ff6b5b"];
  for (let i = 0; i < 36; i++) {
    const bit = document.createElement("i");
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;
    bit.style.animationDelay = `${Math.random() * 0.4}s`;
    layer.appendChild(bit);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 3200);
}

function renderResults() {
  const g = games[state.gameId];
  const entry = state.lastEntry;
  const rank = state.lastRank;
  const title = titleFor(rank);

  app.innerHTML = shell(`
    <section class="panel results accent-${g.accent}">
      <span class="badge">${esc(g.title)}</span>
      <p style="margin:0.75rem 0 0;color:var(--fg-muted);font-weight:600;">${esc(state.player)} · ${esc(title)}</p>
      <div class="score-burst">${entry.score}</div>
      <p class="rank-line">${rank ? `#${rank} on the ${esc(g.title)} board` : "Score saved"}</p>
      <div class="stat-row">
        <div class="stat"><div class="n">${entry.correct}/${entry.total}</div><div class="l">Correct</div></div>
        <div class="stat"><div class="n">${entry.streakBest}</div><div class="l">Best streak</div></div>
        <div class="stat"><div class="n">${formatMs(entry.ms)}</div><div class="l">Time</div></div>
      </div>
      <div class="actions-row">
        <button class="primary-btn" type="button" data-action="retry">Play again →</button>
        <button class="ghost-btn" type="button" data-action="other">Try the other game</button>
        <button class="ghost-btn" type="button" data-action="home">Leaderboard</button>
      </div>
      <div class="review">
        <h3 style="font-family:var(--font-display);margin-bottom:0.65rem;font-weight:700;">Quick review</h3>
        ${g.questions
          .map((q, i) => {
            const a = state.answers[i];
            const ui = q.ui ? ` · ${q.ui}` : "";
            return `
              <details>
                <summary>
                  <span class="${a?.ok ? "ok" : "no"}">${a?.ok ? "✓" : "✗"}</span>
                  ${i + 1}. ${esc(q.category)}${esc(ui)} — ${esc(q.question.slice(0, 64))}${q.question.length > 64 ? "…" : ""}
                </summary>
                <p style="color:var(--fg-muted);line-height:1.45;margin:0.55rem 0 0;">${esc(q.explain)}</p>
              </details>`;
          })
          .join("")}
      </div>
    </section>
  `);
}

app.addEventListener("click", (e) => {
  const t = e.target.closest("[data-action]");
  if (!t) return;
  const action = t.dataset.action;

  if (action === "home") {
    state.view = "hub";
    render();
    return;
  }
  if (action === "board-tab") {
    state.boardTab = t.dataset.tab;
    renderHub();
    return;
  }
  if (action === "start") {
    state.gameId = t.dataset.game;
    state.view = "setup";
    render();
    return;
  }
  if (action === "begin") {
    beginGame();
    return;
  }
  if (action === "pick") {
    pickAnswer(Number(t.dataset.i));
    return;
  }
  if (action === "next") {
    nextQuestion();
    return;
  }
  if (action === "retry") {
    state.view = "setup";
    render();
    return;
  }
  if (action === "other") {
    state.gameId = state.gameId === "classic" ? "v3" : "classic";
    state.view = "setup";
    render();
  }
});

render();
