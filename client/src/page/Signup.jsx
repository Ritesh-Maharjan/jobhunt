import React from "react";

function Signup() {
  return (
    <div>
      <div className="flex justify-center h-[90vh]">
        <form className="w-[90vw] border-2 border-black rounded-lg shadow-2xl p-6 mt-2 m-auto">
          <h1 className="font-bold text-3xl my-4">Sign up</h1>

          <div className="my-4">
            <label className="block text-gray-500 font-bold">Name:</label>
            <input
              className="border-2 w-full p-2  "
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="my-4">
            <label className="block text-gray-500 font-bold">Email:</label>
            <input
              className="border-2 w-full p-2  "
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="my-4">
            <label className="block text-gray-500 font-bold">Password:</label>
            <input
              className="border-2 w-full p-2  "
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="my-4">
            <label className="block text-gray-500 font-bold">Phone:</label>
            <input
              className="border-2 w-full p-2  "
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              onWheel={(e) => e.target.blur()}
            />
          </div>

          <div className="my-4">
            <label className="block text-gray-500 font-bold">Roles:</label>
            <div className="flex">
              <input type="radio" name="roles" value="Company" id="Company" />
              <label htmlFor="Company" className="ml-1 mr-2">
                Company
              </label>
              <input type="radio" name="roles" value="Job seeker" id="Job seeker" />
              <label htmlFor="Job seeker" className="ml-1">
                Job seeker
              </label>
            </div>
          </div>

          <div className="my-4">
            <input
              className="file:mr-2 file:py-1 file:px-4 text-sm file:rounded-full file:text-sm cursor-pointer"
              type="file"
              name="avatar"
            />
          </div>

          <button
            type="submit"
            className="border-2 my-4 px-5 py-2 hover:bg-black hover:text-white"
            // onClick={}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
