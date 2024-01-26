import React, { useEffect, useState } from 'react'
import {data} from '../../public/dummydata'
type Freelance={
    tags:String[];
    title: String;
    date:String;
    image:string;
    readTime:string
}
function Blog() {
    const [first, setFirst] = useState<Freelance|null>(null);
    const [posts,setPosts]=useState([] as Freelance[])
    console.log(posts);
    
    
    const getOne = () => {
        const firstOne = data.filter((item, index) => index === 0)[0]; // Use [0] to get the first element
        setFirst(firstOne);
      };
    const getposts=()=>{
        let filteredData = data.slice(1)
        setPosts(filteredData)
    }
    useEffect(()=>{
        getOne()
        getposts()
    },[])


  return (
    <div className="items-stretch flex flex-col">
    <div className="justify-between w-full px-5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
          <div className="text-slate-700 text-8xl font-bold leading-[110.4px] tracking-tighter max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Blogs
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex justify-between gap-5 self-stretch my-auto max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="justify-between items-stretch flex gap-5">
              <div className="text-cyan-800 text-xl font-medium leading-8 tracking-wide whitespace-nowrap justify-center items-stretch border-[color:var(--Navy-Blue-Primary,#294F74)] bg-slate-100 grow px-5 py-3.5 rounded-[877.535px] border-[1.755px] border-solid max-md:px-5">
                All Blogs
              </div>
              <div className="text-gray-400 text-xl font-medium leading-8 tracking-wide justify-center items-stretch bg-gray-50 grow px-6 py-3.5 rounded-[877.535px] max-md:px-5">
                Trends
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-5">
              <div className="text-gray-400 text-xl font-medium leading-8 tracking-wide justify-center items-stretch content-center flex-wrap bg-gray-50 grow px-5 py-3.5 rounded-[877.535px] max-md:px-5">
                Research
              </div>
              <div className="text-gray-400 text-xl font-medium leading-8 tracking-wide whitespace-nowrap justify-center items-stretch content-center flex-wrap bg-gray-50 grow px-5 py-3.5 rounded-[877.535px] max-md:px-5">
                In-house Knowledge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-[color:var(--White,#FFF)] bg-stone-50 w-full mt-20 pr-20 py-px rounded-[31.765px] border-[13.235px] border-solid max-md:max-w-full max-md:mt-10 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
        <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8f7ff846229759112c69b3eece9ec4e40c5435308ecdd8dea7d55c8d1673d6f?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
      className="aspect-[4.35] object-contain object-center w-full fill-[linear-gradient(180deg,rgba(218,218,218,0.00)_0%,#D6D6D6_100%)] overflow-hidden max-md:max-w-full"
      alt=''
    />
          <img
            loading="lazy"
            src={first?.image}
            className="aspect-[1.45] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
            alt=''
          />
            <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a83539b8a3fae700a9d55708d4fc359a993c685f6c010aa03ff30c7e45a503a?apiKey=354f2f8c1f9f40aca64d3ce2e19fda26&"
      className="aspect-[4.17] object-contain object-center w-full fill-[linear-gradient(180deg,rgba(218,218,218,0.00)_0%,#D6D6D6_100%)] overflow-hidden mt-4 max-md:max-w-full"
      alt=''
    />
        </div>
        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0 " >
          <div className="items-stretch flex flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="items-stretch flex justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="text-cyan-800 text-xl font-medium leading-8 tracking-wide grow whitespace-nowrap">
                {first?.tags[0]}
              </div>
              <div className="flex w-2 shrink-0 h-2 flex-col my-auto rounded-[50%]" />
              <div className="text-cyan-800 text-xl font-medium leading-8 tracking-wide grow whitespace-nowrap">
              {first?.tags[1]}
              </div>
            </div>
            <div className="text-slate-700 text-6xl font-medium leading-[80px] tracking-tight mt-7 max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
            {first?.title}
            </div>
            <div className="items-stretch flex justify-between gap-5 mt-32 pr-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
              <div className="text-cyan-800 text-xl font-medium leading-8 tracking-wide grow whitespace-nowrap">
              {first?.readTime}
              </div>
              <div className="flex w-2 shrink-0 h-[7px] flex-col my-auto rounded-[50%]" />
              <div className="text-cyan-800 text-xl font-medium leading-8 tracking-wide grow whitespace-nowrap">
              {first?.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-20 px-5 ml-[10%] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex flex-wrap max-md:flex-col max-md:items-stretch max-md:gap-0">
            {posts?.map((item,index)=>(
                <div key={index} className="bg-gray-50 flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0 mb-5">
                <div className="items-stretch self-stretch border-[color:var(--White,#FFF)] flex grow flex-col w-full pb-9 rounded-3xl border-[13.482px] border-solid max-md:max-w-full max-md:mt-10">
                <div className="bg-neutral-100 items-center flex flex-col pt-0.5 pb-9 px-16 rounded-xl max-md:max-w-full max-md:px-5">
                <img
                loading="lazy"
                src={item.image}
                className=" aspect-square object-contain object-center w-[284px] overflow-hidden max-w-full"
                alt=''
              />
                </div>
                <div className="items-stretch flex flex-col mt-11 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="items-stretch flex gap-2.5 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-gray-500 text-xl font-medium leading-8 tracking-wide grow shrink basis-auto">
                        {item.tags[0]}
                    </div>
                <div className="flex w-2 shrink-0 h-2 flex-col my-auto rounded-[50%]" />
                    <div className="text-gray-500 text-xl font-medium leading-8 tracking-wide grow shrink basis-auto">
                        {item.tags[1]}
                </div>
                </div>
                <div className="text-slate-700 text-4xl font-medium leading-[53px] tracking-wide mt-4 max-md:max-w-full">
                    {item.title}
              </div>
              <div className="items-stretch flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-500 text-xl font-medium leading-8 tracking-wide grow shrink basis-auto">
                  {item.readTime}
                </div>
                <div className="flex w-2 shrink-0 h-2 flex-col my-auto rounded-[50%]" />
                <div className="text-gray-500 text-xl font-medium leading-8 tracking-wide grow shrink basis-auto">
                    {item.date}
                </div>
              </div>
            </div>
            </div>
        </div>
            ))}
      </div>
    </div>
  </div>  )
}

export default Blog