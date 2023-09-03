"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
const Home = () => {
  // let gifts = useContext(GiftsContext);
  // console.log("🚀 ~ file: page.tsx:7 ~ Home ~ gifts:", gifts);
  const queryParameters = useSearchParams();
  const [play, setPlay] = useState(false);
  const router = useRouter();
  const [userSubId, setUserSubId] = useState(queryParameters.get("subId"));

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      router.push("/play");
    }
  };
  const getData = async () => {
    const res = await fetch("/api/getGifts?subId=" + userSubId);
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      setPlay(true);
      return res.json();
    }
  };
  const loadingScreen = () => {
    if (play) {
      return (
        <button
          className={`px-16  transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl ${
            play
              ? " bg-gradient-to-tl animate-pulse opacity-100 from-pink-500 via-red-500 to-yellow-500"
              : "opacity-0"
          }`}
        >
          Эхлэх
        </button>
      );
    } else {
      return (
        <button className="animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 text-slate-300 w-24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
          </svg>
        </button>
      );
    }
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const gifts = getData();
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/assets/AriinBackGround.png)`,
        backgroundSize: "cover",
      }}
    >
      {/* border bg-slate-950 border-slate-600 */}
      <div className="w-1/2 space-y-8 text-slate-200 rounded-xl  p-16">
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
          <div className="space-y-4 grid">{loadingScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
