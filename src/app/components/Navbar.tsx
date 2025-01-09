'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { IoMdMenu } from "react-icons/io";
  import { CiShoppingCart } from "react-icons/ci";
  import { useCart } from './CartContext'

export default function Navbar() {
  const { cartItems, getCartCount } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(getCartCount());
  }, [cartItems, getCartCount]); 

    const pathname = usePathname();
  const hideIcons = ['/sign-up', '/login'];
  return (
    <div className=' w-full h-20  flex items-center justify-around  border-b-2 border-[#b3aeae]'>
      <div className="title font-bold text-2xl">Exclusive</div>
      <div className="lists">
        <ol className='hidden sm:flex items-center gap-4 md:gap-10 font-bold'>
            <li className='hover:underline underline-offset-4 decoration-[#b3aeae]'><Link href={'/'}>Home</Link></li>
            <li className='hover:underline underline-offset-4 decoration-[#b3aeae]'><Link href={'/contact'}>Contact</Link></li>
            <li className='hover:underline underline-offset-4 decoration-[#b3aeae]'><Link href={'/about'}>About</Link></li>
            <li className='hover:underline underline-offset-4 decoration-[#b3aeae]'><Link href={'/sign-up'}>Sign Up</Link></li>
        </ol>
      </div>
      <div className="search relative">
        <div className="input">
            <input className=' bg-gray-200 p-2 w-[100px] sm:w-[150px] md:w-[220px] rounded-md' type="text" placeholder='What are you looking for?' />
        </div>
        <div className="search absolute top-1 right-0 cursor-pointer">
            <Image src={'/Component 2.png'} width={32} height={32} alt='search'/>
        </div>
      </div>
      {!hideIcons.includes(pathname) &&  (
      <div className="icons flex gap-2">
        <Link href={'/wishlist'}><Image src={'/Fill Heart.png'} width={32} height={32} alt='like'/></Link>
        <div className="cart w-[50px] relative">
          <Link href={'/cart'}><CiShoppingCart className="size-8 cursor-pointer" /></Link>
          {totalItems > 0 && (
            <div className="oval w-[16px] h-[16px] text-sm flex items-center justify-center bg-red-600 text-white rounded-full absolute top-0 right-4">
            {totalItems}
            </div>

          )}
          
        </div>
        
      </div>
      )}
      <div className="sheet_small sm:hidden">
      <Sheet>
      <SheetTrigger asChild>
       <h1><IoMdMenu className=" cursor-pointer hover:opacity-25 size-10"/></h1>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
          <div className="lists mt-16">
        <ol className='flex flex-col items-center gap-10 font-bold'>
            <li className='hover:underline underline-offset-4'><Link href={'/'}>Home</Link></li>
            <li className='hover:underline underline-offset-4'><Link href={'/contact'}>Contact</Link></li>
            <li className='hover:underline underline-offset-4'><Link href={'/about'}>About</Link></li>
            <li className='hover:underline underline-offset-4'><Link href={'/sign-up'}>Sign Up</Link></li>
        </ol>
      </div>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
      </div>
    </div>
  )
}
