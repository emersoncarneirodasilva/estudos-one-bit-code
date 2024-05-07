import { useEffect, useRef, useState } from "react";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PreviousIcon from "./icons/PreviousIcon";
import { formatTime } from "@/utils/formatTime";

export default function ControlMusic() {
  const audioRef = useRef(null);

  const [musicPlayList, setMusicPlayList] = useState([]);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);

  useEffect(() => {
    window.electronAPI.ReciveFromElectron(
      "music-playable",
      async (event, music) => {
        setMusicPlayList([...musicPlayList, music]);

        if (!audioRef.current.currentSrc) {
          setAudio(`/musics/${music}`);
          audioRef.current.load();
          setCurrentTime(audioRef.current.currentTime);
        }
      }
    );
  }, [musicPlayList]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", () => {});
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const musicDuration = audioRef.current.duration;

      const interval = setInterval(() => {
        if (!audioRef.current.paused) {
          const time = audioRef.current.currentTime;

          setCurrentTime(time);

          const progressBar = document.getElementById("progress-bar");
          progressBar.style.width = `${(time / musicDuration) * 100}%`;
        }
      }, 1000 * 1);

      return () => clearInterval(interval);
    }
  }, [audioRef.current]);

  const handlePlay = () => {
    if (audio !== null) {
      audioRef.current.play();

      document.getElementById("play").classList.remove("flex");
      document.getElementById("play").classList.add("hidden");

      document.getElementById("pause").classList.add("flex");
      document.getElementById("pause").classList.remove("hidden");
    }
  };

  const handlePause = () => {
    if (audio !== null) {
      audioRef.current.pause();

      document.getElementById("pause").classList.remove("flex");
      document.getElementById("pause").classList.add("hidden");

      document.getElementById("play").classList.add("flex");
      document.getElementById("play").classList.remove("hidden");
    }
  };

  const handleProgressBarClick = (event) => {
    if (audioRef.current) {
      const progressBar = event.currentTarget;
      const clickPosition = event.nativeEvent.offsetX;
      const totalWidth = progressBar.clientWidth;
      const percent = clickPosition / totalWidth;
      const time = audioRef.current.duration * percent;

      audioRef.current.currentTime = time;
    }
  };

  const handlePrevious = () => {
    if (musicIndex > 0) {
      setMusicIndex(musicIndex - 1);
      setAudio(`musics/${musicPlayList[musicIndex - 1]}`);
      audioRef.current.load();
      audioRef.current.play();
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleNext = () => {
    if (musicIndex < musicPlayList.length - 1) {
      setMusicIndex(musicIndex + 1);
      setAudio(`musics/${musicPlayList[musicIndex + 1]}`);
      audioRef.current.load();
      audioRef.current.play();
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <div className="inline-flex flex-col items-center justify-center gap-4 px-8 w-96 h-14">
      <div className="inline-flex items-center justify-center gap-8">
        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="relative w-4 h-4">
            <PreviousIcon onClick={handlePrevious} />
          </div>
        </div>
        <div
          id="play"
          className="flex w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="relative w-4 h-4">
            <PlayIcon onClick={handlePlay} />
          </div>
        </div>

        <audio ref={audioRef} onEnded={handleNext}>
          <source src={audio} type="audio/mp3" />
        </audio>

        <div
          id="pause"
          className="hidden w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="relative w-4 h-4">
            <PauseIcon onClick={handlePause} />
          </div>
        </div>

        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="relative w-4 h-4">
            <NextIcon onClick={handleNext} />
          </div>
        </div>
      </div>

      <div className="inline-flex items-center self-stretch justify-start gap-8">
        <div className="text-xs font-semibold leading-tight tracking-wide text-center text-white">
          <p>{audioRef.current ? formatTime(duration) : "00:00"}</p>
        </div>

        <div
          className="relative h-1 rounded-full w-96 bg-neutral-600"
          onClick={handleProgressBarClick}
        >
          <div
            id="progress-bar"
            className="absolute w-1 h-1 transform -translate-y-1/2 bg-white rounded-full top-1/2"
            style={{
              left: `${
                audioRef.current
                  ? (audioRef.current.currentTime / audioRef.current.duration) *
                    100
                  : 0
              }%`,
            }}
          />
        </div>

        <div className="text-xs font-semibold leading-tight tracking-wide text-center text-white">
          <p>{audioRef.current ? formatTime(currentTime) : "00:00"}</p>
        </div>
      </div>
    </div>
  );
}
