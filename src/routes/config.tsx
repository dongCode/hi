import { RouteObject } from 'react-router-dom';
import { AppLayout } from '@/components';
import { Counter } from '@/features/counter';
import { Courses } from '@/features/courses';
import { CourseView } from '@/features/courses/view';
import { Home } from '@/features/home';
import { Login } from '@/features/login';
import { RequireAuth } from './auth';
import NoMatch from './NoMatch';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/courses',
        element: (
          <RequireAuth>
            <Courses />
          </RequireAuth>
        ),
        children: [{ path: ':id', element: <CourseView /> }],
      },
      {
        path: '/counter',
        element: <Counter />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];
