import { useNavigate } from "react-router-dom";
import logoutImage from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";
const Logout = () => {
  const navigtor = useNavigate();

  const { setAuth } = useAuth();
  const handleClick = () => {
    setAuth({});
    navigtor("/login");
  };
  return (
    <>
      <button className="icon-btn" onClick={handleClick}>
        <img src={logoutImage} alt="Logout" />
      </button>
    </>
  );
};

export default Logout;
