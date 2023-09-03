"use client";
import Game from "@/components/game";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Play = () => {
  const [play, setPlay] = useState(true);
  const [start, setStart] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState(1);
  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "ArrowRight") {
      router.push("/inventory");
    } else if (event.key === "Enter") {
      setStart(true);
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
  const userProfile = (pathNamba: number) => {
    if (path == pathNamba) {
      return (
        <div className="h-10 w-10 animate-bounce relative">
          <Image
            alt=""
            className="object-contain"
            fill
            src={"/assets/Astro.png"}
          />

          <style jsx>{`
            @keyframes bounce {
              0%,
              100% {
                transform: translateY(-10%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
              }
              50% {
                transform: none;
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
              }
            }
            .animate-bounce {
              animation: bounce 3s infinite;
            }
          `}</style>
        </div>
      );
    }
  };
  useEffect(() => {
    setMounted(true);
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [start, path]);
  return (
    <div
      className={`${
        mounted ? "opacity-100" : "opacity-50"
      } transition-all transform duration-700 ease-in-out h-screen p-16`}
      style={{
        backgroundImage: `url('/assets/AriinBackGround.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="rounded-xl h-full text-white flex-col flex gap-8 p-8">
        <div
          className={`${
            mounted ? " opacity-100" : " opacity-0"
          } flex items-center transition-all duration-700 ease-in-out gap-4`}
        >
          <button
            className={`px-16 transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl ${
              !play
                ? "opacity-40 outline "
                : "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
            }`}
          >
            Тоглох
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
            className={`rounded-xl overflow-x-hidden flex items-center transition-all relative delay-100 duration-700 ease-in-out transform col-span-2 bg-slate-900 shadow-xl h-full`}
          >
            <div
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700  ease-in-out transform delay-300`}
            >
              <div
                className={`${
                  start ? "-translate-x-1/2" : "translate-x-32"
                }  flex gap-8 items-center transition-all transform`}
              >
                <div className="flex flex-col gap-14 justify-center items-center">
                  <div
                    className={`${
                      path == 1
                        ? "bg-gradient-to-tl shadow-xl shadow-purple-300 from-pink-500 via-red-500 to-yellow-700"
                        : "bg-gray-500"
                    } rounded-xl transition-all transform duration-300 p-1`}
                  >
                    <div
                      className={`${
                        path == 1 ? "bg-purple-950" : "bg-slate-950"
                      } rounded-lg h-14 w-14 transition-all transform duration-300 p-2`}
                    >
                      {userProfile(1)}
                    </div>
                  </div>
                  <div
                    className={`${
                      path == 2
                        ? "bg-gradient-to-tl shadow-xl shadow-purple-300 from-pink-500 via-red-500 to-yellow-700"
                        : "bg-gray-500"
                    } rounded-xl transition-all transform duration-300 p-1`}
                  >
                    <div
                      className={`${
                        path == 2 ? "bg-purple-950" : "bg-slate-950"
                      } rounded-lg h-14 w-14 transition-all transform duration-300 p-2`}
                    >
                      {userProfile(2)}
                    </div>
                  </div>
                  <div
                    className={`${
                      path == 3
                        ? "bg-gradient-to-tl shadow-xl shadow-purple-300 from-pink-500 via-red-500 to-yellow-700"
                        : "bg-gray-500"
                    } rounded-xl transition-all transform duration-300 p-1`}
                  >
                    <div
                      className={`${
                        path == 3 ? "bg-purple-950" : "bg-slate-950"
                      } rounded-lg h-14 w-14 transition-all transform duration-300 p-2`}
                    >
                      {userProfile(3)}
                    </div>
                  </div>
                  <div
                    className={`${
                      path == 4
                        ? "bg-gradient-to-tl shadow-xl shadow-purple-300 from-pink-500 via-red-500 to-yellow-700"
                        : "bg-gray-500"
                    } rounded-xl transition-all transform duration-300 p-1`}
                  >
                    <div
                      className={`${
                        path == 4 ? "bg-purple-950" : "bg-slate-950"
                      } rounded-lg h-14 w-14 transition-all transform duration-300 p-2`}
                    >
                      {userProfile(4)}
                    </div>
                  </div>
                </div>

                <div>{Game(path)}</div>
              </div>
              <style jsx>
                {`
                  .mazeTransition {
                    transition-duration: 20000ms;
                  }
                `}
              </style>
            </div>
          </div>
          <div
            className={`transition-all rounded-xl text-slate-300 text-xl col-span-1 font-semibold bg-slate-950 space-y-4 border border-1 border-slate-700 shadow-xl p-8 h-full duration-700 ease-in-out transform delay-300`}
          >
            <p
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700 ease-in-out transform delay-300`}
            >
              Намрын урамшуулалт хөтөлбөр 2023
            </p>
            <p
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700 ease-in-out transform delay-500`}
            >
              Үргэлжлэх хугацаа 2023.09.06 - 2023.10.17
            </p>
            <p
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700 ease-in-out transform delay-700`}
            >
              Таны урамшууллын эрхийн тоо:
              <span className="text-slate-200 text-2xl font-bold">
                asdasdasd
              </span>
            </p>
            <div
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all relative h-96 duration-700 ease-in-out transform delay-1000`}
            >
              <Image
                alt=""
                fill
                className="object-contain"
                src="/assets/GiftBundle_Belen.png"
              />
            </div>
            <p
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700 ease-in-out transform delay-700`}
            >
              Заавар: <br />
              Тоглох тутамд таны урамшууллын эрхээс 1ш хасагдах болно.
            </p>
            <div
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } transition-all duration-700 ease-in-out flex justify-center gap-16 items-center transform delay-700`}
            >
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
