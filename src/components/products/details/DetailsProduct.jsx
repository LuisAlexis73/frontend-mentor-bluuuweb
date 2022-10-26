import CartIcon from "@/components/icons/CartIcon";
import { useCartDetails } from "@/context/useCartDetails";
import { useContext, useState } from "react";

export default ({ objetProduct }) => {

  const { addCartProducts } = useContext(useCartDetails);
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count === 0) return 
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    addCartProducts(
      {
        img: objetProduct.imagesSmall[0],
        id: objetProduct.id,
        discountPrice: (objetProduct.price * (1 - objetProduct.discount)).toFixed(2),
        title: objetProduct.title,
        quantity: (count === 0 ? 1 : count)
      }
    )
    setCount(0)
  };

  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="text-orange-primary font-bold mb-3 uppercase tracking-wide">{objetProduct.subtitle}</p>

      <h2 className="font-bold text-3xl mb-4">{objetProduct.title}</h2>

      <p className="text-dark-grayish-blue mb-5">
        {objetProduct.description}
      </p>

      <div className="grid gap-4 grid-cols-3 font-bold items-center mb-5 md:gap-1 md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">${(objetProduct.price * (1 - objetProduct.discount)).toFixed(2)}</span>
        <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">{objetProduct.discount * 100}%</span>
        <span className="text-right text-dark-grayish-blue text-lg line-through md:col-span-3 md:text-left">${(objetProduct.price).toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.7fr]">
        <div className="col-span-3 bg-gray-200 flex justify-between items-baseline py-2 pb-3 rounded-md px-5 md:col-span-1">

          <button className="text-3xl text-orange-primary" onClick={decrementCount}>-</button>

          <span className="text-xl">{count}</span>

          <button className="text-3xl text-orange-primary" onClick={() => setCount(count + 1)}>+</button>
        </div>

        <button onClick={handleAddToCart}
          className="col-span-3 bg-orange-primary text-white py-3 rounded-md flex items-center justify-center gap-x-4 hover:bg-orange-700 transition-all md:col-span-1">
          <CartIcon className="fill-white" fill="#fff" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};