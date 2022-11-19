import React from "react";

function UserTag({ user }) {
  return (
    <div className="group fixed top-8 right-[5%] flex flex-col items-end">
      <p className="px-3 py-1 bg-white/25 backdrop-blur border border-white z-50 rounded-full">
        {user}
      </p>
      <button className="flex gap-2 py-3 px-1 items-center -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
        <lord-icon
          className="w-2 h-2"
          src="/lord-icon/logout-icon.json"
          trigger="hover"
          colors="primary:#f037a5"
          style={{ width: "20px", height: "20px" }}
        />
        <p className="text-fuschia text-sm">Log Out</p>
      </button>
    </div>
  )
}

export default UserTag;
