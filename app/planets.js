export const planets = [
  {
    id: 'mercury',
    name: 'Mercury',
    kind: 'Terrestrial',
    color: '#b7b1a8',
    distanceAu: 0.39,
    diameterKm: 4879,
    moons: 0,
    day: '58.6 Earth days',
    year: '88 Earth days',
    summary:
      'The smallest planet and the closest to the Sun. With almost no atmosphere, its surface swings from 430 °C by day to −180 °C at night.',
  },
  {
    id: 'venus',
    name: 'Venus',
    kind: 'Terrestrial',
    color: '#e8c27a',
    distanceAu: 0.72,
    diameterKm: 12104,
    moons: 0,
    day: '243 Earth days (retrograde)',
    year: '225 Earth days',
    summary:
      'A runaway greenhouse wrapped in sulfuric acid clouds, and the hottest planet at about 465 °C. It spins backwards, so its day outlasts its year.',
  },
  {
    id: 'earth',
    name: 'Earth',
    kind: 'Terrestrial',
    color: '#4f8fe0',
    distanceAu: 1,
    diameterKm: 12742,
    moons: 1,
    day: '23.9 hours',
    year: '365.25 days',
    summary:
      'The only world known to host life, with liquid water covering about 71% of its surface and a magnetic field that shields it from the solar wind.',
  },
  {
    id: 'mars',
    name: 'Mars',
    kind: 'Terrestrial',
    color: '#d0603a',
    distanceAu: 1.52,
    diameterKm: 6779,
    moons: 2,
    day: '24.6 hours',
    year: '687 Earth days',
    summary:
      'A cold desert coloured by iron oxide dust. It is home to Olympus Mons, the tallest volcano in the solar system, and to ancient dried-up river valleys.',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    kind: 'Gas giant',
    color: '#d9a877',
    distanceAu: 5.2,
    diameterKm: 139820,
    moons: 95,
    day: '9.9 hours',
    year: '11.9 Earth years',
    summary:
      'More than twice as massive as all the other planets combined. Its Great Red Spot is a storm wider than Earth that has raged for centuries.',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    kind: 'Gas giant',
    color: '#e6d08f',
    distanceAu: 9.58,
    diameterKm: 116460,
    moons: 274,
    day: '10.7 hours',
    year: '29.5 Earth years',
    summary:
      'Famous for its bright rings of ice and rock. It is less dense than water, and its moon Titan has lakes of liquid methane.',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    kind: 'Ice giant',
    color: '#8fd8e0',
    distanceAu: 19.2,
    diameterKm: 50724,
    moons: 29,
    day: '17.2 hours',
    year: '84 Earth years',
    summary:
      'Tipped over at 98°, it rolls around the Sun on its side, so each pole gets 42 years of continuous sunlight followed by 42 years of darkness.',
  },
  {
    id: 'neptune',
    name: 'Neptune',
    kind: 'Ice giant',
    color: '#4f6fe8',
    distanceAu: 30.05,
    diameterKm: 49244,
    moons: 16,
    day: '16.1 hours',
    year: '164.8 Earth years',
    summary:
      'The windiest planet, with supersonic winds above 2,000 km/h. It was found in 1846 by mathematical prediction before anyone saw it.',
  },
];

export function findPlanet(id) {
  return planets.find((planet) => planet.id === id);
}
