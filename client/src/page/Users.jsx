import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../api/userApi";

function Users() {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.auth.user);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllUser(token);
      setUsers(data.data);
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <div className="flex flex-col w-[90vw] m-auto items-center ">
        {/* <form className="flex items-center w-full relative m-2">
          <input
            type="text"
            name="search"
            ref={searchInput}
            placeholder="Search"
            className="border-2 w-full p-2 rounded-2xl drop-shadow-lg"
          />
          <button
            onClick={submitSearch}
            className="absolute right-0 p-2 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form> */}
        {users.length < 1 ? (
          <div className="flex justify-center items-center h-[90vh]">
            <h1 className="text-3xl font-black">No Users found</h1>
          </div>
        ) : (
          <div className="grid xl:grid-cols-2 w-full">
            {users?.map((el) => {
              return (
                <div className=" flex items-center space-between border-2 m-2 p-2 rounded-2xl drop-shadow-lg hover:border-red-400">
                  <div className="flex flex-col justify-center items-center px-2 mr-6 w-[20vw]">
                    {el?.avatar ? (
                      <img src={el?.avatar} alt="Company logo" className="" />
                    ) : (
                      <img
                        src="https://imgs.search.brave.com/lQJ580-JievQJ14gi6KKJrwsK5Yln9K2ECOia6lOlBg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/WkxXRnFZcUlHNGxf/eUphcU91SlhnSGFI/YSZwaWQ9QXBp"
                        alt="Company logo"
                      />
                    )}
                  </div>
                  <div className="text-xs lg:text-lg ml-4 w-full">
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Name: </span>
                      {el?.name}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Email: </span>
                      {el?.email}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Phone:</span>{" "}
                      {el?.phone}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Roles:</span>
                      {el?.roles}
                    </h2>
                    <button className="border-2 px-2 py-1 mt-5 bg-red-600">
                        Delete User
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;