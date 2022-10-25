import CartIcon from "@/components/icons/CartIcon";

export default () => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="text-orange-primary font-bold mb-3 uppercase tracking-wide">Speaker Company</p>

      <h2 className="font-bold text-3xl mb-4">Fall Limited Edition Sneakers</h2>

      <p className="text-dark-grayish-blue mb-5">
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className="grid gap-4 grid-cols-3 font-bold items-center mb-5 md:gap-1 md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">$125.00</span>
        <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">50%</span>
        <span className="text-right text-dark-grayish-blue text-lg line-through md:col-span-3 md:text-left">$250.00</span>
      </div>

      <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.7fr]">
        <div className="col-span-3 bg-gray-200 flex justify-between items-baseline py-2 pb-3 rounded-md px-5 md:col-span-1">

          <button className="text-3xl text-orange-primary">-</button>

          <span className="text-xl">0</span>

          <button className="text-3xl text-orange-primary">+</button>
        </div>

        <button className="col-span-3 bg-orange-primary text-white py-3 rounded-md flex items-center justify-center gap-x-4 hover:bg-orange-700 transition-all md:col-span-1">
          <CartIcon className="fill-white" fill="#fff" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};