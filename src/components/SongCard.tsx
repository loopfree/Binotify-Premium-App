import React from "react";
import { useState } from "react";
import "../styles/song-card.css";
import { LordIcon } from "./LordIcon";

type Prop = {
  img: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  year: string;
  onDelete: () => void;
  onEdit: () => void;
};

const UserTag:React.FC<Prop> = ({ img, title, artist, year, genre, onDelete, onEdit }) => {
  return (
    <div className='group song-card'>
      <img 
        src={img}
        alt={title}
        className='song-image'
      />
      <div className='song-info'>
        <h2 className='song-title'>{title}</h2>
        <p className='song-desc'>{artist} • {year} • {genre}</p>
      </div>
      <div className='flex gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 duration-300 justify-end items-center absolute bottom-4 right-4'>
        <button className='bg-red-500 rounded-full p-2 w-10 h-10 hover:bg-red-800 duration-300' onClick={onDelete}>
          <LordIcon
            src='/lord-icon/delete-icon.json'
            trigger='hover'
            colors='primary:#ffffff'
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </button>
        <button className='bg-green rounded-full p-2 w-10 h-10 hover:bg-emerald-800 duration-300' onClick={onEdit}>
          <LordIcon
            src='/lord-icon/settings-icon.json'
            trigger='hover'
            colors='primary:#ffffff'
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </button>
      </div>
    </div>
  )
}

export default UserTag;