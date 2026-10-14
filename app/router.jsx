import { createBrowserRouter, data } from 'react-router';
import { Layout } from './layout.jsx';
import { HomePage } from './pages/home.jsx';
import { PlanetsPage } from './pages/planets.jsx';
import { PlanetPage } from './pages/planet.jsx';
import { NotFoundPage } from './pages/not-found.jsx';
import { findPlanet, planets } from './planets.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'planets', element: <PlanetsPage />, loader: () => planets },
      {
        path: 'planets/:planetId',
        element: <PlanetPage />,
        errorElement: <NotFoundPage />,
        loader: ({ params }) => {
          const planet = findPlanet(params.planetId);
          if (!planet) throw data(null, { status: 404 });
          return planet;
        },
      },
    ],
  },
]);
