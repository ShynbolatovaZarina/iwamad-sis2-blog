import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { LikesProvider } from './context/LikesContext';

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  );
}

describe('App routes', () => {
  it('shows the sign in page when signed out and opening the protected page', () => {
    renderAt('/profile');

    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Profile' })).not.toBeInTheDocument();
  });

  it('opens the protected page after signing in and protects it again after signing out', async () => {
    renderAt('/profile');

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(screen.getByRole('heading', { name: 'Profile' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Sign out' }));
    await userEvent.click(screen.getByRole('link', { name: 'Profile' }));
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('shows a message for a post that does not exist', () => {
    renderAt('/posts/999');

    expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument();
  });

  it('shows the 404 page inside the layout for an unknown address', () => {
    renderAt('/banana');

    expect(screen.getByRole('heading', { name: /404/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });
});
