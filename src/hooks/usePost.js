import { useContext } from "react";
import { PostContext } from "../context/AuthContext";


export const usePost = ()=>{
    return useContext(PostContext)
}