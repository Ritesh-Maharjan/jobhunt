import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../api/jobApi";

function Homepage() {
  const [jobs, setJobs] = useState([]);
  const searchInput = useRef(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        console.log(search)
      const data = await getAllJobs(search);
      //   paginate total jobs count = data.data.total
      console.log(data.data.jobs)
      setJobs(data.data.jobs);
    };
    fetchData();
  }, [search]);

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput.current.value);
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-[90vw] m-auto items-center">
        <form className="flex items-center w-full relative m-2">
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
        </form>
        <div className="grid xl:grid-cols-2 w-full">
          {jobs?.map((el) => {
            return (
              <Link to={`job/${el._id}`} key={el._id}>
                <div className=" flex items-center space-between border-2 m-2 p-2 rounded-2xl drop-shadow-lg hover:border-red-400">
                  <div className="flex flex-col justify-center items-center px-2 mr-6">
                    {el?.createdBy.avatar ? (
                      <img src={el?.createdBy.avatar} alt="Company logo" className="" />
                    ) : (
                      <img
                        src="https://imgs.search.brave.com/lQJ580-JievQJ14gi6KKJrwsK5Yln9K2ECOia6lOlBg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/WkxXRnFZcUlHNGxf/eUphcU91SlhnSGFI/YSZwaWQ9QXBp"
                        alt="Company logo"
                      />
                    )}
                    <h1 className=" lg:text-3xl">{el?.createdBy?.name}</h1>
                  </div>
                  <div className="text-xs lg:text-lg ml-4 w-full">
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Job Title: </span>
                      {el?.jobTitle}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Vacancies:</span>{" "}
                      {el?.vacancies}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Job Category:</span>
                      {el?.jobCategory}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Salary:</span> {el?.salary}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Deadline:</span>
                      {el?.deadline}
                    </h2>

                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Experience:</span>
                      {el?.experience}
                    </h2>
                    <h2 className="flex items-center">
                      <span className="mr-3 w-32">Education:</span>
                      {el?.education}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
