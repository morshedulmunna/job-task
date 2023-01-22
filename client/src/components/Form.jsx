import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { submitFormValidate } from "../schema/SubmitFormValidate";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiError } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Form = () => {
  const [optionsData, setOptionsData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [submitID, setSubmitID] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(submitFormValidate) });

  // Form Handler and submit form
  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/sectors", data)
      .then((response) => {
        if (response.data) {
          setShowResult(true);
          setSubmitID(response.data.result.insertedId);
          return toast.success("Successfully Submitted!!");
        }
      })
      .catch((error) => {
        if (error) {
          return toast.error("Something Wrong");
        }
      });
  };

  // Data Fetching Function
  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await axios.get("http://localhost:4000/sectors");
        setOptionsData(data);
      } catch (error) {
        console.error(error);
      }
    }
    getItems();
  }, []);

  // Get Data Specifiq Id

  // useEffect(() => {
  //   async function getItem() {
  //     try {
  //       const { data: item } = await axios.get(
  //         `http://localhost:4000/submitedData/${submitID}`
  //       );
  //       console.log(item);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getItem();
  // }, [submitID]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input Fill */}
        <div>
          <p className="font-semibold pb-2">Name</p>
          <input
            {...register("name")}
            className="border border-gray-300 text-[16px] font-normal outline-none  rounded-sm px-1 py-1 w-full"
            placeholder="Enter your name"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
          />
          {/* Handle Input Box Error */}
          <label className="label">
            {errors.name ? (
              <div className="flex items-center space-x-1 text-red-500">
                <BiError size={15} />
                <span className="text-[14px] text-red-500">
                  {errors.name.message}
                </span>
              </div>
            ) : null}
          </label>
        </div>

        {/* Sector Fill */}
        <div>
          <p className="font-semibold pb-2">Select Sector</p>
          <div className=" relative ">
            <select
              {...register("sectorType")}
              name="sectorType"
              id="sectorType"
              className="w-full rounded-sm bg-white border border-gray-300 py-1 outline-none cursor-pointer px-1 "
            >
              <option value="">Please select an sector</option>
              {optionsData[0]?.value?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-2">
              <MdKeyboardArrowDown />
            </div>
          </div>

          {/* Handle Error */}
          <label className="label">
            {errors.sectorType ? (
              <div className="flex items-center space-x-1 text-red-500">
                <BiError size={15} />
                <span className="text-[14px] text-red-500">
                  {errors.sectorType.message}
                </span>
              </div>
            ) : null}
          </label>
        </div>

        {/* checkbox */}
        <div>
          <div className="space-x-2">
            <input {...register("checked")} type="checkbox" />
            <span>Agree to terms</span>
          </div>

          {/* Handle Error Checked Box */}
          <label className="label">
            {errors.checked ? (
              <div className="flex items-center space-x-1 text-red-500">
                <BiError size={15} />
                <span className="text-[14px] text-red-500">
                  {errors.checked.message}
                </span>
              </div>
            ) : null}
          </label>
        </div>

        <input
          className="w-full mt-4 bg-blue-500 text-white cursor-pointer hover:bg-blue-400 duration-300 ease-in-out rounded-sm py-1"
          type="submit"
        />
      </form>
      {showResult && (
        <Link to="/result-show">
          <button className="bg-orange-500 mt-6 px-2 py-1 rounded-sm text-white">
            Show Result
          </button>
        </Link>
      )}
    </React.Fragment>
  );
};

export default Form;
