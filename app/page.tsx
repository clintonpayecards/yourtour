import WhoWeAre from "@/components/About";
import BlogSection from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularTours from "@/components/Popular";


const Page = () => {
  return (
    <div>
      <div className="relative bg-white">
        <div className=" ">
          <Header />
        </div>

        <div className=" flex items-center  justify-center mt-12">
          <Hero />
        </div>
      </div>
      <div className="bg-white  text-black">
        <PopularTours />
        <WhoWeAre />
        <BlogSection />
      </div>
      <div className="text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
