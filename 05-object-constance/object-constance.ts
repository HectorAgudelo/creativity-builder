type Difficulty = "Easy" | "Medium" | "Hard";

interface Settings {
  readonly spawnRate: number;
  readonly bossHealth: number;
}

// How would you define this object so that 
// GAME_SETTINGS.Easy.spawnRate = 100 throws an error?
const GAME_SETTINGS: Record<Difficulty, Settings> = {
  Easy: { spawnRate: 5, bossHealth: 100 },
  Medium: { spawnRate: 10, bossHealth: 200 },
  Hard: { spawnRate: 15, bossHealth: 300 },
};