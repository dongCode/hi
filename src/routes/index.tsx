import { useRoutes } from 'react-router-dom';
import { routesConfig } from './config';

export default function RoutesElement() {
  let elements = useRoutes(routesConfig);

  return <>{elements}</>;
}
