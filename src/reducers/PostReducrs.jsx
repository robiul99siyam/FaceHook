import { actions } from "../actions";

const initalState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducres = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.post.DATA_FETCHED: {
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    }
    case actions.post.DATA_FETCH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    case actions.post.DATA_CREATE: {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.data],
      };
    }
    case actions.post.DATA_DELETED: {
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((x) => x.id !== action.data),
      };
    }

    case actions.post.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export { initalState, postReducres };
