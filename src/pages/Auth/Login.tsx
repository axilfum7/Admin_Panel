import { useState, type SubmitEvent } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../components";
import { instance } from "../../Hooks";
import toast, { Toaster } from "react-hot-toast";
import { LoadingImg } from "../../assets/images";

const Login = () => {
    const [loading, setLoading] = useState<boolean>(false)
        const navigate = useNavigate()
     function handleSubmit(evt:SubmitEvent<HTMLFormElement>){
       setLoading(true) 
       evt.preventDefault()
        const data = {
            email:evt.target.email.value,
            password:evt.target.password.value
        }
        instance().post("/auth/login", data).then(() => {
           toast.success("Muvaffaqiyatli kirdingiz")
           setTimeout(() => {
            navigate(PATH.home)
           },1500)
      }).catch(() => toast.error("Xatolik bor!")).finally(() => setLoading(false))
     }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#7f1d1d] to-[#c2410c] px-4">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="w-full max-w-md bg-[#0b1120]/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-wide">Sign in</h1>
          <p className="text-gray-400 text-sm mt-2">Email & password</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
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
          {/* <button
            type="button"
            className="w-full py-3 rounded-xl bg-linear-to-r from-[#7f1d1d] via-[#1e3a8a] to-[#ea580c] text-white font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300">
            SIGN IN
          </button> */}
                  <Button  title={"Sign in"} type="submit">
                      {loading ? <img className="mx-auto" src={LoadingImg} alt="Loading" width={28} height={28}/> : "Kirish"}
                  </Button>

        </form>

        {/* Bottom text */}
        <Link to={PATH.register} className="block mt-6 text-center">
          <p className="text-gray-400 text-sm">create account</p>
        </Link>

      </div>
    </div>
  );
};

export default Login;
