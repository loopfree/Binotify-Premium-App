import React from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";

function ListSongs() {
  const user = "Artist1";

  return (
    <main>
      {/* USER TAG */}
      <UserTag user={user} />
      <Brand />
      
      <h1 className="title">Premium Songs List</h1>
    </main>
  )
}

export default ListSongs;
