import {type SubmitEvent, type FC } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { PATH, Loading } from "../../components";
import axios from "axios"
import { instance } from "../../Hooks";

const Register:FC = () => {
  function handleSubmit(evt:SubmitEvent<HTMLFormElement>){
  evt.preventDefault()
  const data = {
  name: evt.target.firstname.value,
  email: evt.target.email.value,
  password: evt.target.password.value,
  avatar: "https://c.files.bbci.co.uk/F8D4/production/_94000736_homunweb2.jpg"
}
// instance().post("/users").then(res =>{
//   alert("yaxsh")
// })
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#7f1d1d] to-[#c2410c] px-4">

      <div className="w-full max-w-md bg-[#0b1120]/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-wide">Create Account</h1>
          <p className="text-gray-400 text-sm mt-2">
            Fill in your information
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Name</label>
            <Input type="text" name="firstname" placeholder="Your full name"/>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email</label>
            <Input type="email" name="email" placeholder="example@gmail.com"/>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Password</label>
            <Input type="password" name="password" placeholder="********"/>
          </div>

          {/* Button */}
          <Button title="Sign up" type="submit" />
        </form>

        {/* Bottom text */}
        <div className="mt-6 text-center">
          Already have an account?
          <Link to={PATH.login} className="text-gray-400 text-sm cursor-pointer hover:text-[#f97316] transition">
             Sign in</Link>
        </div>

      </div>
    </div>
  );
};

export default Register;
