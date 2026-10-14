export function PlanetOrb({ color, size = 64 }) {
  return (
    <span
      className="orb"
      aria-hidden="true"
      style={{ '--orb-color': color, width: size, height: size }}
    />
  );
}
