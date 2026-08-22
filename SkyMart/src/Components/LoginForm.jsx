import { Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";
import { toast } from "react-toastify";

const LoginForm = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.warn("No Account Found");
      return;
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {

      // Save logged-in user
      localStorage.setItem(
        "currentUser",
        JSON.stringify(storedUser)
      );

      toast.success("Login Successful");

      navigate("/home");

    } else {

      toast.warn("Invalid Credentials");

    }

  };


  return (

    <div className="w-full max-w-xl bg-[#111] rounded-3xl p-10 shadow-2xl">

      <h1 className="text-5xl font-bold text-white">
        Sign in
      </h1>

      <p className="text-zinc-400 mt-2 mb-8">
        Enter your credentials to continue
      </p>


      <form
        onSubmit={handleLogin}
        className="space-y-6"
      >

        <Input
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <Input
          icon={Lock}
          rightIcon={Eye}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <Button type="submit">

          <div className="flex justify-center items-center gap-3">

            Sign In

            <ArrowRight />

          </div>

        </Button>

      </form>


      <p className="text-center mt-8 text-zinc-400">

        Don't have an account?

        <Link
          to="/register"
          className="text-lime-400 ml-2 hover:underline"
        >
          Create one
        </Link>

      </p>

    </div>

  );
};

export default LoginForm;