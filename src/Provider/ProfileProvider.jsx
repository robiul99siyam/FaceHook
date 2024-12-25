import { useReducer } from "react";
import { ProfileContext } from "../context/AuthContext";
import { initalState, ProfileReducrs } from "../reducers/ProfileReducrs";
export default function ProfileProvier({ children }) {
  const [state, dispatch] = useReducer(ProfileReducrs, initalState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}
    </ProfileContext.Provider>
  );
}
