import React from 'react'

const Button = ({ children, type = "button",disabled = false, }) => {
  return (
    <button
      type={type}
      className={`
      group
      w-full
      rounded-2xl
      bg-lime-400
      py-4
      text-lg
      font-semibold
      text-black
      transition-all
      duration-300
      hover:bg-lime-300
      hover:scale-[1.02]
      active:scale-100
       ${
          disabled
            ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
            : "bg-lime-400 text-black hover:bg-lime-300 hover:scale-[1.02]"
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;