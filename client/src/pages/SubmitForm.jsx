import React from "react";
import Form from "../components/Form";

const SubmitForm = () => {
  return (
    <div className=" flex justify-center items-center h-[100vh] lg:h-[80vh]">
      <div className="p-6 bg-white shadow mx-4 rounded-sm w-full md:w-[80%] lg:w-[50%] xl:w-[40%] ">
        <h1 className=" text-black mb-8 text-center font-medium text-lg">
          Please Enter Your Name & Pick The Sectors
        </h1>
        <div className="pb-8">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
