import {
  ShoppingCart,
  Bell,
  MessageCircleQuestion,
  TrendingUp,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

function Signup() {
  const [currentPart, setCurrentPart] = useState("Login");

  const changePart = (tabName: string) => {
    if (currentPart !== tabName) setCurrentPart(tabName);
  };

  return (
    <div className="bg-gray-200 h-[120vh] flex flex-col ">
      <div className="bg-gray-200 w-full justify-evenly gap-263 h-17 items-center sticky flex flex-row shadow-2xl z-9999 ">
        <div className="flex flex-row items-center gap-3 ml-5">
          <ShoppingCart className="text-orange-500 w-10 h-10 cursor-pointer" />
          <p className="text-2xl font-bold ">ShopMart</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-94">
          <div className="relative group">
            {/* Trigger */}
            <div className="flex items-center gap-1 font-bold text-lg cursor-pointer">
              More
              {/* Arrow changes on hover */}
              <ChevronUp className="transition-transform duration-300 group-hover:rotate-180 text-orange-400 font-light"></ChevronUp>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-2 gap-3 w-64 mt-5 transition-all duration-300 ease-in-out">
              <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-100 h-6">
                <Bell className="text-orange-400" />
                Notification Preference
              </div>
              <hr />
              <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-100 h-6">
                <MessageCircleQuestion className="text-orange-400" />
                24x7 Customer Service
              </div>
              <hr />
              <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-100 h-6">
                <TrendingUp className="text-orange-400" />
                Advertise
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Link to="/">
              <button className="bg-amber-300 w-32 h-9 border border-gray-100 rounded-md shadow-lg hover:bg-amber-400 transition duration-300 cursor-pointer">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" items-center flex flex-col mt-12">
        <div className="bg-gray-600 w-120 h-11 justify-center items-center flex  shadow-lg rounded-lg p-1">
          <div
            className={`${
              currentPart === "Login" ? "bg-white" : "bg-gray-500 text-white"
            } text-black text-lg w-1/2 rounded-md h-10 items-center flex justify-center cursor-pointer`}
            onClick={() => changePart("Login")}
          >
            <p className="text-center ">Log In</p>
          </div>
          <div
            className={`${
              currentPart === "SignUp" ? "bg-white" : "bg-gray-500 text-white"
            } text-black text-lg w-1/2 h-10 rounded-md flex items-center justify-center cursor-pointer`}
            onClick={() => changePart("SignUp")}
          >
            <p className="text-center">Sign Up</p>
          </div>
        </div>
        <form
          className={`${
            currentPart === "Login"
              ? "bg-white w-1/2 h-116 shadow-lg rounded-lg flex flex-col items-center mt-6 pt-9"
              : "hidden"
          } bg-white w-1/2 h-116 shadow-lg rounded-lg flex flex-col items-center  mt-6 pt-9`}
        >
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white w-4/5 h-10 rounded-md mt-11 hover:bg-orange-600 transition duration-300 cursor-pointer shadow-xl"
          >
            Log In
          </button>
        </form>

        <form
          className={`${
            currentPart === "SignUp"
              ? "bg-white w-1/2 h-131 shadow-lg rounded-lg flex flex-col items-center mt-6 pt-9"
              : "hidden"
          } bg-white w-1/2 h-116 shadow-lg rounded-lg flex flex-col items-center  mt-6 pt-9`}
        >
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <div className="flex flex-col w-11/12 mt-4 gap-2">
            <label className="text-gray-700 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-400"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white w-4/5 h-10 rounded-md mt-11 hover:bg-orange-600 transition duration-300 cursor-pointer shadow-xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
