import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

import PrevsIcon from "@/components/icons/PrevsIcon";
import NextIcon from "@/components/icons/NextIcon";

import { useState } from "react";


const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

export default () => {

  const [indexImg, setIndexImg] = useState(0);

  const handelClickNext = () => {
    indexImg === ARRAY_IMGS.length - 1 ? setIndexImg(0) : setIndexImg(indexImg + 1);
  };
  const handelClickPrev = () => {
    indexImg === 0 ? setIndexImg(ARRAY_IMGS.length -1) : setIndexImg(indexImg -1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="col-span-4 relative">
        <img src={ARRAY_IMGS[indexImg]} alt="" className="aspect-[16/12]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
          <button className="bg-white h-10 w-10 rounded-full grid place-items-center" onClick={handelClickPrev}>
            <PrevsIcon />
          </button>
          <button className="bg-white h-10 w-10 rounded-full grid place-items-center" onClick={handelClickNext}>
            <NextIcon />
          </button>
        </div>
      </div>
      <img src={imgProductSmall1} alt="" className="hidden md:block" />
      <img src={imgProductSmall2} alt="" className="hidden md:block" />
      <img src={imgProductSmall3} alt="" className="hidden md:block" />
      <img src={imgProductSmall4} alt="" className="hidden md:block" />
    </section>
  );
};