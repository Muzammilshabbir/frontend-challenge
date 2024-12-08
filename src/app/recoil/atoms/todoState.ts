import { atom } from 'recoil';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [],
});
