import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp, IoPaperPlaneOutline } from "react-icons/io5";

const BlogSection = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="max-w-[1200px]   md:flex justify-between  overflow-hidden mx-auto ">

    
      {/* Left Section - Image */}
     
      <div className="absolute top-0 left-0 h-full md:flex hidden  overflow-hidden">
        <Image
          src="/tiger.png"
          alt="Tiger"
          width={500}
          height={500}
          className="object-contain w-[2000px] h-auto"
        />
      </div>

     
      

      {/* Right Section - Content */}
      <div className="ml-auto  px-10 py-16 mt-12 font-header relative z-10 bg-white">
        <h1 className="md:text-6xl text-[30px] font-extrabold">Blog.</h1>

        {/* Tabs */}
        <div className="flex md:gap-6 gap-2 mt-6 md:text-[16px] text-[14px] font-normal leading-[20.08px]">
          {["Today", "This week", "This Month", "This Year"].map(
            (tab, index) => (
              <button
                key={index}
                className={`relative pb-2 ${
                  index === 0 ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                {tab}
                {index === 0 && (
                  <span className="block h-[2px] w-[51px] bg-lime-500 mt-1"></span>
                )}
              </button>
            )
          )}
        </div>

        {/* Blog Post */}
        <div className="mt-10">
          <p className="text-[#AADB59] font-normal text-[14px]">22.09.2022</p>
          <h2 className="md:text-[18px] text-[16px] font-normal leading-[22.59px] md:w-[539px] w-full md:h-[69px] h-auto mt-2">
            The best time to visit a{" "}
            <span className="underline">national park</span> is when
            temperatures are mild and queues are few. May is an ideal time to
            strap on the hiking boots and take on the icons of the{" "}
            <span className="underline">USA</span>.
          </h2>
          <p className=" text-[14px] font-normal leading-[17.59px] md:w-[539px] w-full md:h-[54px] mt-3">
            Marvel at towering sequoias in Yosemite National Park, gaze up at
            Half Dome, witness thunderous waterfalls and rest up for the next
            day of adventure in a cozy mountain lodge.
          </p>

          {/* Read More Button */}
          <button className="mt-6 px-6 text-[14px] leading-[17.57px] w-[209px] h-[41px] border-[2px] bg-[#AADB594D] bg-opacity-30 border-[#A9DB58] text-black font-bold rounded-full shadow-md">
            Read more
          </button>

          {/* 2nd Post */}
          <p className="text-[#AADB59] font-normal mt-12 text-[14px]">
            22.09.2022
          </p>
          <h2 className="md:text-[18px] text-[16px] font-normal leading-[22.59px] md:w-[539px] w-full md:h-[115px] h-auto mt-2">
            Spring is a lovely time to visit Turkey, when you can enjoy the best
            of what the country offers without sweltering in unbearable heat.
            This is arguably the best time to soak up the sun on the Aegean Sea
            in Kusadasi, visit the ancient city of Ephesus and navigate the
            warrens of the Grand Bazaar.
          </h2>
          <p className=" text-[14px] font-normal leading-[17.59px] md:w-[509px] w-full md:h-[54px] h-auto mt-3">
            With summer on the horizon, the air is just starting to get warm
            enough to enjoy a sailing trip off the islands of Kekova while not
            being too toasty to soak in Pamukkale’s hot springs.
          </p>

          {/* Read More Button */}
          <button className="mt-6 px-6 text-[14px] leading-[17.57px] w-[209px] h-[41px] border-[2px] bg-[#AADB594D] bg-opacity-30 border-[#A9DB58] text-black font-bold rounded-full shadow-md">
            Read more
          </button>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="absolute right-0 top-20 bg-lime-500 p-4 rounded-l-2xl flex flex-col gap-4 text-black z-10">
        <IoLogoWhatsapp size={15} />
        <FaInstagram size={15} />
        <IoPaperPlaneOutline size={15} />
        <FaFacebookF size={15} />
        <FaLinkedinIn size={15} />
      </div>

      <div className="absolute right-[-300px] bottom-2  p-4 rounded-l-2xl flex flex-col gap-4 text-black z-10">
        <Image
                    src="/zebra-spiral.png"
                    alt="Spiral"
                    width={500}
                    height={500}
                    className=" w-[410px] h-[197px]"
                  />
        
      </div>
      </div>
    </section>
  );
};

export default BlogSection;
