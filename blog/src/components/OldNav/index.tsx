import { NavRoute } from '@/components/OldNav/NavRoute';
import { NavTheme } from '@/components/OldNav/NavTheme';
import { postManager } from '@/model/post';

export const paths = [
  { href: '/about', text: 'Portfolio', check: '/about' },
  { href: '/posts?page=1', text: 'Posts', check: '/posts' },
];

export const OldNav = () => {
  const searchPosts = postManager.getPostsForSearch(); // 검색만을 위한 배열

  return (
    <nav className={`block mt-3 sm:mt-0`}>
      <NavRoute searchPosts={searchPosts} />
      <NavTheme />
    </nav>
  );
};
