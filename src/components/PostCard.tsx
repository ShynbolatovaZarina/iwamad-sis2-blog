import { Link } from 'react-router';
import Card from './ui/Card';
import Tag from './ui/Tag';
import LikeButton from './LikeButton';
import type { Post } from '../data/posts';

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <Card className="post-card">
      <h3 className="post-card__title">{post.title}</h3>
      <p className="post-card__date">{post.date}</p>
      <p className="post-card__excerpt">{post.excerpt}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <Link className="btn btn--primary" to={`/posts/${post.id}`}>
        Read more
      </Link>
      <LikeButton postId={post.id} />
    </Card>
  );
}

export default PostCard;
