import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="relative w-full h-[368px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about-img.png" 
          alt="Who We Are"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative w-[1200px] flex flex-col mx-auto items-center text-center font-header text-black px-6">
        <h2 className="md:text-[40px] text-[30px] font-[1000]  leading-[121px]">Who we are?</h2>
        <p className="md:text-[18px] text-[14px] font-black text-center md:w-[540px] w-[100%]  leading-[22.59px] mt-3">
          We’ve been taking travellers around the globe and connecting people
          from all walks of life since 2010.
        </p>
        <p className="md:text-[18px] text-[14px] leading-[22.59px] font-semibold md:w-[651px] w-[100%] md:h-[92px] h-auto mt-4">
          That’s over 30 years of adventures, visiting new places and old
          friends, and countless, unforgettable moments. More than 10 years of
          changing the way people see the world on small group trips with
          like-minded explorers and a local leader to show you around.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
