export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string; // notes is either a string or undefined
  }[]; //tells it that it is an array
}
