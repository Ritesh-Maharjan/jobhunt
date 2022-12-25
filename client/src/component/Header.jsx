import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loggingIn, loggingOut } from "../redux/slicer/authSlice";

function Header() {

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem("user")){
      dispatch(loggingIn(localStorage.getItem("user")))
    }
  }, [dispatch])
  
 
  const isLoggedIn = useSelector((state) => state.auth.user);

  const logout = () => {
    dispatch(loggingOut())
    localStorage.removeItem("user")
  }

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col w-[90%] m-auto">
        <div className="flex w-full h-[10vh] justify-between items-center md:text-xl">
          <h1 className="text-2xl font-bold md:text-3xl hover:border-b-4 ">
            <Link to="/">Job Hunt</Link>
          </h1>
          {isLoggedIn ? (
            <ul className="flex justify-around w-[10rem]">
              <Link to="login">
                <li className="hover:border-b-4" onClick={logout}>Logout</li>
              </Link>
            </ul>
          ) : (
            <ul className="flex justify-around w-[10rem]">
              <Link to="signup">
                <li className="hover:border-b-4">Sign Up</li>
              </Link>
              <Link to="login">
                <li className="hover:border-b-4">Login</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
