import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/auth/Header";
import { useAuth } from "../hooks/useAuth";

export default function ProvideRoute() {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <div>
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
