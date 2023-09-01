"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const PlayerMovement = (movements: any) => {
  const [start, setStart] = useState(false);
  const moves = movements;
  console.log(
    "🚀 ~ file: playerMovement.tsx:5 ~ PlayerMovement ~ moves:",
    moves
  );
  let transformClass = "";
  let i = 0;

  return (
    <div className="relative h-20 w-20">
      <Image
        alt=""
        className={`${transformClass} transition-all duration-1000 ease-in-out transform object-contain`}
        fill
        src={"/assets/rocket.png"}
      />
    </div>
  );
};
export default PlayerMovement;
