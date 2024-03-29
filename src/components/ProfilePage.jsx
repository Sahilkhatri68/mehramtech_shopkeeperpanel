import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./styles/profilepage.css";
import axios from "axios";
import { API } from "./API/API";
function ProfilePage() {
  // const [havetoken, setHavetoken] = useState(false); //for handling shopkeeper login or logout
  const [idfromtoken, setIdfromtoken] = useState(); //state to get id from token
  const [fetchedshopkeeper, setFetchedshopkeeper] = useState();
  const [loading, setLoading] = useState(true);
  const checklogin = async () => {
    await axios
      .get(`${API}/shopkeeperlogin/check_have_token`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.token === true) {
          console.log(res.data.shopkeeper);
          setFetchedshopkeeper(res.data.shopkeeper);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checklogin();
  }, []);

  return (
    <div>
      <Header
        Children={
          <>
            <div className="bg-gray-100">
              <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                  <div className="w-full md:w-3/12 md:mx-2">
                    <div className="bg-white p-3 border-t-4 border-[#0F1131]">
                      <div className="image overflow-hidden">
                        <img
                          alt=""
                          className="h-auto w-full mx-auto"
                          src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                        />
                      </div>
                      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                        {loading === true ? (
                          <div>Loading...</div>
                        ) : (
                          <div>{fetchedshopkeeper.shopname}</div>
                        )}
                      </h1>
                      <h3 className="text-gray-600 font-lg text-semibold leading-6">
                        Owner at Her Company Inc.
                      </h3>
                      <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde
                        aspernatur non deserunt
                      </p>
                      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                          <span>Status</span>
                          <span className="ml-auto">
                            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                              Active
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center py-3">
                          <span>Member since</span>
                          <span className="ml-auto">Nov 07, 2016</span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-4" />
                    <div className="bg-white p-3 hover:shadow">
                      <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span className="text-green-500">
                          <svg
                            className="h-5 fill-current"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <span>Mobile Brands</span>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="text-center my-2">
                          <img
                            alt=""
                            className="h-16 w-16 rounded-full mx-auto"
                            src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                          />
                          <a className="text-main-color" href="#">
                            Samsung
                          </a>
                        </div>
                        <div className="text-center my-2">
                          <img
                            alt=""
                            className="h-16 w-16 rounded-full mx-auto"
                            src="https://avatars2.githubusercontent.com/u/24622175?s=60&v=4"
                          />
                          <a className="text-main-color" href="#">
                            Apple
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-9/12 mx-2 h-64">
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                      </div>
                      <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              First Name
                            </div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.shopkeeperName}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">
                              {" "}
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Gender
                            </div>
                            <div className="px-4 py-2">Male</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Contact No.
                            </div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.shopkeeperphoneno}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Shop Address
                            </div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.shopaddress}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Country
                            </div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.country}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">State</div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.state}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              District
                            </div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.district}</div>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">City</div>
                            <div className="px-4 py-2">
                              {loading === true ? (
                                <div>Loading...</div>
                              ) : (
                                <div>{fetchedshopkeeper.city}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-4" />
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                      <div className="grid grid-cols-2">
                        <div>
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="text-green-500">
                              <svg
                                className="h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Experience</span>
                          </div>
                          <ul className="list-inside space-y-2">
                            <li>
                              <div className="text-teal-600">
                                Owner at Her Company Inc.
                              </div>
                              <div className="text-gray-500 text-xs">
                                March 2020 - Now
                              </div>
                            </li>
                            <li>
                              <div className="text-teal-600">
                                Owner at Her Company Inc.
                              </div>
                              <div className="text-gray-500 text-xs">
                                March 2020 - Now
                              </div>
                            </li>
                            <li>
                              <div className="text-teal-600">
                                Owner at Her Company Inc.
                              </div>
                              <div className="text-gray-500 text-xs">
                                March 2020 - Now
                              </div>
                            </li>
                            <li>
                              <div className="text-teal-600">
                                Owner at Her Company Inc.
                              </div>
                              <div className="text-gray-500 text-xs">
                                March 2020 - Now
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="text-green-500">
                              <svg
                                className="h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" fill="#fff" />
                                <path
                                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                  fill="#fff"
                                />
                                <path
                                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            </span>
                            <span className="tracking-wide">Education</span>
                          </div>
                          <ul className="list-inside space-y-2">
                            <li>
                              <div className="text-teal-600">
                                Masters Degree in Oxford
                              </div>
                              <div className="text-gray-500 text-xs">
                                March 2020 - Now
                              </div>
                            </li>
                            <li>
                              <div className="text-teal-600">
                                Bachelors Degreen in LPU
                              </div>
                              <div className="text-gray-500 text-xs">
                                March 2020 - Now
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      ></Header>
    </div>
  );
}

export default ProfilePage;
