/* eslint-disable import/prefer-default-export */
import {createContext} from 'react';

interface IToasterContext {
  open: boolean;
  text: string;
}

export const ToasterContext = createContext<IToasterContext>({
  open: false,
  text: '',
});
