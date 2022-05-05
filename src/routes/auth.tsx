import { selectUser } from '@/store/authSlice';
import useStoreSelector from '@/utils/useStoreSelector';

import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({
  children,
}: {
  children: ReactElement;
}) {
  let user = useStoreSelector(selectUser);
  let location = useLocation();

  if (!user) {
    // 返回到用户想要去的页面
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return children;
}
