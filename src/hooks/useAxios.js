import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";

export default function useAxios() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // add the interceptoers request
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // add the response interceptors

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const orginalRequest = error.config;

        if (error.response.status === 401 && !orginalRequest._retry) {
          orginalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;

            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );

            const { token } = response.data;

            setAuth({ ...auth, authToken: token });

            orginalRequest.headers.Authorization = `Bearer ${authToken}`;
            return axios(orginalRequest);
          } catch (err) {
            throw error;
          }
        }
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.authToken]);

  return { api };
}
