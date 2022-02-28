export interface ICourse {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Array<string>;
}

export interface INewCourse {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Array<string>;
}
