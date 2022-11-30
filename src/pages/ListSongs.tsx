import React, {FormEventHandler, useState} from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";
import SongCard from "../components/SongCard";
import Modal from "../components/Modal";

function ListSongs() {
  const user = "Artist1";
  const onEdit:FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault();
    alert('submitted');
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative">
      <Modal type='Add song' title='' onEdit={onEdit} isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* USER TAG */}
      <UserTag user={user} />
      <Brand />
      {/* ADD SONG */}
      <button className="fixed right-16 bottom-16 bg-green hover:bg-emerald-800 rounded-full p-2 duration-300" onClick={() => setIsOpen(true)}>
        <p className="h-12 w-12 text-center font-head text-[48px] leading-[48px]">+</p>
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
          onEdit={onEdit}
        />
      </div>
    </main>
  )
}

export default ListSongs;
