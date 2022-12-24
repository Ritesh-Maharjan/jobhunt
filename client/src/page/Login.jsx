import React from "react";

function Login() {
  return (
    <div>
      <div className="flex justify-center h-[90vh]">
        <form className="w-[90vw] border-2 border-black rounded-lg shadow-2xl p-6 m-auto">
          <h1 className="font-bold text-3xl my-4">Login</h1>

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

          <button
            type="submit"
            className="border-2 px-5 py-2 hover:bg-black hover:text-white"
            // onClick={}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
