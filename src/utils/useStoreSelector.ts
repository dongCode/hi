import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@/types';

export const useStoreSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export default useStoreSelector;
