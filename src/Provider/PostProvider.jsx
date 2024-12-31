import { useReducer } from "react";
import { PostContext } from "../context/AuthContext";
import { initalState, postReducres } from "../reducers/PostReducrs";



export default function PostProvider({children}) {
    const [state,dispatch] = useReducer(postReducres,initalState)

  return (
    <PostContext.Provider value={{state,dispatch}}>
        {children}
    </PostContext.Provider>
  )
}
