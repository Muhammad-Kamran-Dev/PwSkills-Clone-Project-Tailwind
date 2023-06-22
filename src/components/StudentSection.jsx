import React from "react";

const StudentSection = () => {
  return (
    <section className="flex flex-col  justify-between items-center my-20 max-w-[80%] mx-auto">
      <div className="flex flex-col gap-3 items-center">
        <h2 className=" text-2xl xl:text-5xl font-bold text-royal-blue-700 lg:text-4xl md:text-3xl">
          “Pure Hardwork, No Shortcuts!”
        </h2>
        <div className="border-orange-500 border-b-4 w-32 rounded-full"></div>
      </div>
      <div className="flex justify-around w-full items-center my-10 flex-wrap gap-16">
        <div className="flex flex-col items-center gap-4">
          <img
            className="h-44 w-44"
            src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
            alt="book icon"
          />
          <div className="flex flex-col gap-0 items-center">
            <h3 className="text-4xl font-bold ">600+</h3>
            <p className="text-2xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            className="h-44 w-44"
            src="https://pwskills.com/images/landing-page/statistics/student-icon.svg"
            alt="student icon"
          />
          <div className="flex flex-col gap-0 items-center">
            <h3 className="text-4xl font-bold ">7,00,000+</h3>
            <p className="text-2xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            className="h-44 w-44"
            src="https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg"
            alt="card icon"
          />
          <div className="flex flex-col gap-0 items-center">
            <h3 className="text-4xl font-bold ">10,000+</h3>
            <p className="text-2xl font-bold text-gray-500">
              Successful Transition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
