"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";
import { useContext, useEffect, useState } from "react";
import { GiftContext } from "@/providers/giftsProvider";
import Cookies from "js-cookie";

const Home = () => {
  const [play, setPlay] = useState(false);
  const { ...setGifts } = useContext(GiftContext);

  const router = useRouter();
  const [giftsData, setGiftsData] = useState();
  const queryParameters = useSearchParams();
  const userSubId = queryParameters.get("subId");
  const getData = async () => {
    const res = await fetch("/api/getGifts?subId=" + userSubId);
    const data = await res.json();
    Cookies.set("gifts", JSON.stringify(data));
    Cookies.set("userId", userSubId + "");
    setPlay(true);
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
    getData();
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "Enter") {
        router.push("/play");
      }
    };

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
      <div className="w-1/2 space-y-8 text-slate-300 rounded-xl  p-16">
        <div className="flex justify-center">
          <Image
            alt=""
            width={346}
            height={65}
            src={"/assets/AltanNamar_title.png"}
          />
        </div>
        <p className=" text-center">
          Алтан намрын хөтөлбөр{" "}
          <span className="text-white font-bold">2023.09.06-2023.10.17</span>{" "}
          хооронд үргэлжилж байна.
          <br />
          Та урамшууллын эрхээрээ тоглоом тоглоод дараах бэлгүүдийн эзэн болох
          боломжтой.
        </p>
        <div className=" flex py-4 bg-slate-800  rounded-xl bg-opacity-30 px-8 justify-center">
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
