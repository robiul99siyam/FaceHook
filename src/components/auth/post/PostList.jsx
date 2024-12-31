import PostCard from "./PostCard";

const PostList = ({ posts = [] }) => {
  const sortedPosts = posts
    .slice() // Avoid mutating the original array
    .sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

  return sortedPosts.map((post) => <PostCard key={post.id} post={post} />);
};

export default PostList;
