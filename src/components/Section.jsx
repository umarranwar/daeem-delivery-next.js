import React from "react";
import Image from "next/image";

function Section() {
  return (
    <div className="flex bg-orange-100 bg-opacity-50 flex-col items-center">
      {/* <div className="flex gap-3 items-center flex-row">
        <div>
          <Image
            src="/images/AlBAaik.jpeg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/images/McDonald's.png"
            width={250}
            height={250}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/images/Starbucks.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/images/Herfy_logo.png"
            width={200}
            height={200}
            alt="Pict2re of the author"
          />
        </div>
        <div>
          <Image
            src="/images/KFC_logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src="/images/AlBAaik.jpeg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div> */}
      <div className="text-orange-400 w-72 font-sans mt-12 text-center">
        <h3 className="text-lg">
          Download the app on your mobile and enjoy ordering now
        </h3>
        <div className="mt-12 mb-10 flex flex-row">
          <div className="mr-5 hover:cursor-pointer">
            <img src="/images/playstore.png" alt="" width={150} />
          </div>
          <div className="hover:cursor-pointer">
            <img src="/images/appstore.png" alt="" width={150} />
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex flex-row mb-10">
          <img src="/images/app1.png" width={200} alt="icon" />
        </div>
      </div> */}
    </div>
  );
}

export default Section;
