import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API } from "./API/API";

function Devices() {
  const [retrievedData, setRetrievedData] = useState();
  // const [retrievedDeviceRequestDate, setRetrievedDeviceRequestDate] =
  //   useState();
  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem("shopkeeperId");

    if (storedValue !== null || undefined) {
      // code to get devices list which is requested for services
      axios
        .get(
          `${API}/devicerequest/shopkeeper-requested-alldevices/${storedValue}`
        )
        .then((res) => {
          console.log(res.data);
          setRetrievedData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
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
                          Brand
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Model
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          IMEI
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Problem
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Resolve Status
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Delivery Status
                        </th>
                        <th className="px-6 py-3 text-left font-semibold">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {retrievedData &&
                        retrievedData.map((i) => {
                          return (
                            <tr key={i._id}>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.brand}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="flex items-center">
                                  {i.model}
                                  <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-gray-900"></div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.imei}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.problem}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.issueresolveStatus}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.productdeliveryStatus}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.date}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
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
