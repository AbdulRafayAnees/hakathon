"use client"
import { useState } from 'react'
import { RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);


  return (
  <form className=" w-100 space-y-6">


      <div className="space-y-2">
        <div className="flex items-center">
          <label className="text-sm font-medium text-black">
            Email <span className="text-primary">*</span>
          </label>
        </div>

        <div className="flex items-center gap-3 h-14 px-4 rounded-2xl bg-white focus-within:ring-2 focus-within:ring-primary">
          <CiMail  size={20} className="text-black shrink-0" />

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-500"
            required
          />
        </div>
      </div>

      
      <div className="space-y-2">
        <div className="flex items-center">
          <label className="text-sm font-medium text-black">
            Password <span className="text-primary">*</span>
          </label>
        </div>

        <div className="flex items-center gap-3 h-14 px-4 rounded-2xl bg-white focus-within:ring-2 focus-within:ring-primary">
          <RiLockLine size={19} className="text-gray-500 shrink-0" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-400 "
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500"
          >
            {showPassword ? (
              <RiEyeOffLine size={19} />
            ) : (
              <RiEyeLine size={19} />
            )}
          </button>
        </div>
        <button
            type="button"
            className="text-sm text-primary cursor-pointer"
          >
            Forgot password?
          </button>
      </div>

      
      <button
        type="submit"
        className="w-full h-14 rounded-2xl bg-primary text-white text-base font-medium cursor-pointer hover:bg-secondary transition-colors"
      >
        Sign in
      </button>

    
      <p className="text-center text-sm text-black pt-1">
        Don't have an account?
        {" "}
        <a
          href="/signup"
          className="text-primary underline font-medium ml-1 cursor-pointer"
        >
          Sign Up
        </a>
      </p>

    </form>
  )
}

export default Form
