import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div>
        <img
          className="h-20 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="header-text"
        />
      </div>
      {user && (
        <div className="flex p-2 justify-between ">
          <img
            className="hidden md:block w-10 h-10"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
            alt="user_image"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white px-5 ">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
