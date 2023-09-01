"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Inventory = () => {
  const gifts = [
    {
      name: "Huawei smart watch",
      count: 5,
      image: "/assets/huawei.webp",
      description:
        "While it works with both Android and iOS, the tracker is fairly light on smart features.",
    },
    {
      name: "Kindle 11",
      count: 2,
      image: "/assets/kindle.png",
      description:
        "A Kindle is a small hand-held electronic device for reading books, which has been developed by online retailer Amazon.",
    },
    {
      name: "Huawei smart watch 2",
      count: 5,
      image: "/assets/huawei.webp",
      description:
        "While it works with both Android and iOS, the tracker is fairly light on smart features.",
    },
    {
      name: "Kindle 12",
      count: 2,
      image: "/assets/kindle.png",
      description:
        "A Kindle is a small hand-held electronic device for reading books, which has been developed by online retailer Amazon.",
    },
  ];
  const [play, setPlay] = useState(false);
  const [selectedGift, setSelectedGift] = useState(0);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const desc = () => {
    return (
      <div className={`transition-all transform ease-in-out space-y-16 w-3/4`}>
        <p
          className={` ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }
                text-center duration-700 ease-in-out delay-500 transition-all transform  text-3xl text-white uppercase font-bold`}
        >
          {gifts[selectedGift].name}
        </p>
        <div
          className={`${
            mounted ? "translate-y-0 opacity-100" : "opacity-0 translate-y-4"
          } flex relative transition-all transform duration-700 ease-in-out delay-700 bg-gradient-radial from-slate-700 via-slate-950 to-slate-950 h-80 justify-center`}
        >
          <Image
            className="object-contain"
            fill
            src={gifts[selectedGift].image}
            alt=""
          />
        </div>
        <p
          className={`${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } text-center delay-500 transition-all duration-1000 ease-in-out transform text-lg font-medium`}
        >
          {gifts[selectedGift].description}
        </p>
      </div>
    );
  };

  useEffect(() => {
    setMounted(true);
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "ArrowLeft") {
        router.push("/play");
      } else if (event.key === "Enter") {
        router.push(play ? "/play" : "/inventory");
      } else if (event.key === "ArrowUp") {
        if (selectedGift > 0) {
          setSelectedGift(selectedGift - 1);
        } else {
          setSelectedGift(gifts.length - 1);
        }
      } else if (event.key === "ArrowDown") {
        if (selectedGift < gifts.length - 1) {
          setSelectedGift(selectedGift + 1);
        } else {
          setSelectedGift(0);
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedGift, router, play, gifts.length]);
  return (
    <div
      className={` ${
        mounted ? "opacity-100" : "opacity-50"
      } transition-all duration-300 h-screen p-16`}
      style={{
        backgroundImage: `url('/assets/AriinBackGround.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="rounded-xl h-full overflow-auto text-white flex-col flex gap-8 p-8">
        <div className=" flex items-center gap-4">
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
        </div>
        <div className="grid grid-cols-3 h-full space-x-8">
          <div className="rounded-3xl space-y-8 col-span-2 h-full bg-slate-950 shadow-xl p-16">
            <p
              className={`${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } text-3xl transition-all duration-700 ease-in-out transform font-bold delay-200 uppercase`}
            >
              Миний бэлгүүд
            </p>
            <div
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } delay-300 space-y-8 transition-all transform duration-700 ease-in-out`}
            >
              {gifts.map((gift) => (
                <div
                  key={gift.name}
                  className={` ${
                    selectedGift === gifts.indexOf(gift)
                      ? "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
                      : "opacity-50"
                  } p-1 rounded-2xl  transition-all transform duration-300 ease-in-out`}
                >
                  <div className="bg-slate-950 flex justify-between h-full w-full font-semibold rounded-xl p-8">
                    <p className="text-slate-300 text-2xl">{gift.name}</p>
                    <p className="text-slate-400 text-xl italic">
                      ( {gift.count} ширхэг )
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl flex items-center justify-center text-slate-300 text-xl col-span-1 font-semibold h-full bg-slate-950 space-y-4  shadow-xl p-8">
            {desc()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
