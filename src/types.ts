import { ReactElement } from 'react';

export type ErrorOrNull = Error | null;

export interface TOBj {
  [key: string]: any;
}

export type TErrorFallback = (props: {
  error: ErrorOrNull;
}) => ReactElement;
