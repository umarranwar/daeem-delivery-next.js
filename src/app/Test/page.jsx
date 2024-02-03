import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <Header />
      <div className="relative w-full h-fit">
        <div className="absolute right-0 -z-10 w-full">
          <Image
            src="/images/halfplate.png"
            className="w-96 h-96"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex h-fit p-14 items-center justify-center w-full">
        <div className="w-full"></div>
        <div className="bg-blue-200 w-4/12 h-96"></div>
        <div className="bg-orange-200 w-4/12 h-96"></div>
      </div>
    </div>
  );
}
