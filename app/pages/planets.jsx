import { Link, useLoaderData } from 'react-router';
import { PlanetOrb } from '../planet-orb.jsx';

export function PlanetsPage() {
  const planets = useLoaderData();
  return (
    <>
      <h1>The planets</h1>
      <p className="lead">Four rocky worlds close in, four giants farther out.</p>
      <ul className="grid">
        {planets.map((planet) => (
          <li key={planet.id}>
            <Link to={`/planets/${planet.id}`} className="card">
              <PlanetOrb color={planet.color} size={56} />
              <div>
                <h2>{planet.name}</h2>
                <p className="muted">
                  {planet.kind} · {planet.distanceAu} AU from the Sun
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
