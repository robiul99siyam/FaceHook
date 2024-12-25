import { useEffect } from "react";
import { actions } from "../actions";
import MyPost from "../components/auth/profile/MyPost";
import ProfileInfo from "../components/auth/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const { auth } = useAuth();
  const { api } = useAxios();

  const { state, dispatch } = useProfile();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <ProfileInfo />
      <MyPost />
    </>
  );
}
