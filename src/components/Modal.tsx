import React, { FormEventHandler } from "react";
import { useState } from "react";
import "../styles/song-card.css";
import { LordIcon } from "./LordIcon";

type Prop = {
  type: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  onEdit: FormEventHandler<HTMLFormElement>;
};

const Modal:React.FC<Prop> = ({ type, isOpen, setIsOpen, title, onEdit }) => {
  return (
    <div className={`${isOpen? 'block' : 'hidden'} fixed top-0 left-0 h-screen w-full bg-black/50 backdrop-blur flex items-center justify-center z-50`}>
      <div className="relative h-fit w-[50vw] bg-gray border-white/50 rounded-lg p-16">
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <LordIcon
            src="/lord-icon/logout-icon.json"
            trigger="hover"
            colors="primary:#FFFFFF"
            style={{ width: "2rem", height: "2rem" }}
          />
        </button>
        <h1 className="mb-8">{type}</h1>
        <form onSubmit={onEdit}>
          <div className="input-group">
            <label>Title</label>
            <input type="text" id="title-input" maxLength={64} defaultValue={title} placeholder='Song Title' />
          </div>
          <div className="input-group">
            <label>Audio File</label>
            <input type="file" id="audio-input" accept=".mp3,.m4a" />
          </div>
          <div className="input-group">
            <button 
              type="submit" 
              className="btnPrimary !rounded-md !text-lg !py-2 font-head" 
              id="button-submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal;
