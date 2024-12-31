import { useEffect } from "react";
import { actions } from "../actions";
import NewPost from "../components/auth/post/NewPost";
import PostList from "../components/auth/post/PostList";
import useAxios from "../hooks/useAxios";
import { usePost } from "../hooks/usePost";

export default function HomePage() {
  const { state, dispatch } = usePost();
  const { api } = useAxios();
  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHED });

    const postDataFetch = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    postDataFetch();
  }, []);

  return (
    <>
      {" "}
      <NewPost />
      <PostList posts={state?.posts} />
    </>
  );
}
