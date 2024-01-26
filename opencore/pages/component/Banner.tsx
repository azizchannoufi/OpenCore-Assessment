import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col items-stretch rounded-3xl mx-3">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/543860aca2bfb023419854289a17628a232d4351a5521de9dfedf95a29c25657?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
        className="aspect-[12.5] object-contain object-center w-full fill-[linear-gradient(0deg,#2F5478_0.02%,rgba(91,139,186,0.00)_99.98%)] overflow-hidden z-10 max-md:max-w-full"
        alt=''
      />
      <div className="self-center flex w-full max-w-[1476px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="justify-center items-stretch flex flex-col my-auto px-5 max-md:max-w-full">
          <div className="text-white text-6xl leading-[77px] tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            <span className="text-8xl leading-[115.19999694824219px] tracking-tighter">
              Transforming your{" "}
            </span>
            <span className="font-bold text-8xl leading-[110px] tracking-tighter">
              Ideas into reality
            </span>
          </div>
          <div className="text-gray-200 text-2xl font-medium leading-9 tracking-wide mt-5 max-md:max-w-full">
            Let's build something extraordinary together to captivate your
            audience.
          </div>
        </div>{" "}
        <div className="text-slate-100 text-center text-3xl font-medium leading-10 tracking-wide justify-center items-center border-[color:var(--Navy-Blue-100,#EDF2F5)] aspect-square pt-28 px-16 rounded-[500px] border-2 border-solid max-md:pt-10 max-md:px-5">
          Let’s Work Together!
        </div>
      </div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1319920700cfbd10b3e6819337973607a14633ae04ee70316b90fe461593857?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
        className="aspect-[16.67] object-contain object-center w-full fill-[linear-gradient(334deg,#2F5478_16.39%,rgba(91,139,186,0.00)_83.95%)] overflow-hidden mt-7 max-md:max-w-full"
        alt=''
      />
    </div>
  )
}

export default Banner