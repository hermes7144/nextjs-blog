import { getPosts } from '../service/posts';

export default async function PostGrid() {
  const posts = await getPosts();
  {
    posts.map((post) => {
      <li>{post.title}</li>;
    });
  }
  return <></>;
}
