import Image from 'next/image'
import React from 'react'

function BottomFooter() {
  return (
    <div className="bg-[#525252]">
      <div className="container mx-auto py-2">
        <div className="block lg:flex justify-between items-center gap-5">
          <div className="flex justify-center items-center lg:block">
            <Image
              src={"/bottom-footer/Powered-by-sass.png"}
              width={200}
              height={100}
              className="w-auto h-auto"
              alt="bottom footer logo"
            />
          </div>
          <div>
            <p className="text-white font-semibold text-center">We Accept</p>
            <div className="flex justify-center items-center gap-2 py-2">
              <Image
                src={"/bottom-footer/visa.webp"}
                width={130}
                height={100}
                className="w-auto h-auto"
                alt="visa card"
              />
              <Image
                src={"/bottom-footer/master-card.webp"}
                width={130}
                height={100}
                className="w-auto h-auto"
                alt="visa card"
              />
              <Image
                src={"/bottom-footer/american-express.png"}
                width={130}
                height={100}
                className="w-auto h-auto"
                alt="visa card"
              />
              <Image
                src={"/bottom-footer/after-pay.webp"}
                width={130}
                height={100}
                className="w-auto h-auto"
                alt="visa card"
              />
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-center lg:text-right">
              Copyright © 2022-2023 Geeks CRS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter