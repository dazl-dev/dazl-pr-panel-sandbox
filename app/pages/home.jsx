import { Link } from 'react-router';
import { PlanetOrb } from '../planet-orb.jsx';
import { planets } from '../planets.js';

const facts = [
  { value: '4.6 billion years', label: 'Age of the solar system' },
  { value: '99.86%', label: 'Of its mass is in the Sun' },
  { value: '8 min 20 s', label: 'For sunlight to reach Earth' },
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <PlanetOrb color="#ffb648" size={120} />
        <div>
          <h1>Our solar system</h1>
          <p className="lead">
            One star, eight planets, and countless moons, asteroids and comets, all held
            together by the Sun&apos;s gravity.
          </p>
          <Link to="/planets" className="button">
            Explore the planets →
          </Link>
        </div>
      </section>

      <section className="facts">
        {facts.map((fact) => (
          <div key={fact.label} className="fact">
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section>
        <h2>In order from the Sun</h2>
        <ol className="orbit-row">
          {planets.map((planet) => (
            <li key={planet.id}>
              <Link to={`/planets/${planet.id}`} className="orbit-link">
                <PlanetOrb color={planet.color} size={36} />
                <span>{planet.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
