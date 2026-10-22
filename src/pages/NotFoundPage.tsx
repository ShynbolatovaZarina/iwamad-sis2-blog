import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className="page">
      <h2 className="page__title">404 – Page not found</h2>
      <p className="page__text">There is no page at this address.</p>
      <Link className="page__link" to="/">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
