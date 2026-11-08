import Image from "next/image";
import React from "react";
import RadioButton from "./RadioButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Form from "./Form";

const LoginOrSignUp = () => {
  return (
    <div className="min-h-screen min-w-screen ">
      <div className="bg-[#eeeaec] min-h-screen w-1/2 ">
        <Image
          src="/logo.png"
          alt="Login or Sign Up"
          width={200}
          height={100}
        />
        <div className="flex flex-col items-center justify-center gap-4 mt-8 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl font-bold text-[#050626]">Login</h1>
            <p className="text-[#57564D]">
              {" "}
              Welcome back! Please enter your details to continue
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <RadioButton>Admin</RadioButton>
            <RadioButton>HR</RadioButton>
            <RadioButton>Employee</RadioButton>
          </div >
         <div className="flex flex-col items-center justify-center gap-4  mt-4 w-100">
             <div className="flex items-center  bg-white p-4 rounded-2xl w-full  gap-2 mt-4 cursor-pointer">
            <FcGoogle size={20} />
            <button className="text-sm m-auto font-semibold text-[#050626] px-13">
              Sign in with Google
            </button>
          </div>
          <div className="flex items-center  bg-white p-4 rounded-2xl w-full  gap-2 mt-4 cursor-pointer">
            <FaGithub size={20} />
            <button className="text-sm m-auto font-semibold text-[#050626] px-13">
              Sign in with Github
            </button>
          </div>
         </div>
          <div className="flex justify-center mt-3 items-center gap-3 w-full">
            <div className="w-30 border border-t border-gray-300" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="w-30 border border-t border-gray-300" />
          </div>
          <Form />
            
        </div>
      </div>
    </div>
  );
};

export default LoginOrSignUp;
