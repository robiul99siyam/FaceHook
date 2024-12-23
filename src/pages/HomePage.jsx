import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();

  return (
    <>
      <p> This is home page</p>

      <Link to="/me"> Go to profile </Link>
    </>
  );
}
