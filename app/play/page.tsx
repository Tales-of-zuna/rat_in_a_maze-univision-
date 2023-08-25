"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Play = () => {
  const [play, setPlay] = useState(true);
  const router = useRouter();
  const [path, setPath] = useState(1);
  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setPlay((prevPlay) => !prevPlay);
    } else if (event.key === "Enter") {
      router.push(play ? "/play" : "/inventory");
    } else if (event.key === "BackSpace") {
      router.push("/");
    } else if (event.key === "ArrowUp") {
      if (path > 1) {
        setPath(path - 1);
      } else {
        setPath(4);
      }
    } else if (event.key === "ArrowDown") {
      if (path < 4) {
        setPath(path + 1);
      } else {
        setPath(1);
      }
    }
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [play, mounted, path]);
  return (
    <div
      className="h-screen p-16"
      style={{
        backgroundImage: `url('/assets/AriinBackGround.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="rounded-xl h-full text-white space-y-8 p-8">
        <div className=" flex items-center gap-4">
          <button
            className={`px-16 transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl ${
              !play
                ? "opacity-40 outline "
                : "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
            }`}
          >
            Буцах
          </button>
          <button
            className={`px-16 transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl ${
              play
                ? "opacity-40 outline"
                : "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
            }`}
          >
            Миний бэлгүүд
          </button>
          <p className="text-xl text-white font-bold">Path: {path}</p>
        </div>
        <div className="grid grid-cols-3 h-full gap-8">
          <div
            style={{
              backgroundImage: `url('/assets/GameBackGround.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="rounded-xl overflow-x-hidden flex items-center col-span-2 bg-slate-900 shadow-xl h-full"
          ></div>

          <div className="rounded-xl text-slate-300 text-xl col-span-1 font-semibold bg-slate-900 space-y-4 outline outline-slate-600 shadow-xl p-8 h-full">
            <p>Намрын урамшуулалт хөтөлбөр 2023</p>
            <p>Үргэлжлэх хугацаа 2023.09.06 - 2023.10.17</p>
            <p>
              Таны урамшууллын эрхийн тоо:
              <span className="text-slate-200 text-2xl font-bold">5</span>
            </p>
            <div className="relative h-96">
              <Image
                alt=""
                fill
                className="object-contain"
                src="/assets/GiftBundle_Belen.png"
              />
            </div>
            <p>
              Заавар: <br />
              Тоглох тутамд таны урамшууллын эрхээс 1ш хасагдах болно.
            </p>
            <div className="flex justify-center gap-16 items-center">
              <div className="flex items-center gap-4">
                <div className="rounded-full outline p-2">OK</div>
                <p>Эхлэх</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full outline p-2">OK</div>
                <p>Зам сонгох</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
