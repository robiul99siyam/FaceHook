import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/auth/Header";
import { useAuth } from "../hooks/useAuth";
import ProfileProvier from "../Provider/ProfileProvider";

export default function ProvideRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth.authToken ? (
        <ProfileProvier>
          <div>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </div>
        </ProfileProvier>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
