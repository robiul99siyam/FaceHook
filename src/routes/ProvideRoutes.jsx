import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/auth/Header";
import { useAuth } from "../hooks/useAuth";
import PostProvider from "../Provider/PostProvider";
import ProfileProvier from "../Provider/ProfileProvider";

export default function ProvideRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth.authToken ? (
        <ProfileProvier>
          <PostProvider>
            <ToastContainer />
            <div>
              <Header />
              <main className="mx-auto max-w-[1020px] py-8">
                <div className="container">
                  <Outlet />
                </div>
              </main>
            </div>
          </PostProvider>
        </ProfileProvier>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
