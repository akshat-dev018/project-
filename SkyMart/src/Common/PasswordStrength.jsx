import React from "react";

const PasswordStrength = ({ password }) => {

  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const colors = [
    "bg-zinc-700",
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-400",
    "bg-lime-400",
  ];

  const labels = [
    "",
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ];

  return (
    <div>

      <div className="flex gap-2">

        {[1,2,3,4].map((bar)=>(
          <div
            key={bar}
            className={`h-2 flex-1 rounded ${
              bar<=score
                ? colors[score]
                : "bg-zinc-700"
            }`}
          />
        ))}

      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {labels[score]}
      </p>

    </div>
  );
};

export default PasswordStrength;