import { Link, useParams } from 'react-router';
import LikeButton from '../components/LikeButton';
import Tag from '../components/ui/Tag';
import { posts } from '../data/posts';

function PostPage() {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <section className="page">
        <h2 className="page__title">Post not found</h2>
        <p className="page__text">There is no post with id {id}.</p>
        <Link className="page__link" to="/posts">
          Back to all posts
        </Link>
      </section>
    );
  }

  return (
    <article className="page">
      <h2 className="page__title">{post.title}</h2>
      <p className="post-card__date">{post.date}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <p className="page__text">{post.body}</p>
      <LikeButton postId={post.id} />
      <p>
        <Link to="/posts">Back to all posts</Link>
      </p>
    </article>
  );
}

export default PostPage;
