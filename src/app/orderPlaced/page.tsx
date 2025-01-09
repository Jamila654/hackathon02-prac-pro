'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const OrderSuccessPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-green-600">Order Placed Successfully!</h2>
        <p className="mt-4 text-lg text-gray-600">
          Thank you for your order. We will notify you when your items are shipped.
        </p>
      </div>

      <div className="mt-6">
        <Link href="/">
          <Button className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
