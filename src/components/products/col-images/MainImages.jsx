import { useState } from "react";
import SlideProduct from "@/components/products/col-images/SlideProduct";

export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    if(window.innerWidth > 768) return setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <SlideProduct
          ARRAY_IMGS={ARRAY_IMGS}
          ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
          isOpenModal={isOpenModal}
          className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:max-w-xl"
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};