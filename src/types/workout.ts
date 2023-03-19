export type Exercise = {
  id: number;
  name: string;
  muscle: string;
  sets: number;
  reps: number;
  load: number;
};

export type Workout = {
  id: number;
  name: string;
  recommendedLevel: number;
  exercises: Exercise[];
};
