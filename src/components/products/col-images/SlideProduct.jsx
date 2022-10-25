import { useRef, useState, useEffect } from "react";

import PrevsIcon from "@/components/icons/PrevsIcon";
import NextIcon from "@/components/icons/NextIcon";


export default ({ ARRAY_IMGS = [], ARRAY_IMG_SMALL = [], isOpenModal = false, handleCloseModal = null, handleOpenModal = () => { }, ...props }) => {

  const btnSlider = useRef(null);

  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden")
  }, [isOpenModal]);

  const handelClickNext = () => {
    indexImg === ARRAY_IMGS.length - 1 ? setIndexImg(0) : setIndexImg(indexImg + 1);
  };
  const handelClickPrev = () => {
    indexImg === 0 ? setIndexImg(ARRAY_IMGS.length - 1) : setIndexImg(indexImg - 1);
  };

  return (
    <section {...props}>
      {isOpenModal && <button onClick={handleCloseModal} className="md:col-span-4 text-right">Cerrar</button>}
      <div className="col-span-4 relative">
        <img src={ARRAY_IMGS[indexImg]} alt="" className="aspect-[16/13] w-full md:aspect-[16/18] rounded-md md:cursor-pointer" onClick={handleOpenModal} />
        <div ref={btnSlider} className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4 md:hidden">

          <button className="bg-white h-10 w-10 rounded-full grid place-items-center" onClick={handelClickPrev}>
            <PrevsIcon />
          </button>

          <button className="bg-white h-10 w-10 rounded-full grid place-items-center" onClick={handelClickNext}>
            <NextIcon />
          </button>
        </div>
      </div>

      {ARRAY_IMG_SMALL.map((small, i) => (
        <div key={i} onClick={() => {setIndexImg(i)}} className="relative rounded-md overflow-hidden cursor-pointer">
          <img src={small} alt="" className="hidden md:block md:rounded-md" />
          <span className={`hover:bg-[rgba(255,255,255,0.5)] h-full w-full absolute top-0 ${ i === indexImg && "bg-[rgba(255,255,255,0.5)]"}`}></span>
        </div>
      ))}
    </section>
  );
};