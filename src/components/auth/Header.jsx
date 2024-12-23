import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../../assets/icons/home.svg";
import notificationImage from "../../assets/icons/notification.svg";
import avtorImage from "../../assets/images/avatars/avatar_1.png";
import logoImage from "../../assets/images/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import Logout from "./Logout";
export default function Header() {
  const { auth } = useAuth();
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/">
            <img
              className="max-w-[100px] rounded-full lg:max-w-[130px]"
              src={logoImage}
              //   src="./assets/images/logo.svg"
            />
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={homeImage} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={notificationImage} alt="Notification" />
            </button>
            {/* <button className="icon-btn">
              <img src={logoutImage} alt="Logout" />
            </button> */}

            <Logout />

            <button className="flex-center !ml-8 gap-3">
              <span className="text-lg font-medium lg:text-xl">
                {auth?.user?.firstName}
              </span>
              <img
                className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                src={avtorImage}
                alt=""
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
