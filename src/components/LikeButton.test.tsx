import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LikeButton from './LikeButton';
import { LikesProvider } from '../context/LikesContext';

describe('LikeButton', () => {
  it('shows the new like count after a click', async () => {
    render(
      <LikesProvider>
        <LikeButton postId={1} />
      </LikesProvider>,
    );

    expect(screen.getByRole('button', { name: 'Like (0 likes)' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button', { name: 'Like (1 like)' })).toBeInTheDocument();
  });

  it('keeps a separate count for each post', async () => {
    render(
      <LikesProvider>
        <LikeButton postId={1} />
        <LikeButton postId={2} />
      </LikesProvider>,
    );

    const [first, second] = screen.getAllByRole('button');
    await userEvent.click(first);
    await userEvent.click(first);

    expect(first).toHaveAccessibleName('Like (2 likes)');
    expect(second).toHaveAccessibleName('Like (0 likes)');
  });
});
