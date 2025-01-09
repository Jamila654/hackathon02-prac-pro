import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative  bottom-0 bg-black text-white w-full h-16 md:h-96 md:p-4  flex items-center justify-around">
      <div className="first hidden relative md:flex md:flex-col font-bold">
        <ul className="">
          <li>
            <h1 className=" text-2xl -translate-y-16">Exclusive</h1>
          </li>
          <li>
            <h3 className="-translate-y-10">Subscribe</h3>
          </li>
          <li>
            <p className=" -translate-y-6">Get 10% off your first order</p>
          </li>
          <li className=" -translate-y-5">
            <div className="input absolute">
              <input
                title="email"
                type="email"
                placeholder="Enter your email"
                className=" lg:w-[210px] w-[175px] rounded-sm border-2 border-white bg-black p-2"
              />
              <Image
                src={"/icon-send.png"}
                width={32}
                height={32}
                alt="send"
                className="cursor-pointer filter brightness-0 invert absolute top-1 right-2"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="second">
        <ul className=" lg:flex hidden  lg:flex-col gap-4 mb-10">
          <li>
            <h1 className=" text-2xl ">Support</h1>
          </li>
          <li>
            <p className=" w-[180px]">
              111 Bijoy sarcni,Dhaka, DH 1515, Bangladesh.
            </p>
          </li>
          <li>
            <p>exclusive@gmail.com</p>
          </li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>
      <div className="third">
        <ul className=" hidden md:flex flex-col gap-4">
          <li>
            <h1 className=" text-2xl">Account</h1>
          </li>
          <li>
            <p className=" w-[180px]">
              <Link href={"/account"}>My Account</Link>
            </p>
          </li>
          <li>
            <Link href={"/sign-up"}>Login/Register</Link>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link href={"/wishlist"}>Wishlist</Link>
          </li>
          <li>
            <Link href={"/"}>Shop</Link>
          </li>
        </ul>
      </div>
      <div className="fifth">

      <ul className=" hidden md:flex md:flex-col gap-4 mb-10">
          <li>
            <h1 className=" text-2xl -translate-y-4">Quick Link</h1>
          </li>
          <li>
            <p className=" w-[180px]">
              Privacy Policy
            </p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
          <li>
          <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="sixth">
        <ul className=" hidden md:flex md:flex-col gap-4 mb-4">
            <li>
            <h1 className=" text-2xl">Download App</h1>
            </li>
            <li><p className=" text-gray-400 text-sm translate-y-3">Save $3 with App New User Only</p></li>
            <li className="flex items-center gap-2">
                <div className="barcode">
                    <Image src={'/Qr Code.png'} alt="qr" width={100} height={100}/>
                </div>
                <div className="store flex flex-col gap-1">
                <Image src={'/GooglePlay.png'} alt="qr" width={100} height={100} className=" h-12"/>
                <Image src={'/AppStore.png'} alt="qr" width={100} height={100} className="h-12"/>
                </div>
            </li>
            <li className=" flex items-center gap-4">
            <Image src={'/Icon-Facebook.png'} width={24} height={24} alt='fb'/>
            <Image src={'/Icon-Twitter.png'} width={24} height={24} alt='tw'/>
            <Image src={'/icon-instagram.png'} width={24} height={24} alt='ig'/>
            <Image src={'/Icon-Linkedin.png'} width={24} height={24} alt='ln'/>
            </li>
        </ul>
      </div>
      <p className=" text-gray-600 text-md absolute bottom-4 text-center md:left-[40%] text-nowrap">
        © Copyright Rimel 2022. All right reserved
      </p>
    </div>
    
  );
}
