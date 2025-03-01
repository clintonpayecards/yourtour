import { Search } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex md:flex-row flex-col items-center w-full mt-[94px] justify-between md:h-screen bg-white md:px-16 px-6 ">
      {/* Left Gray Circle */}
      <div className="absolute md:block hidden  top-[-50px] left-[-80px] w-48 h-48 bg-[#393C3E99]  rounded-full opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex-1 w-full  md:max-w-2xl">
        <h3 className="md:text-[27px] text-[20px] md:w-[431px]  h-[34px] md:ml-[213px] font-header font-[1000] text-[#272624">
          Plan your dream travel with us.
        </h3>
        <h1 className="md:text-[109px] text-[50px] md:w-[611px] md:ml-[86px] md:leading-[96px] font-[1000]">
          <span className="text-[#B2DA66]">Discover</span>{" "}
        </h1>
        <h1 className="md:text-[109px] text-[50px] md:w-[611px] text-[#B2DA66] md:ml-[86px] md:leading-[96px] font-[1000]">
          the
          <span className="text-black"> world</span>{" "}
        </h1>

        {/* Search Bar */}
        <div className="mt-10 md:ml-[86px] font-header  ">
          <div className="relative flex items-center justify-center bg-[#A9DB59] bg-opacity-30 border-[2px] border-[#A9DB58] px-6 py-4 rounded-full h-[70px] z-20 shadow-md md:w-[560px] w-full">
            {/* Centered Search Icon */}
            <Search
              className="absolute left-12 md:left-[40%] font-extrabold transform -translate-x-1/2 text-black"
              size={30}
            />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent font-extrabold leading-[33.89px] z-10 outline-none text-black placeholder-black md:ml-8 md:text-[27px] text-[19px] w-full text-center"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Images */}
      <div className="absolute right-0 bottom-0 md:overflow-hidden">
        {/* Large Gray Circle (Behind Zebra) */}
        <div className="absolute md:block hidden top-[100px] left-[932px] w-[386px] h-[386px] bg-[#393C3E99] rounded-full  -z-5"></div>

        {/* Spiral Image */}
        <div className="absolute md:block hidden top-[300px] left-[704px] -z-5">
          <Image
            src="/zebra-spiral.png"
            alt="Spiral"
            width={300}
            height={300}
            className=" w-[609px] h-[293px]"
          />
        </div>

        {/* Zebra Image */}
        <Image
          src="/zebra.png"
          alt="Zebra"
          width={1400}
          height={900}
          className="object-cover hidden  md:block md:w-[1400px]  w-[2000px] min-w-[100%] md:relative z-20"
        />
      </div>

      {/* Small Right Circle (Position Adjusted) */}
      <div className="absolute md:block hidden top-[20%] right-[400px] w-[80px] h-[80px] bg-[#393C3E99] rounded-full opacity-50"></div>
    </section>
  );
};

export default Hero;
