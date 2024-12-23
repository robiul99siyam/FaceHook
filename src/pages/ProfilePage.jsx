import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

export default function ProfilePage() {
  const { auth } = useAuth();
  const { api } = useAxios();
  const [user, setUser] = useState(null);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        console.log(response);
        setUser(response?.data?.user);
        setPost(response?.data?.posts);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProfile();
  }, []);

  console.log(post);

  return (
    <>
      <h1>Profile Page</h1>

      <h1>Welcome , {user?.firstName}</h1>
      {post.length === 0 ? "Sorry Post is Not Fount" : <h1> {post.length}</h1>}
    </>
  );
}
