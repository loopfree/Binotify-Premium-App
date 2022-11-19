import React from "react";
import { LordIcon } from "./LordIcon";

type Prop = {
  user: string;
};

const UserTag:React.FC<Prop> = ({ user }) => {
  return (
    <div className="group fixed top-16 right-24 xl:right-[10%] flex flex-col items-end cursor-pointer">
      <p className="px-3 py-1 bg-white/25 backdrop-blur border border-white z-50 rounded-full">
        {user}
      </p>
      <button 
        className="flex gap-2 py-3 px-1 items-center -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <LordIcon
          src="/lord-icon/logout-icon.json"
          trigger="hover"
          colors="primary:#f037a5"
          style={{ width: "1.125rem", height: "1.125rem" }}
        />
        <p className="text-fuschia text-sm">Log Out</p>
      </button>
    </div>
  )
}

export default UserTag;
