import { Link, isRouteErrorResponse, useRouteError } from 'react-router';

export function NotFoundPage() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <div className="main">
      <h1>{notFound ? 'Lost in space' : 'Something went wrong'}</h1>
      <p className="lead">
        {notFound ? 'There is no such page in this solar system.' : 'An unexpected error occurred.'}
      </p>
      <Link to="/" className="button">
        Back to the Sun
      </Link>
    </div>
  );
}
