import { getFeaturedPosts } from '../service/posts';
import PostGrid from './PostGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className='my-4'>
      <p className='text-2xl font-bold my-2'>Featured Posts</p>
      <PostGrid posts={posts} />
    </section>
  );
}
