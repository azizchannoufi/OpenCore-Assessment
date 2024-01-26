import React from 'react'

function Footer() {
  return (
<div className="justify-center items-stretch shadow-sm bg-cyan-800 flex flex-col px-16 py-12 max-md:px-5">
      <div className="justify-end items-stretch bg-white flex flex-col mt-12 mx-9 pt-12 px-20 rounded-[48px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5">
        <div className="justify-between items-stretch flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="items-stretch flex flex-col">
            <div className="text-slate-800 text-3xl font-bold leading-10 tracking-wide">
              Say Hello!
            </div>
            <div className="text-slate-600 text-2xl leading-9 tracking-wide">
              Atlaspremier@gmail.com
            </div>
            <div className="justify-between items-stretch flex gap-4 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/418b2d07b2ced097670d757464bd14d3da52ec79662a7fa055e720a6968b516c?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
                className="aspect-square object-contain object-center w-[53px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                alt=''
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e173d850e2ccd13f4945b943c5a2819d9cd87dd1ff45e1a512fd04af5faeef43?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
                className="aspect-[1.02] object-contain object-center w-[54px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                alt=''
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0c86e6cc6b7ea0eb5dbb6f573db3b38a5fc198abe79a0ac582dfd30844008f?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
                className="aspect-[1.02] object-contain object-center w-[54px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                alt=''
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed6d55908344b42276834880dbc6e8b5d5c66b852ef436ed275e7a6f1f723681?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
                className="aspect-square object-contain object-center w-[53px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                alt=''
              />
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 text-2xl text-slate-600 whitespace-nowrap tracking-wide self-start">
            <div className="items-stretch flex flex-col">
              <div className="leading-[150%]">Home</div>
              <div className="leading-[150%] mt-4">About us</div>
              <div className="leading-[150%] mt-5">Work</div>
            </div>
            <div className="items-stretch flex flex-col self-start">
              <div className="leading-[150%]">Services</div>
              <div className="leading-[150%] mt-4">Contact us</div>
            </div>
          </div>
        </div>
        <div className="justify-between items-stretch flex gap-5 text-2xl text-gray-500 tracking-wide mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="leading-[150%] grow shrink basis-auto">
            NewYorK, US
          </div>
          <div className="leading-[150%] ml-[65%] grow shrink basis-auto">
            AtlasPremier. All Rights Reserved
          </div>
        </div>
        <div className="text-cyan-800 text-center text-[202px] font-extrabold leading-[232.3px] tracking-tighter self-center mt-64 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Atlas Premier{" "}
        </div>
      </div>
    </div>  )
}

export default Footer