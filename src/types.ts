import { ReactElement } from 'react';
export type ErrOrNul = Error | null;

export interface TOBj {
  [key: string]: any;
}

export type TErrorFallback = (props: {
  error: ErrOrNul;
}) => ReactElement;

export type EleOrNul = ReactElement | null;
