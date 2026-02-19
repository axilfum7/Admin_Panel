import type { FC, ReactNode } from "react"

interface ButtonType {
    title:string,
    type:"button" | "submit",
    extraClass?:string
    children?:ReactNode
}
const Button:FC<ButtonType> = ({title, type, extraClass,children}) => {
  return (
  <button
            type={type}
            className={`${extraClass} w-full py-3 rounded-xl bg-linear-to-r from-[#7f1d1d] via-[#1e3a8a] to-[#ea580c] text-white font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300`}>
            {children ??  title}
          </button>
          )
}

export default Button