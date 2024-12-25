import { useContext } from "react";
import { ProfileContext } from "../context/AuthContext";

export const useProfile = () => {
  return useContext(ProfileContext);
};
