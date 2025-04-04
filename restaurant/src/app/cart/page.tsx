import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 ml-2">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="w-1/2">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <div className="w-1/4 text-right">
            <h2 className="font-bold">Rs370</h2>
          </div>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p2.png" alt="" width={100} height={100} />
          <div className="w-1/2">
            <h1 className="uppercase text-xl font-bold">BACON BURGER</h1>
            <span>Extra BBQ Sauce</span>
          </div>
          <div className="w-1/4 text-right">
            <h2 className="font-bold">Rs270</h2>
          </div>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p4.png" alt="" width={100} height={100} />
          <div className="w-1/2">
            <h1 className="uppercase text-xl font-bold">P.ARRABBIATA</h1>
            <span>Medium</span>
          </div>
          <div className="w-1/4 text-right">
            <h2 className="font-bold">Rs350</h2>
          </div>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">Rs990</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">Rs0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">Rs990</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;