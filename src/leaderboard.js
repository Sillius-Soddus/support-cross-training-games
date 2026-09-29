const STORAGE_KEY = "cb-cross-train-leaderboard-v2";

function emptyBoard() {
  return { classic: [], v3: [] };
}

export function loadBoard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // One-time migrate from v1 keys if present
      const legacyRaw = localStorage.getItem("cb-cross-train-leaderboard-v1");
      if (legacyRaw) {
        const old = JSON.parse(legacyRaw);
        const migrated = {
          classic: Array.isArray(old.legacy) ? old.legacy : [],
          v3: Array.isArray(old.evo) ? old.evo : [],
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        return migrated;
      }
      return emptyBoard();
    }
    const parsed = JSON.parse(raw);
    return {
      classic: Array.isArray(parsed.classic) ? parsed.classic : [],
      v3: Array.isArray(parsed.v3) ? parsed.v3 : [],
    };
  } catch {
    return emptyBoard();
  }
}

function saveBoard(board) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
}

/**
 * @param {"classic"|"v3"} gameId
 * @param {{ name: string, score: number, correct: number, total: number, streakBest: number, ms: number }} entry
 */
export function addScore(gameId, entry) {
  const board = loadBoard();
  const list = board[gameId] || [];
  const record = {
    ...entry,
    name: String(entry.name || "Agent").trim().slice(0, 24) || "Agent",
    at: new Date().toISOString(),
  };
  list.push(record);
  list.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.correct !== a.correct) return b.correct - a.correct;
    return a.ms - b.ms;
  });
  board[gameId] = list.slice(0, 25);
  saveBoard(board);
  return board[gameId];
}
