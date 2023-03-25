export type Exercise = {
  id?: number;
  name: string;
  muscle: string;
  sets?: number | string;
  reps?: number | string;
  load?: number | string;
};

export type Workout = {
  id: number;
  name: string;
  exercises: Exercise[];
  recommendedLevel?: number;
};
