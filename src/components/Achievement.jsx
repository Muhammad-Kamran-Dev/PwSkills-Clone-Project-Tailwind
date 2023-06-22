import React from "react";

const Achievement = () => {
  return (
    <section className="flex flex-col  justify-between items-center my-20 max-w-[80%] mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h2 className=" text-2xl xl:text-5xl font-bold text-royal-blue-700 lg:text-4xl md:text-3xl">
          Our Achiever's Work with
        </h2>
      </div>
      <div className="flex justify-around w-full items-center my-10 flex-wrap gap-12">
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/optimum.png"
            alt="optimum icon"
          />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/siemens.png"
            alt="siemens "
          />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/oracle.png"
            alt="oracle "
          />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/ibm.png"
            alt="ibm "
          />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/fork.png"
            alt="fork "
          />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/conduent.png"
            alt="conduent "
          />
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="h-auto w-32"
            src="https://pwskills.com/images/landing-page/companies/xperi.png"
            alt="xperi "
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
