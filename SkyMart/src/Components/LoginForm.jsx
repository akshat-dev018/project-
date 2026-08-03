import { Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";

import Input from "../common/Input";
import Button from "../common/Button";
import { toast } from "react-toastify";

const LoginForm = () => {

  const navigate = useNavigate();

  const onSubmit = (data)=>{

    const storedUser = JSON.parse(localStorage.getItem("skymartUser"));

    if(!storedUser){
      toast.warn("No Account Found");
      return;
    }

    if(
       storedUser.email === data.email &&

       storedUser.password === data.password
    ){
      toast.success("Login Successful");
      localStorage.setItem("currentUser",JSON.stringify(storedUser));
      navigate("/home")
    }
    else{
      toast.warn("Invalid Credentials");
    }

  }

  return (
    <div
      className="w-full max-w-xl bg-[#111] rounded-3xl p-10 shadow-2xl ">

      <h1 className="text-5xl font-bold text-white">
        Sign in
      </h1>

      <p className="text-zinc-400 mt-2 mb-8">
        Enter your credentials to continue
      </p>

      <div className="space-y-6">

        <Input
          icon={Mail}
          type="email"
          placeholder="Email Address"
        />

        <Input
          icon={Lock}
          rightIcon={Eye}
          type="password"
          placeholder="Password"
        />

        <Button>

          <Link to={"/home"}
          className="flex justify-center items-center gap-3">

            Sign In

            <ArrowRight />

            {/* ye sb button ke children hai */}
          </Link>

        </Button>

      </div>

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