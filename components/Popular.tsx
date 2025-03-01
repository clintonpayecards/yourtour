import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { tourData } from "@/constants/index"


const PopularTours = () => {
  return (
    <section className="md:px-10 px-6 py-10">
      {/* Title */}
      <div className="flex items-center justify-center mb-6">
        <h2 className="md:text-[40px] text-[30px] leading-[121px] md:w-[278px] h-[121px] font-header font-[1000]">
          Popular tours
        </h2>
        <span className="text-3xl mt-2">
          <IoIosArrowDown className="ml-2" />
        </span>{" "}
        {/* Dropdown Icon */}
      </div>

      {/* Tour Cards Grid */}
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-y-6 gap-x-1">
        {tourData.map((tour, index) => (
          <div
            key={tour.id}
            className={`p-6 md:w-[355px] w-full md:h-[340px] md:ml-[37px] rounded-[10px] shadow-md border-[2px] ${
              tour.active ? "bg-[#A9DB57]" : "border-[#A9DB57]"
            }`}
          >
            {/* Image */}
            <div className="md:w-[307px] md:h-[142px] rounded-[10px] overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-[18px] leading-[22.59px]  h-[23px] font-extrabold font-header text-center mt-4">
              {tour.title}
            </h3>

            {/* Description */}
            <p className="text-center font-header md:text-[14px] text-[12px] font-[200] md:w-[300px] w-full h-[54px] leading-[17.57px] text-black mt-2">
              {tour.description}
            </p>

            {/* Button */}
            <div className="flex justify-center font-header font-bold  mt-4">
              <button
                className={`border-[2px] w-[205px] h-[41px] bg-[#AADB594D] bg-opacity-30 text-black text-[14px] leading-[17.57px] px-6 py-1 rounded-full font-bold hover:bg-[#B2DA66] 
            ${index % 3 === 1 ? "border-white" : "border-[#A9DB58]"}`}
              >
                Lets go!
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8 mb-16 flex justify-center">
        <button className="mt-6 bg-[#AADB594D] border-[2px] border-[#A9DB58] hover:bg-[#B2DA66] bg-opacity-30 mx-auto md:text-[27px] text-[20px] font-header font-extrabold text-black px-6 md:w-[459px] w-[100%] md:h-[70px] h-[50px]  rounded-full">
          See more
        </button>
      </div>
    </section>
  );
};

export default PopularTours;
