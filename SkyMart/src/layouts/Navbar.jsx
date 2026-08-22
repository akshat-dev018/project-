import React from 'react'
import Logo from "../common/Logo";
import NavLinks from "./Navlinks";
import UserMenu from "./UserMenu";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("currentUser");
  toast.success("Logged out successfully");
  navigate("/login");
  }


  return (
    <header className="border-b border-zinc-800 bg-[#0B0B0B] fixed top-0 left-0 right-0 z-50 ">

      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-8">

        <Logo  />

        <NavLinks />

        <UserMenu handleLogout={handleLogout} />

      </div>

    </header>
  );
};

export default Navbar;
