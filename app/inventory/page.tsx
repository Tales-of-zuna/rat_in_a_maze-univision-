import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Inventory = () => {
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
          <div className="rounded-xl overflow-x-hidden flex items-center col-span-2 bg-slate-900 shadow-xl h-full"></div>

          <div className="rounded-xl text-slate-300 text-xl col-span-1 font-semibold bg-slate-900 space-y-4 outline outline-slate-600 shadow-xl p-8 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
