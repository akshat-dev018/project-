import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { registerSchema } from "../schemas/registerSchemas";

import Input from "../common/Input";
import Button from "../common/Button";
import PasswordStrength from "../common/PasswordStrength";

import {
  User,
  Mail,
  Lock,
  ArrowLeft,
} from "lucide-react";

import { toast } from "react-toastify";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isValid,
    },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const password = watch("password", "");

  const navigate = useNavigate();

  const onSubmit = (data) => {
    
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
     
    localStorage.setItem("skymartUser",JSON.stringify(user));
    toast.success("Registration Successful!");
    navigate("/login");

  };

  return (
    <div
      className="
        w-full
        max-w-xl
        rounded-3xl
        border
        border-zinc-800
        bg-[#111111]
        p-10
        shadow-2xl
      "
    >
      {/* Back Button */}

      <Link
        to="/login"
        className="
          inline-flex
          items-center
          gap-2
          text-zinc-400
          hover:text-lime-400
          transition
        "
      >
        <ArrowLeft size={18} />
        Back to Sign In
      </Link>

      {/* Heading */}

      <div className="mt-6 mb-8">
        <h1 className="text-5xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-zinc-400">
          Join SkyMart and start shopping
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          icon={User}
          placeholder="Full Name"
          error={errors.name?.message}
          success={!errors.name}
          {...register("name")}
        />

        <Input
          icon={Mail}
          placeholder="Email Address"
          error={errors.email?.message}
          success={!errors.email}
          {...register("email")}
        />

        <Input
          type="password"
          icon={Lock}
          placeholder="Password"
          error={errors.password?.message}
          success={!errors.password}
          {...register("password")}
        />

        <PasswordStrength password={password} />

        <Input
          type="password"
          icon={Lock}
          placeholder="Confirm Password"
          error={errors.confirmPassword?.message}
          success={!errors.confirmPassword}
          {...register("confirmPassword")}
        />

        <Button
          type="submit"
          disabled={!isValid}
        >
          Create Account
        </Button>
      </form>

      {/* Bottom Link */}

      <p className="mt-8 text-center text-zinc-400">
        Already have an account?

        <Link
          to="/login"
          className="
            ml-2
            font-semibold
            text-lime-400
            hover:text-lime-300
            transition
          "
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;