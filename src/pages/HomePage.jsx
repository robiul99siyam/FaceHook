import { useEffect, useReducer } from "react";
import { actions } from "../actions";
import PostList from "../components/auth/post/PostList";
import useAxios from "../hooks/useAxios";
import { initalState, postReducres } from "../reducers/PostReducrs";

export default function HomePage() {
  const [state, dispatch] = useReducer(postReducres, initalState);
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

  console.log(state);
  return (
    <>
      <PostList posts={state?.posts} />
    </>
  );
}
