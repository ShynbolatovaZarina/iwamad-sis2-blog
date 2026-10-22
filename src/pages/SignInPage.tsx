import { useLocation, useNavigate } from 'react-router';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

type FromState = { from?: string } | null;

function SignInPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as FromState)?.from ?? '/profile';

  function handleSignIn() {
    signIn();
    navigate(from, { replace: true });
  }

  return (
    <section className="page">
      <h2 className="page__title">Sign in</h2>
      <p className="page__text">The Profile page is only for signed in readers.</p>
      <Button onClick={handleSignIn}>Sign in</Button>
    </section>
  );
}

export default SignInPage;
