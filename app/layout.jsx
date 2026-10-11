import { NavLink, Outlet } from 'react-router';

export function Layout() {
  return (
    <div className="shell">
      <header className="header">
        <NavLink to="/" className="brand">
          ☉ Solar System
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/planets">Planets</NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
