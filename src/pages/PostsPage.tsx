import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function PostsPage() {
  return (
    <section>
      <h2 className="page__title page__title--left">Posts</h2>
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsPage;
