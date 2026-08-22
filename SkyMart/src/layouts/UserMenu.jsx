import React from 'react'
import { ShoppingCart, LogOut } from "lucide-react";
import useCart from "../hooks/useCart";

const UserMenu = ({handleLogout}) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const { cartCount,setIsCartOpen} = useCart();

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

<button
  onClick={() => setIsCartOpen(true)}
  className="relative"
>
  <ShoppingCart className='text-white cursor-pointer' size={22} />

  {cartCount > 0 && (
    <span
      className=" absolute -right-2  -top-2  flex  h-5  min-w-5  items-center  justify-center  rounded-full  bg-lime-400  px-1  text-xs  font-bold  text-blac "
    >
      {cartCount}
    </span>
  )}

</button>

      <button onClick={handleLogout}
         className="rounded-2xl border border-zinc-700 p-3 hover:border-red-500">
        <LogOut className='text-white' size={20} />
      </button>

    </div>
  );
};

export default UserMenu;
