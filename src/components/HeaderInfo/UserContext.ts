/* eslint-disable import/prefer-default-export */
import {createContext} from 'react';

interface IUserContext {
  name: string;
  score?: number;
}

export const UserContext = createContext<IUserContext>({
  name: '',
  score: 0,
});
