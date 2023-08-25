"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Home = () => {
  const [play, setPlay] = useState(true);
  const router = useRouter();
  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      setPlay((prevPlay) => !prevPlay);
    } else if (event.key === "Enter") {
      router.push(play ? "/play" : "/inventory");
    }
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [play, mounted]);
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/assets/AriinBackGround.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-1/2 space-y-8 text-slate-200 rounded-xl border bg-slate-950 border-slate-600 p-16">
        <div className="flex justify-center">
          <Image
            alt=""
            width={346}
            height={65}
            src={"/assets/AltanNamar_title.png"}
          />
        </div>
        <p className="text-center">
          Алтан намрын хөтөлбөр 2023.09.06-2023.10.17 хооронд үргэлжилж байна.
          <br />
          Та урамшууллын эрхээрээ тоглоом тоглоод дараах бэлгүүдийн эзэн болох
          боломжтой.
        </p>
        <div className=" flex px-8 justify-center">
          <div className="w-full h-52 relative">
            <Image
              className="object-contain"
              alt=""
              fill
              src={"/assets/Gits.png"}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="space-y-4 grid">
            <button
              className={`px-16 transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl ${
                play
                  ? " bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
                  : "opacity-40 outline"
              }`}
            >
              Эхлэх
            </button>
            <button
              className={`px-16 transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl ${
                play
                  ? "opacity-40 outline"
                  : "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
              }`}
            >
              Буцах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
