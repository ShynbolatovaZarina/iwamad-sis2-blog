import Button from './ui/Button';
import { useLikes } from '../context/LikesContext';

type LikeButtonProps = {
  postId: number;
};

function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes();
  const count = likes[postId] ?? 0;

  return (
    <Button
      variant={count > 0 ? 'primary' : 'secondary'}
      aria-label={`Like (${count} ${count === 1 ? 'like' : 'likes'})`}
      onClick={() => addLike(postId)}
    >
      {count > 0 ? '❤️' : '🤍'} Like ({count})
    </Button>
  );
}

export default LikeButton;
