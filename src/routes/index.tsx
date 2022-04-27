import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './auth';
import { routesConfig } from './config';

export default function RoutesElement() {
  let elements = useRoutes(routesConfig);

  return <AuthProvider>{elements}</AuthProvider>;
}
