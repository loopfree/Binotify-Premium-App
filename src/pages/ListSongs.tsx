import React, {FormEventHandler, useState, useEffect} from "react";
import UserTag from "../components/UserTag";
import Brand from "../components/Brand";
import SongCard from "../components/SongCard";
import Modal from "../components/Modal";
var token: string | undefined = document.cookie.split('; ')
                                               .find((row) => row.startsWith("token="))
                                               ?.split("=")[1];

function ListSongs() {
  const user = localStorage.getItem("username") as string;

  const [data, setData] = useState<any[]>([]);

  async function getSongsList() {
    const creatorId= localStorage.getItem('userId')

    const response = await fetch(`http://localhost:3000/premium_singer/${creatorId}/song/list`, {
      method: 'GET',
      headers: {
        'Authorization': token === undefined ? "" : token as string
      }
    });
    return await response.json();
  }

  useEffect(() => {
    getSongsList().then((results) => {
      if(results !== null)  {
        setData(results.songs);
        console.log(results);
      } else {
        setData([]);
      }
    });
  }, []);

  const onSubmit:FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formFields = form.elements;
    const titleInput = formFields[0] as HTMLInputElement;
    const audioInput = formFields[1] as HTMLInputElement;

    if (!titleInput.value || !audioInput.value) {
      alert('Please complete the song data');
    }

    else {
      const fd = new FormData();
      fd.append("title", titleInput.value);
      fd.append("audio", (audioInput.files as FileList)[0]);

      for (var key of fd.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      
      const resRaw = await fetch(`http://localhost:8080/server/endpoint/submit_song.php`, {
        method: 'POST',
        body: fd
      });

      var resJson = await resRaw.json();

      if (!resJson['path']) {
        alert('Failed to upload file');
      }
      else {
        const response = await fetch("http://localhost:3000/premium_singer/song/create", {
          method: 'POST',
          body: JSON.stringify({
            title: titleInput.value, 
            audioPath: resJson['path'],
            creatorId: localStorage.getItem('userId')
          }),
          headers: {
            'Authorization': token === undefined ? "" : token as string
          }
        });
        
        if (response.status == 201) {
          alert('Successfully submitted new song');
          window.location.reload();
        }
        else {
          alert('Failed to add song');
        }
        
      }
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative">
      <Modal type='Add song' title='' onEdit={onSubmit} isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* USER TAG */}
      <UserTag user={user} />
      <Brand />
      {/* ADD SONG */}
      <button className="fixed right-16 bottom-16 bg-green hover:bg-emerald-800 rounded-full p-2 duration-300" onClick={() => setIsOpen(true)}>
        <p className="h-12 w-12 text-center font-head text-[48px] leading-[48px]">+</p>
      </button>
      
      <h1 className="title">Premium Songs List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {data.map((song) => (
          <SongCard 
            key={song.id}
            img="https://picsum.photos/200/300"
            title={song.title}
            onDelete={() => {}}
            onEdit={onSubmit}
          />
        ))}
      </div>
    </main>
  )
}

export default ListSongs;
