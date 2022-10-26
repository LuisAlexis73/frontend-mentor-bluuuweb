import { useContext } from 'react';

import { useCartDetails } from '@/context/useCartDetails';

import DeleteIcon from '@/components/icons/DeleteIcon';


export default () => {

  const { cartProducts, deleteCartProducts } = useContext(useCartDetails);

  return (
    <section className='absolute top-[125%] left-0 z-10 w-full md:max-w-lg md:left-full md:-translate-x-full md:top-full'>
      <div className='mx-4 rounded-md bg-white shadow-lg'>
        <h4 className='font-bold text-lg px-6 py-8'>Cart</h4>
        <hr />
        {
          cartProducts.length === 0 && (
            <p className='py-10 text-center'>Your cart is empty</p>
          )
        }
        {
          cartProducts.map(product => (
            <article key={product.id} className='grid grid-cols-[1fr_4fr_1fr] px-6 py-4 gap-6 items-center'>
              <img src={product.img} className='rounded-md' />
              <div>
                <h6>{product.subtitle}</h6>
                <p>
                  <span>${product.discountPrice} x {product.quantity}</span>{' '}
                  <span className='font-bold'>${(product.discountPrice * product.quantity).toFixed(2)}</span>
                </p>
              </div>
              <button className='ml-auto' onClick={() => deleteCartProducts(product.id)}>
                <DeleteIcon className='hover:fill-orange-primary' />
              </button>
            </article>
          ))
        }
        {
          cartProducts.length !== 0 && (
        <div className='px-6 pb-8'>
          <button className='py-4 w-full bg-orange-primary rounded-md text-white hover:bg-orange-700 transition-all'>Checkout</button>
        </div>
          )
        }
      </div>
    </section>
  );
};