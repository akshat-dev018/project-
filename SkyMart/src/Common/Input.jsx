import React from "react";

const Input = ({
  label,
  icon: Icon,
  rightIcon: RightIcon,
  error,
  success,
  ...props
}) => {
  return (
    <div className="space-y-2">

      {label && (
        <label className="text-sm text-zinc-300">
          {label}
        </label>
      )}

      <div className="relative">

        {Icon && (
          <Icon
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />
        )}

        <input
          {...props}
          className={`
          w-full
          rounded-2xl
          border
          bg-zinc-900
          py-4
          pl-14
          pr-14
          text-white
          outline-none
          transition

          ${
            error
              ? "border-red-500"
              : success
              ? "border-lime-400"
              : "border-zinc-700"
          }

          focus:border-lime-400
          `}
        />

        {RightIcon && (
          <RightIcon
            size={20}
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500"
          />
        )}

      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;