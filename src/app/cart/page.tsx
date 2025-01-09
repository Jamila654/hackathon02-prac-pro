'use client'
import React from 'react';
import { useCart } from '../components/CartContext';
import { urlFor } from '../lib/sanity';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, getTotalPrice, removeItemFromCart, incrementCart, decrementCart, clearCart } = useCart();

  const handleRemove = (productId: string) => {
    removeItemFromCart(productId);
  };

  const handleIncrement = (productId: string) => {
    incrementCart(productId);
  };

  const handleDecrement = (productId: string) => {
    decrementCart(productId);
  };
  const handlePlaceOrder = () => {
    clearCart();
  };

  return (
    <div className="w-full p-6 min-h-screen">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.productId} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src={urlFor(item.image).url()} alt={item.name} width={50} height={50} />
                <span className="ml-4">{item.name}</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleDecrement(item.productId)}>-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => handleIncrement(item.productId)}>+</button>
                <span className="ml-4">${item.price * item.quantity}</span>
                <button onClick={() => handleRemove(item.productId)} className="ml-4 text-red-600">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
          <div className='btns mt-2'>
            <Link href={'/orderPlaced'}>
            <Button onClick={handlePlaceOrder}>Place Order</Button>
            </Link>
        
      </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
