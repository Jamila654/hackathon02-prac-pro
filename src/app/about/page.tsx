import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full min-h-screen lg:p-20 p-10 flex flex-col justify-around gap-6 sm:gap-16">
      <div className="intro flex items-center">
        <h1>
          Home / <span className="font-bold">About</span>
        </h1>
      </div>

      <section className="first w-full flex flex-col lg:flex-row justify-between gap-10 items-center">
        <Image
          src="/Frame 869.png"
          alt=""
          width={522}
          height={336}
          className="w-full max-w-md lg:max-w-[522px] object-contain"
        />
        <Image
          src="/Side Image (1).png"
          alt=""
          width={705}
          height={609}
          className="w-full max-w-lg lg:max-w-[705px] object-contain"
        />
      </section>

      <section className="sec mt-10">
        <div className="second w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "/Frame 870.png",
            "/Frame 871.png",
            "/Frame 872.png",
            "/Frame 873.png",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt=""
              width={270}
              height={230}
              className="hover:bg-[#db4543] object-contain cursor-pointer w-full"
            />
          ))}
        </div>
      </section>

      <section className="third w-full mt-24">
        <Image
          src="/Frame 890.png"
          alt=""
          width={1230}
          height={564}
          className="w-full max-w-[1230px] object-contain"
        />
      </section>

      <section className="w-full flex items-center justify-center mt-24">
        <Image
          src="/Frame 702.png"
          alt=""
          width={943}
          height={161}
          className="w-full max-w-[943px] object-contain"
        />
      </section>
    </div>
  );
}
