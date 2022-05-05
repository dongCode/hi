import { useDispatch } from 'react-redux';
import type { RootDispatch } from '@/types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useStoreDispatch = () => useDispatch<RootDispatch>();

export default useStoreDispatch;
