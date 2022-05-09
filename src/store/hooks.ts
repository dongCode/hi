import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { RootDispatch, RootState } from './types';

export const useStoreDispatch = () => useDispatch<RootDispatch>();

export const useStoreSelector: TypedUseSelectorHook<RootState> =
  useSelector;
