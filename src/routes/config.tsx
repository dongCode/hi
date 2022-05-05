import { RouteObject } from 'react-router-dom';
import { AppLayout } from '@/components';
import { Counter } from '@/pages/counter';
import { Courses } from '@/pages/courses';
import { CourseView } from '@/pages/courses/view';
import { Home } from '@/pages/home';
import { Login } from '@/pages/login';
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
