import React from 'react'
import Logo from "../common/Logo";
import NavLinks from "./Navlinks";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="border-b border-zinc-800 bg-[#0B0B0B]">

      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-8">

        <Logo />

        <NavLinks />

        <UserMenu />

      </div>

    </header>
  );
};

export default Navbar;
