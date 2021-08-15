export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  completed: boolean;
};

export const emptyEvent = {
  id: '',
  name: '',
  date: '',
  description: '',
  completed: false
};