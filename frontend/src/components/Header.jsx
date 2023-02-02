import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = ({ setLoginModal }) => {
  const { user, logout } = useAuth();
  
  return (
    <div
      className="sticky px-10 md:px-40 py-5 bg-white shadow-md flex 
    items-center justify-between z-50"
    >
      <Link to="/">
        <img
          className="cursor-pointer hover:scale-95 fade h-10 object-contain"
          src="/assets/logo.png"
          alt="logo"
        />
      </Link>
      {user ? (
        <div className="flex gap-x-2 items-center">
          <img
            className="h-14 object-contain"
            src="/assets/user.png"
            alt="user"
          />
          <div className="flex flex-col items-start">
            <h6 className="text-xs">Logged in as</h6>
            <h4 className="font-medium text-xl -mt-1">{user?.email?.split("@")[0]}</h4>
          </div>
          <button onClick={() => logout()} className="text-sm btnPrimarySmall">
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => setLoginModal(true)}
          className="text-sm btnPrimaryLarge"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
