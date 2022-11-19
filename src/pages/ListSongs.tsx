import React from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";
import SongCard from "../components/SongCard";

function ListSongs() {
  const user = "Artist1";

  return (
    <main className="relative">
      {/* USER TAG */}
      <UserTag user={user} />
      <Brand />
      {/* ADD SONG */}
      <button className="fixed right-0 bottom-0 bg-green rounded-full p-2">
        <p>+</p>
      </button>
      
      <h1 className="title">Premium Songs List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <SongCard 
          img="https://picsum.photos/200/300"
          title="The Box"
          artist="Roddy Ricch"
          album="Please Excuse Me For Being Antisocial"
          genre="Hip-Hop"
          year="2019"
          onDelete={() => {}}
          onEdit={() => {}}
        />
      </div>
    </main>
  )
}

export default ListSongs;
