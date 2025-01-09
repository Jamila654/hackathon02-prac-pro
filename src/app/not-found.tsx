import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="intro p-6 lg:p-10">
        <h1 className="">
          Home / <span className="font-bold">404 Error</span>
        </h1>
      </div>

    
      <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6 lg:px-20">
        
        <section className="w-full flex items-center justify-center">
          <Image
            src={"/Frame 867.png"}
            alt="404 Error"
            width={829}
            height={179}
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl"
          />
        </section>

        
        <section className="w-full flex items-center justify-center">
          <Link href={"/"}>
            <Button
              variant={"ghost"}
              className="bg-[#db4543] text-white font-bold px-6 py-3 hover:bg-[#dc5d5b]"
            >
              Back to home page
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
