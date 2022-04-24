import { RouteObject } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { Counter } from '@/pages/counter';
import { Courses } from '@/pages/courses';
import { CourseView } from '@/pages/courses/view';
import { Home } from '@/pages/home';
import { LoginPage } from '@/pages/login';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/courses',
        element: <Courses />,
        children: [{ path: ':id', element: <CourseView /> }],
      },
      {
        path: '/counter',
        element: <Counter />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
];

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
