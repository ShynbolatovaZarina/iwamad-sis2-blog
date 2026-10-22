import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

function ProfilePage() {
  const { signOut } = useAuth();

  return (
    <section className="page">
      <h2 className="page__title">Profile</h2>
      <p className="page__text">You are signed in.</p>
      <Button variant="secondary" onClick={signOut}>
        Sign out
      </Button>
    </section>
  );
}

export default ProfilePage;
