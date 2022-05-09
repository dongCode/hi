import { Link, Outlet } from 'react-router-dom';

export function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <div>
        <p>Please choose a course:</p>

        <nav>
          <ul>
            <li>
              <Link to="react-fundamentals">React Fundamentals</Link>
            </li>
            <li>
              <Link to="advanced-react">Advanced React</Link>
            </li>
            <li>
              <Link to="react-router">React Router</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
