import MusicInList from "./MusicInList";
import { useEffect, useState } from "react";

export default function MusicList() {
  const [musicList, setMusicList] = useState([]);

  const fetchMusicList = async () => {
    try {
      await window.electronAPI.SendToElectron("music-get");
      await window.electronAPI.ReciveFromElectron(
        "music-list",
        (event, arg) => {
          setMusicList(arg);
        }
      );
    } catch (error) {
      console.error("Erro ao obter a lista de músicas:", error);
    }
  };

  useEffect(() => {
    fetchMusicList();
  }, []);

  return (
    <div className="w-11/12">
      <h2 className="ml-5 text-2xl text-white">Music List</h2>
      {musicList.length === 0 ? (
        <p className="text-gray-400">Empty</p>
      ) : (
        musicList.map((music, index) => {
          return <MusicInList key={index} music={music} />;
        })
      )}
    </div>
  );
}
