import { Link, useLoaderData } from 'react-router';
import { PlanetOrb } from '../planet-orb.jsx';
import { planets } from '../planets.js';

export function PlanetPage() {
  const planet = useLoaderData();
  const index = planets.findIndex((p) => p.id === planet.id);
  const prev = planets[index - 1];
  const next = planets[index + 1];

  const stats = [
    ['Type', planet.kind],
    ['Distance from the Sun', `${planet.distanceAu} AU`],
    ['Diameter', `${planet.diameterKm.toLocaleString('en-US')} km`],
    ['Known moons', planet.moons],
    ['Length of day', planet.day],
    ['Length of year', planet.year],
  ];

  return (
    <article>
      <Link to="/planets" className="back">
        ← All planets
      </Link>
      <header className="planet-header">
        <PlanetOrb color={planet.color} size={140} />
        <div>
          <p className="muted">Planet {index + 1} of {planets.length}</p>
          <h1>{planet.name}</h1>
          <p className="lead">{planet.summary}</p>
        </div>
      </header>
      <dl className="stats">
        {stats.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <nav className="pager">
        {prev ? <Link to={`/planets/${prev.id}`}>← {prev.name}</Link> : <span />}
        {next ? <Link to={`/planets/${next.id}`}>{next.name} →</Link> : <span />}
      </nav>
    </article>
  );
}
