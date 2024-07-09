// import React from 'react'
import img from "../../assets/servicesimg.png";
import img1 from "../../assets/serviceimg.png";
import apple from "../../assets/apple.png";

const ServicePackage = () => {
  return (
    <section className="lg:w-[90%] mx-[4%] my-[40px]">
      <article className="flex sm:flex-col items-center gap-[4rem] justify-center lg:gap-[150px]">
        {/* left */}
        <div className="my-[40px] border-5 border-[#B74C4C6B] rounded-sm ">
          <img
            src={img}
            alt=""
            className="h-[40vh] border-[30px]  border-[#B74C4C6B] "
          />
        </div>
        {/* right */}
        <div className="ml-[50px] flex-col gap-8">
          <div className="flex gap-4 lg:gap-[50px] leading-[3rem]">
            <h4 className="font-[700] text-[24px] space-x-9">
              Service Packages
            </h4>{" "}
            <a
              className="bg-[#B74C4C6B] text-white flex justify-center items-center text-[24px] leading-6  px-[10px]  font-bold  rounded-[10px] lg:w-[6vw]  text-center tracking-[3px]"
              href="/"
            >
              View
            </a>
          </div>
          <p className="py-10 font-semibold lg:w-[40vw] leading-[3rem]">
            {" "}
            <h6>Social Media is the way to go for your Brand</h6>
            <h6>Social Media Management</h6>
            <h6>Social Media Adverting</h6>
          </p>
        </div>
      </article>

      {/* second */}
      <article className="flex sm:flex-col justify-center items-center gap-[150px] my-[50px]">
        {/* left */}

        <div className="ml-[50px] flex-col gap-8">
          <div className="flex gap-4 lg:gap-[50px] leading-[3rem]">
            <h4 className="font-[700] text-[24px] space-x-9">
              Service Packages
            </h4>{" "}
            <a
              className="bg-[#B74C4C6B] text-white flex justify-center items-center text-[24px] leading-6  px-[10px]  font-bold  rounded-[10px] lg:w-[6vw]  text-center tracking-[3px]"
              href="/"
            >
              View
            </a>
          </div>
          <p className="py-10 font-semibold lg:w-[40vw] leading-[3rem]">
            <h6>Strategic Planning and Development.
            </h6>
            <h6>Developing a Social Mediat</h6>
            <h6>Content Creation and Management</h6>
          </p>
        </div>

        {/* right */}
        <div className="border-2 border-[#B74C4C6B] rounded-sm">
          <img
            src={img1}
            alt=""
            className="h-[40vh] border-[50px]  border-[#B74C4C6B] "
          />
        </div>
      </article>

      {/* bottom */}
      <article className="flex sm:flex-col items-center gap-[4rem] justify-center lg:gap-[150px]">
        {/* left */}
        <div className="my-[40px] border-5 border-[#B74C4C6B] rounded-sm ">
          <img
            src={apple}
            alt=""
            className="h-[40vh] border-[30px]  border-[#B74C4C6B] "
          />
        </div>
        {/* right */}
        <div className="ml-[50px] flex-col gap-8">
          <div className="flex gap-2 items-center lg:gap-[50px] leading-5 lg:leading-[3rem]">
            <h4 className="font-[700] text-[24px] space-x-9 ">
              Service Packages
            </h4>{" "}
            <a
              className="bg-[#B74C4C6B] text-white flex justify-center items-center text-[24px] leading-6  px-[10px] py-2  font-bold  rounded-[10px] lg:w-[6vw]  text-center tracking-[3px]"
              href="/"
            >
              View
            </a>
          </div>
          <p className="py-10 font-semibold lg:w-[40vw] leading-[3rem]">
            <h6>Developing Paid Social Media Compaigns.</h6>
            <h6>Campaign Budget Management</h6>
            <h6>Tracking and Analying Results</h6>
          </p>
        </div>
      </article>
    </section>
  );
};

export default ServicePackage;
