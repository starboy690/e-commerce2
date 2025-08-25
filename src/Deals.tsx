import { Link } from "react-router";
import { Heart, User, ShoppingCart, X, Menu } from "lucide-react";
import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Deals() {
  const [count, setCount] = useState(0);

  const toggleCart = () => {
    const cartDisplay = document.getElementById("cart");
    if (cartDisplay) {
      cartDisplay.classList.toggle("hidden");
    }
  };

  return (
    <div className="bg-white w-full h-auto flex flex-col">
      {/* Navbar */}
      <div className="bg-gray-200 w-full justify-evenly h-23 items-center  flex flex-row shadow-2xl z-9999 ">
        <div className="flex flex-row items-center gap-3 ml-5 max-[1128px]:mr-32">
          <ShoppingCart className="text-orange-500 w-10 h-10 cursor-pointer" />
          <p className="text-2xl font-bold ">ShopMart</p>
        </div>
        {/* Links to pages */}
        <div className="max-[1128px]:hidden">
          <ul className="list-none flex flex-row justify-center items-center gap-5">
            <li>
              <Link to="/" className=" text-gray-700 hover:text-orange-500 ">
                All
              </Link>
            </li>
            <li>
              <Link to="/deals" className="  text-orange-600">
                Today's Deals
              </Link>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-orange-500">
                Customer Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500"
              >
                Registry
              </a>
            </li>
            <li>
              <a href="#cart" className="text-gray-700 hover:text-orange-500">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Heart className="cursor-pointer " />

          <div>
            <Link to="/signup">
              <User className="cursor-pointer " />
            </Link>
          </div>

          <div className=" flex flex-row items-center  relative">
            <ShoppingCart
              className="cursor-pointer transition-all duration-700 ease-in-out overflow-hidden"
              onClick={toggleCart}
              id="cart2"
            />
            <div
              className="bg-red-500 text-white h-5 w-5 rounded-xl  justify-center flex items-center text-sm mt-[-12px] absolute ml-4"
              id="cart-number"
            >
              {count}
            </div>
          </div>
        </div>
        {/* PopUp*/}
        <div className="bg-white w-full h-60 absolute top-0 left-0 transition-all duration-1000 ease-in-out hidden shadow-2xl z-9999 ">
          <ul className="list-none flex flex-col justify-center items-center gap-5 mt-4 ">
            <li className="hidden max-[1128px]:block">
              <Link to="/" className="text-gray-700 hover:text-orange-500">
                Home
              </Link>
            </li>
            <li className="hidden max-[1128px]:block">
              <Link to="/deals" className="text-gray-700 hover:text-orange-500">
                Today's Deals
              </Link>
            </li>
            <li className="hidden max-[1128px]:block">
              <a href="#about" className="text-gray-700 hover:text-orange-500">
                Customer Service
              </a>
            </li>
            <li className="hidden max-[1128px]:block">
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500"
              >
                Registry
              </a>
            </li>
            <li className="hidden max-[1128px]:block">
              <a href="#cart" className="text-gray-700 hover:text-orange-500">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        <div className="max-[1128px]:flex hidden relative items-center justify-center cursor-pointer text-2xl border-gray-400 rounded-md border border-2">
          <Menu size={35} id="menu" />
          <X size={31} className="absolute hidden" id="cancel" />
        </div>
      </div>
      <div className="w-full justify-evenly items-center h-196 flex flex-row bg-linear-to-b from-red-200 via-blue-200 to-orange-300 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">PREMIUM WORLD CLASS WATCHES</h1>
          <p>
            Experience crystal-clear audio with noise cancellation technology
          </p>

          <div className="flex flex-row gap-2 -tems-center">
            <div>
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
            </div>
            <div>(2,456 reviews)</div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <h1 className="font-bold text-3xl text-black">$79.99</h1>
              <span className="line-through text-md text-red-500">$179.99</span>
            </div>
          </div>
        </div>
        <div className="bg-[linear-gradient(90deg,rgba(157,197,237,0.61)_8%,rgba(207,232,221,0.77)_80%)] p-6 rounded-lg relative h-[350px] flex">
          <img
            src="src/assets/rolex-new-watches-2025-new-dials_m126518ln-0014_2501stojan_001-landscape.jpg"
            alt=""
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Deals;
