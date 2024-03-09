import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API } from "./API/API";

function Devices() {
  // code to get devices list which is requested for services
  const getAllDevicesListByShopkeeper = async () => {
    // axios.get(`${API}/`)
  };
  const [myValue, setMyValue] = useState("");

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem("shopkeeperId");

    if (storedValue) {
      // If a value exists in localStorage, set it in the state
      setMyValue(storedValue);
      // console.log(storedValue);
    }
  }, []);
  return (
    <div>
      <Header
        Children={
          <div className=" p-2">
            <div className="w-full h-screen  ">
              <h1 className="text-3xl font-bolder leading-tight text-gray-900">
                Devices
              </h1>
              <hr className="mt-2 mb-2" />
              <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                    {/* HEAD start */}
                    <thead>
                      <tr className="bg-[#d8d8d8] border-b border-gray-200 text-xs leading-4 text-gray-700 uppercase font-bold tracking-wider">
                        <th className="px-6 py-3 text-left font-semibold">
                          Shop Name
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Shopkeeper Name
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Phone No
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Id
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Country
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          State
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          City
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Report
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Delete
                        </th>
                      </tr>
                    </thead>

                    {/* BODY end */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        }
      ></Header>
    </div>
  );
}

export default Devices;
