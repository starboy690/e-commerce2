import {
  ShoppingCart,
  Bell,
  MessageCircleQuestion,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";

function Signup() {
  return (
    <div className="bg-gray-200 h-screen flex ">
      <div className="bg-gray-200 w-full justify-evenly gap-263 h-17 items-center sticky flex flex-row shadow-2xl z-9999 ">
        <div className="flex flex-row items-center gap-3 ml-5">
          <ShoppingCart className="text-orange-500 w-10 h-10 cursor-pointer" />
          <p className="text-2xl font-bold ">ShopMart</p>
        </div>

        <div className="flex flex-row items-center justify-evenly w-94">
          <div className="relative group">
            {/* Trigger */}
            <p className="font-bold text-lg cursor-pointer">More</p>

            {/* Dropdown Menu */}
            <div className="absolute hidden  group-hover:flex flex-col bg-white shadow-lg rounded-lg p-2 gap-3 w-64 mt-5 transition-all duration-300 ease-in-out">
              <div className="flex flex-row items-center gap-2 cursor-pointer  hover:bg-gray-100 h-6">
                <Bell className="text-orange-400" />
                Notification Preference
              </div>
              <hr />
              <div className="flex flex-row items-center gap-2 cursor-pointer   hover:bg-gray-100 h-6">
                <MessageCircleQuestion className="text-orange-400" />
                24x7 Customer Service
              </div>
              <hr />
              <div className="flex flex-row items-center gap-2 cursor-pointer   hover:bg-gray-100 h-6">
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
    </div>
  );
}

export default Signup;
