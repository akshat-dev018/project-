import React from 'react'
import { ShoppingCart, LogOut } from "lucide-react";

const UserMenu = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="flex items-center gap-4">

      <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 px-4 py-2">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 font-bold text-black">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <span className="text-white">
          {user?.name}
        </span>

      </div>

      <button className="rounded-2xl border border-zinc-700 p-3 hover:border-lime-400">
        <ShoppingCart size={20} />
      </button>

      <button className="rounded-2xl border border-zinc-700 p-3 hover:border-red-500">
        <LogOut size={20} />
      </button>

    </div>
  );
};

export default UserMenu;
