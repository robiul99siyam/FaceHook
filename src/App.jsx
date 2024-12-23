import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NofoundPage from "./pages/NoFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegistionPage from "./pages/RegistionPage";
import ProvideRoute from "./routes/ProvideRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<ProvideRoute />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistionPage />} path="/register" />
        <Route element={<NofoundPage />} path="*" />
      </Routes>
    </>
  );
}
