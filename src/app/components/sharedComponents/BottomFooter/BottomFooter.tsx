import Image from 'next/image'
import React from 'react'

function BottomFooter() {
  return (
    <div className="bg-[#525252]">
      <div className="container mx-auto lg:h-[100px] py-3">
        <div className="block lg:flex justify-between items-center gap-5">
          <div className="flex justify-center items-center lg:block">
            <Image
              src={"/logos/geekify-saas.png"}
              width={800}
              height={500}
              className="w-[250px] h-[55px]"
              alt="bottom footer logo"
            />
          </div>
          <div>
            <p className="text-white font-semibold text-center">We Accept</p>
            <div className="flex justify-center items-center gap-2 py-2">
              <Image
                src={"/logos/visa.png"}
                width={830}
                height={400}
                className="w-[55px] h-auto"
                alt="visa card"
              />
              <Image
                src={"/logos/master-card.png"}
                width={830}
                height={400}
                className="w-[55px] h-auto"
                alt="visa card"
              />
              <Image
                src={"/logos/american-express.png"}
                width={830}
                height={400}
                className="w-[55px] h-auto"
                alt="visa card"
              />
              <Image
                src={"/logos/after-pay.png"}
                width={830}
                height={400}
                className="w-[55px] h-auto"
                alt="visa card"
              />
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-center lg:text-right">
              Copyright © 2022-2023 Geekify®. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter