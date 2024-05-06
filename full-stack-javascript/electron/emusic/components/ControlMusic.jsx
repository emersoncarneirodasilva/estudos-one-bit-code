import { useRef, useState } from "react";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PreviousIcon from "./icons/PreviousIcon";

export default function ControlMusic() {
  const audioRef = useRef(null);

  const [musicPlayList, setMusicPlayList] = useState([]);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);

  return (
    <div className="inline-flex flex-col items-center justify-center gap-4 px-8 w-96 h-14">
      <div className="inline-flex items-center justify-center gap-8">
        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="relative w-4 h-4">
            <PreviousIcon />
          </div>
        </div>
        <div
          id="play"
          className="flex w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="relative w-4 h-4">
            <PlayIcon />
          </div>
        </div>

        <audio>
          <source type="audio/mp3" />
        </audio>

        <div
          id="pause"
          className="hidden w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="relative w-4 h-4">
            <PauseIcon />
          </div>
        </div>

        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="relative w-4 h-4">
            <NextIcon />
          </div>
        </div>
      </div>

      <div className="inline-flex items-center self-stretch justify-start gap-8">
        <div className="text-xs font-semibold leading-tight tracking-wide text-center text-white">
          <p>"00:00"</p>
        </div>

        <div className="relative h-1 rounded-full w-96 bg-neutral-600">
          <div
            id="progress-bar"
            className="absolute w-1 h-1 transform -translate-y-1/2 bg-white rounded-full top-1/2"
          />
        </div>

        <div className="text-xs font-semibold leading-tight tracking-wide text-center text-white">
          "00:00"
        </div>
      </div>
    </div>
  );
}
