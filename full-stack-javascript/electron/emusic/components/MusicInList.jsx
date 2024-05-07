import DeleteIcon from "./icons/DeleteIcon";
import EmpityAlbumIcon from "./icons/EmpityAlbumIcon";
import AddIcon from "./icons/addIcon";

export default function MusicInList({ music }) {
  const handleAddMusic = (music) => {
    window.electronAPI.SendToElectron("music-to-play", music);
  };

  const handleRemoveMusic = (music) => {
    window.electronAPI.SendToElectron("music-delete", music);
  };

  return (
    <div className="flex flex-row w-full gap-2 p-2 m-5 border border-gray-500">
      <EmpityAlbumIcon />

      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-white">Nome</h1>
          <h2 className="text-white">{music}</h2>
        </div>

        <div className="flex flex-row items-center justify-center h-full gap-5 cursor-pointer">
          <AddIcon onClick={() => handleAddMusic(music)} />
          <DeleteIcon onClick={() => handleRemoveMusic(music)} />
        </div>
      </div>
    </div>
  );
}
