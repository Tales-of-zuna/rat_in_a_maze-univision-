import Image from "next/image";
import Cookies from "js-cookie";
const GiftRecieve = () => {
  const image = Cookies.get("openedGift");
  return (
    <div className="h-screen absolute top-0 w-screen left-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center">
      <div className=" w-1/2 py-16 px-32 rounded-xl outline-slate-800 outline bg-slate-950 space-y-8">
        <div className=" flex justify-center relative h-16">
          <Image
            src="/assets/TaBelegHojloo.png"
            className="object-contain"
            fill
            alt="gift"
          />
        </div>
        <div className="flex justify-center ">
          <p className="text-center text-xl ">
            Баяр хүргэе! Та урамшуулалт хөтөлбөрт амжилттай оролцож бэлгийн эзэн
            боллоо. Та бэлгээ 2023.11.01-ний дотор Central Tower-н 14 давхраас
            ирж авна уу.
          </p>
        </div>
        <div className="relative h-56">
          <Image
            src={`/2023_09/images/${image != "0" ? image : 1006}.png`}
            className="object-contain"
            fill
            alt="gift"
          />
        </div>
        <div className="flex justify-center">
          <button className="px-16 transition-all transform duration-300 ease-in-out font-semibold uppercase py-2 rounded-xl bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftRecieve;
