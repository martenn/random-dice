export interface Stats {
  levelTaskCounts: { [key: number]: number };
  skipCount: number;
  counter: number;
  level: number;
  startTime: number;
}
