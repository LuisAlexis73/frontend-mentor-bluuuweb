import DetailsProduct from "@/components/products/details/DetailsProduct";
import Galleryproduct from "@/components/products/galery/Galleryproduct";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const ARRAY_IMG_SMALL = [imgProductSmall1, imgProductSmall2, imgProductSmall3, imgProductSmall4];

const objetProduct = {
  id: 1,
  title: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your pergect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everything the weather can offer.',
  subtitle: 'SNEAKER COMPANY',
  price: 250,
  discount: 0.5,
  imagesMain: ARRAY_IMGS,
  imagesSmall: ARRAY_IMG_SMALL
}

const MainProducts = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-88px-3px)] items-center md:mx-auto md:container">
      <Galleryproduct
        ARRAY_IMGS={objetProduct.imagesMain}
        ARRAY_IMG_SMALL={objetProduct.imagesSmall} />
      <DetailsProduct objetProduct={objetProduct} />
    </main>
  );
};

export default MainProducts;