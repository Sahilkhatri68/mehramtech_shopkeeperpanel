import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { API } from "./API/API";
// import { ToastContainer, toast } from "react-toastify";
import { FaShop } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

import Select from "react-select";

function Body({ Children }) {
  const [totalshops, setTotalshops] = useState(); //code to get total shops

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectproblem, setSelectproblem] = useState(null);
  const [imei, setImei] = useState("");
  const [productdeliveryStatus, setProductdeliveryStatus] = useState(null);
  const brandOptions = [
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    // Add more brand options as needed
  ];

  const modelOptions = {
    apple: [
      { value: "iphone11", label: "iPhone 11" },
      { value: "iphone11pro", label: "iPhone 11 Pro" },
      { value: "iphone11promax", label: "iPhone 11 Pro Max" },
      { value: "iphone12", label: "iPhone 12" },
      // { value: "iphone12", label: "iPhone 12" },
      // Add more iPhone models as needed
    ],
    samsung: [
      { value: "Galaxys 21", label: "Galaxy S21" },
      { value: "Galaxynote20", label: "Galaxy Note 20" },
      // Add more Samsung models as needed
    ],
    // Add similar blocks for other brands as needed
  };

  const problemOptions = [
    {
      value: "Software Problem",
      label: "Software Problem",
    },
    {
      value: "Hardware Problem",
      label: "Hardware Problem",
    },
  ];

  const deliveryOptions = [
    {
      value: "Pick Up",
      label: "Pick Up",
    },
    {
      value: "Drop Off",
      label: "Drop Off",
    },
  ];
  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
    setSelectedModel(null); // Reset model when brand changes
  };

  const handleModelChange = (selectedOption) => {
    setSelectedModel(selectedOption);
  };

  const handleProblemChange = (selectedOption) => {
    setSelectproblem(selectedOption);
  };

  const handleDeliveryStatus = (productdeliveryStatus) => {
    setProductdeliveryStatus(productdeliveryStatus);
  };

  // code for fetching all students
  const handletotalshops = () => {
    axios
      .get(`${API}/shopkeepers`)
      .then((res) => {
        setTotalshops(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handletotalshops();
  }, []);

  const storedShopkeeperId = localStorage.getItem("shopkeeperId");

  // code to post data into db
  const handleSubmit = () => {
    // Make sure required fields are filled
    if (!selectedBrand || !selectedModel || !selectproblem || !imei) {
      // Handle error, maybe show a message to the user
      alert("Please fill in all required fields");
      return;
    }

    // Prepare data to be sent to the server
    const requestData = {
      brand: selectedBrand.value,
      model: selectedModel.value,
      problem: selectproblem.value,
      imei: imei,
      requestGenerator: storedShopkeeperId,
      productdeliveryStatus: productdeliveryStatus.value,
    };

    console.log(requestData);
    // Make the HTTP request to the backend endpoint
    axios
      .post(`${API}/devicerequest`, requestData)
      .then((response) => {
        // Handle success, maybe show a success message
        console.log("Request submitted successfully", response.data);
        if ((response.data.status = "success")) {
          alert("Request Submitted");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        // Handle error, maybe show an error message
        console.error("Error submitting request", error);
      });
  };
  return (
    <div>
      <Header
        Children={
          <div>
            <div className="my-6 mx-auto px-4 md:px-12">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {/* Column */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                  {/* Article */}
                  <article className="p-2 overflow-hidden rounded-lg shadow-lg">
                    <div className="flex items-center ">
                      <div className="w-[60px] bg-red-100 p-2 rounded">
                        <FaShop size={40} className="w-full" />
                      </div>
                      <div className="md:mx-4 mx-2 font-semibold text-[20px]">
                        Total Jobs : 10
                      </div>
                    </div>
                  </article>
                  {/* END Article */}
                </div>
                {/* Column */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                  {/* Article */}
                  <article className="p-2 overflow-hidden rounded-lg shadow-lg">
                    <div className="flex items-center ">
                      <div className="w-[60px] bg-red-100 p-2 rounded">
                        <MdWork size={40} className="w-full" />
                      </div>
                      <div className="md:mx-4 mx-2 font-semibold text-[20px]">
                        Total Request : {totalshops}
                      </div>
                    </div>
                  </article>
                  {/* END Article */}
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                  {/* Article */}
                  <article className="p-2 overflow-hidden rounded-lg shadow-lg">
                    <div className="flex items-center ">
                      <div className="w-[60px] bg-red-100 p-2 rounded">
                        <MdPlace size={40} className="w-full" />
                      </div>
                      <div className="md:mx-4 mx-2 font-semibold text-[20px]">
                        Pending : 0
                      </div>
                    </div>
                  </article>
                  {/* END Article */}
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                  {/* Article */}
                  <article className="p-2 overflow-hidden rounded-lg shadow-lg">
                    <div className="flex items-center ">
                      <div className="w-[60px] bg-red-100 p-2 rounded">
                        <BiWorld size={40} className="w-full" />
                      </div>
                      <div className="md:mx-4 mx-2 font-semibold text-[20px]">
                        Completed : 0
                      </div>
                    </div>
                  </article>
                  {/* END Article */}
                </div>
                {/* END Column */}
              </div>
              <div className="mt-4 md:p-4 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="text-2xl font-semibold">New Request</div>
                <hr className="mt-2" />
                <div className="flex items-center">
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px] ">
                    Select Brand
                  </div>
                  <div className=" md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    <Select
                      className="w-full"
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      options={brandOptions}
                      placeholder="Select a Brand"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    Select Model
                  </div>
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    <Select
                      className="w-full"
                      value={selectedModel}
                      onChange={handleModelChange}
                      options={
                        selectedBrand ? modelOptions[selectedBrand.value] : []
                      }
                      isDisabled={!selectedBrand}
                      placeholder="Select a Model"
                    />{" "}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    Select Problem
                  </div>
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    <Select
                      className="w-full"
                      value={selectproblem}
                      onChange={handleProblemChange}
                      options={problemOptions}
                      placeholder="Select a Problem"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    Enter IMEI
                  </div>
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    <input
                      name={imei}
                      onChange={(e) => setImei(e.target.value)}
                      className="w-full p-2 border-2"
                      placeholder="Enter Device IMEI"
                    ></input>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    Select Delivery
                  </div>
                  <div className="md:w-1/2 w-1/2 md:m-4 m-[3px]">
                    <Select
                      className="w-full"
                      value={productdeliveryStatus}
                      onChange={handleDeliveryStatus}
                      options={deliveryOptions}
                      placeholder="Choose Delivery Option"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleSubmit()}
                    className="p-2 w-full bg-[#3C76D2] text-white font-semibold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      ></Header>
    </div>
  );
}

export default Body;
