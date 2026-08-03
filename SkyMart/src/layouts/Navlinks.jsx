import React from 'react'
import { NavLink } from "react-router";

const links = [
    {
    name: "Home",
    path: "/home",
  },
  {
    name: "Shop",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
]

const Navlinks = () => {
   return (
    <div className="flex items-center gap-10">
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}
          className={({ isActive }) =>
            `font-medium transition ${
              isActive
                ? "text-lime-400"
                : "text-zinc-400 hover:text-white"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};


export default Navlinks
