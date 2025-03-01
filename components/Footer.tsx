import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#888A8B] text-black py-16 px-3 md:px-24">
      <div className="container md:mx-auto flex flex-col space-y-10">
        
        {/* Top Row: Logo & Subscription */}
        <div className="flex flex-col md:flex-row justify-between ">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col  md:items-start space-y-4 mb-6">
            <Image src="/logo-africa.png" alt="Your Tour Logo" width={180} height={120} />
            <h2 className="text-[40px] font-[1000] md:block hidden font-header text-[#AADB59] leading-[50.2px] text-center  h-[100px] md:text-left">
              dream <br /> travel.
            </h2>
          </div>

          {/* Email Subscription */}
          <div className="flex flex-col md:ml-[300px] w-full mt-6 space-y-3">
            <div className="flex md:flex-row flex-col space-y-3 items-center space-x-3">
              <input
                type="email"
                placeholder="Email"
                className="w-[363px] font-alt h-[46px] placeholder-black border-[1px] p-3 text-[19px] leading-[22.86px] border-black rounded-[40px] outline-none shadow-md"
              />
              <button className="bg-[#AADB59] leading-[24.79px] text-black md:w-[164px] w-full h-[46px] px-6 py-3 rounded-full text-[19px] font-subtext shadow-md">
                Subscribe
              </button>
            </div>
            <div className="flex items-start space-x-2">
              <input type="radio" className=" size-[30px] border-[1px] border-black" />
              <p className="text-[12px] md:leading-[16.56px] leading-[20px] md:w-[329px] w-full h-[51px] text-black font-spiral">
                I agree to be contacted by email or phone to receive information about fastcheckouts 
                product, offers, and events. I understand I can unsubscribe at any time.
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom Row: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-32 gap-20 text-start md:text-left">
          
          <div >
            <h3 className=" font-subtext text-[18px] leading-[33px]">OUR TOURS</h3>
            <ul className="mt-3 space-y-2 font-alt text-[16px] leading-[30px]">
              <li>Our New Tours</li>
              <li>Africa</li>
              <li>Europe</li>
              <li>America</li>
            </ul>
          </div>

          <div>
            <h3 className="font-subtext text-[18px] leading-[33px]">NEWS</h3>
            <ul className="mt-3 space-y-2 font-alt text-[16px] leading-[30px]">
              <li>New</li>
              <li>Blog News</li>
              <li>About</li>
              <li>America</li>
            </ul>
          </div>

          <div>
            <h3 className="font-subtext text-[18px] leading-[33px]">POPULAR</h3>
            <ul className="mt-3 space-y-2 font-alt text-[16px] leading-[30px]">
              <li>Europe</li>
              <li>Africa</li>
              <li>Canada</li>
            </ul>
          </div>

          <div>
            <h3 className="font-subtext text-[18px] leading-[33px]">BLOG</h3>
            <ul className="mt-3 space-y-2 font-alt text-[16px] leading-[30px]">
              <li>Photos</li>
              <li>Videos</li>
            </ul>
          </div>

        </div>

        <div className=" text-black w-full py-16 flex flex-col items-center space-y-6">
      {/* Contact Button */}
      <button className="bg-[#C4FF61] text-black w-[190px] h-[46px] font-subtext  px-8 py-3 rounded-full text-[19px] leading-[24.79px]">
        Contact us
      </button>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <div className="bg-[#C4FF61] p-3 rounded-full flex items-center justify-center w-12 h-12 font-bold text-black">
        <FaLinkedinIn />
        </div>
        <div className="bg-[#C4FF61] p-3 rounded-full flex items-center justify-center w-12 h-12">
        <FaTwitter />
        </div>
        <div className="bg-[#C4FF61] p-3 rounded-full flex items-center justify-center w-12 h-12">
        <FaFacebookF />
         
        </div>
      </div>

      {/* Terms and Policies */}
      <p className="text-[16px] py-8 text-black font-alt leading-[19.25px] text-center w-full md:w-[603px] h-[19px]">
        Terms & Conditions, Privacy Policy, Risk Disclosure, Cookie Policy, Regulatory Information
      </p>
    </div>

      </div>
    </footer>
  );
};

export default Footer;
