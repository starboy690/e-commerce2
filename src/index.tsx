import { Search, User, ShoppingCart, X, Menu } from "lucide-react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useState } from "react";

function Homepage() {
  // @ts-ignore
  const [count, setCount] = useState(0);

  const searchBar = () => {
    // Toggle search bar visibility
    const searchInput = document.querySelector("input[type='search']");

    if (!searchInput) return;

    // Check if input is focused
    const isFocused = document.activeElement === searchInput;

    // Only toggle if input is NOT focused
    if (!isFocused) {
      searchInput.classList.toggle("hidden");
    }
    // If input is focused, do not toggle visibility
    else {
      searchInput.classList.remove("hidden");
      // Keep focus on the input
    }
  };

  const toggleCart = () => {
    // Toggle shopping cart visibility
    const cartDisplay = document.getElementById("cart");

    if (cartDisplay) {
      cartDisplay.classList.toggle("hidden");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-full h-auto flex flex-col">
      {/* Shopping Cart Display */}
      <div
        className="flex flex-col bg-white fixed right-0 hidden top-0 z-10000 rounded-t-lg w-118 h-screen shadow-3xl transition-all duration-700 ease-in-out overflow-hidden"
        id="cart"
      >
        <div>
          <button
            className="absolute top-8 right-4 text-gray-500 hover:text-gray-700 cursor-pointer  border-1 border-gray-300 rounded-lg "
            onClick={toggleCart}
          >
            <X />
            {/* Close button */}
          </button>
        </div>
        <div className="flex flex-row items-center mt-8 gap-3 ml-3">
          <ShoppingCart />
          <h1 className="text-2xl  text-center flex flex-row gap-4 font-bold text-gray-700">
            Shopping Cart <span className="font-medium ">({count} items)</span>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <ShoppingCart className="text-gray-400 w-24 h-24 mb-4" />
          <p className="text-lg text-gray-600 text-center mb-5">
            Your cart is currently empty.
          </p>

          <button
            className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-1000 ml-3 cursor-pointer"
            onClick={toggleCart}
          >
            Start Shopping
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-200 w-full justify-evenly h-23 items-center fixed flex flex-row shadow-2xl z-9999 ">
        <div className="flex flex-row items-center gap-3 ml-5 max-[1128px]:mr-32">
          <ShoppingCart className="text-orange-500 w-10 h-10 cursor-pointer" />
          <p className="text-2xl font-bold ">ShopMart</p>
        </div>
        {/* Links to pages */}
        <div className="max-[1128px]:hidden">
          <ul className="list-none flex flex-row justify-center items-center gap-5">
            <li>
              <Link to="/" className="text-orange-600 ">
                All
              </Link>
            </li>
            <li>
              <Link to="/deals" className="text-gray-700 hover:text-orange-500">
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
          <Search className="cursor-pointer " onClick={searchBar} />
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-400 rounded px-2 py-1 shadow-2xl focus hidden "
          />

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
        <div
          className={`bg-white w-full absolute top-0 left-0 shadow-2xl z-[9999] overflow-hidden transition-all duration-900 ease-in-out ${
            isOpen ? "h-60 opacity-100 mt-23" : "h-0 opacity-0 mt-0"
          }`}
        >
          <ul className="list-none flex flex-col justify-center items-center gap-5 mt-4 ">
            <li>
              <Link to="/" className="text-gray-700 hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/deals" className="text-gray-700 hover:text-orange-500">
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

        <div className="max-[1128px]:flex hidden relative items-center justify-center cursor-pointer text-2xl border-gray-400 rounded-md border border-2">
          {!isOpen ? (
            <Menu size={35} id="menu" onClick={() => setIsOpen(true)} />
          ) : (
            <X size={31} id="cancel" onClick={() => setIsOpen(false)} />
          )}
        </div>
      </div>

      <div className="flex flex-row items-center bg-gray-200  justify-evenly w-full h-158 max-[1556px]:justify-center  max-[1128px]:bg-[url('/src/assets/istockphoto-1487500111-612x612.jpg')] bg-cover bg-no-repeat bg-center  max-[1128px]:h-158 ">
        <div className="flex flex-col w-198 max-[1289px]:pl-26  max-[1128px]:items-center max-[1128px]:text-center auto max-[1128px]:w-full max-[1128px]:filter brightness-100  ">
          <h1 className="text-5xl font-bold mb-4 max-[1128px]:text-white">
            Welcome to ShopMart!
          </h1>
          <p className="text-3xl text-orange-400 mb-6 font-bold max-[1128px]:text-orange-600">
            Your one-stop shop for all your needs!
          </p>

          <p className="text-xl text-gray-500 w-[60%] mb-8 max-[1128px]:text-black">
            Millions of products, competitive prices, and fast delivery. Shop
            with confidence on the world's most trusted marketplace.
          </p>

          <div className="flex flex-row gap-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 cursor-pointer max-[1128px]:bg-orange-600">
              Start Shopping
            </button>

            <button className="bg-white text-black px-4 py-2 rounded border-1 border-gray-200 shadow-lg hover:bg-gray-400 transition duration-300 cursor-pointer">
              Browse Categories
            </button>
          </div>

          <div className="flex flex-row items-center gap-6 mt-13">
            <p className="flex flex-row items-center gap-2">
              <div className="bg-orange-500 h-3 w-3 rounded-xl "></div>
              <span className="max-[1128px]:text-white">Secure Payment</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <div className="bg-yellow-500 h-3 w-3 rounded-xl "></div>
              <span className="max-[1128px]:text-black">24/7 Support</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <div className="bg-green-500 h-3 w-3 rounded-xl "></div>
              <span className="max-[1128px]:text-red-600">Free Shipping</span>
            </p>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex items-center justify-center max-[1289px]:mr-5 max-[1128px]:hidden ">
          <img
            className="rounded-lg shadow-xl w-115 h-93"
            src="src/assets/istockphoto-1487500111-612x612.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col ml-43 mt-10 gap-5  ">
        <h1 className="text-3xl font-bold">Featured Products</h1>
        <p className="text-lg text-gray-600">
          Best Sellers and customer favourites
        </p>
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col justify-evenly gap-5 w-full h-auto max-[1802px]:flex-row  max-[1802px]:flex-wrap max-[1802px]:justify-center  max-[1556px]:flex-row max-[1556px]:flex-wrap max-[1556px]:justify-evenly max-[1556px]:mt-7 max-[1556px]:h-auto">
        <div>
          <div className="flex flex-row items-center justify-evenly w-full h-158  max-[1556px]:flex-col max-[1556px]:justify-evenly max-[1556px]:h-498">
            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
              <div className="flex flex-row justify-between items-center absolute w-82 mt-2">
                <div className="bg-red-500 rounded-xl h-5 w-18 items-center text-sm justify-center text-white flex flex-row font-light">
                  25% off
                </div>

                <div className="rounded-xl h-6 w-20 text-sm font-light justify-center items-center flex flex-row bg-orange-300 text-white">
                  Best Seller
                </div>
              </div>
              <img
                className="w-full h-56 rounded-t-lg"
                src="src/assets/media@2x1.avif"
                alt=""
              />
              <div className="flex flex-col items-start mt-2 pl-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">
                  Premium Wireless Headphone
                </p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg  m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="src/assets/REF-REF-2658350-bento-apple-sv_DER-4df4ae4c-6322-42ae-ab25-11f1e3ef81ff.webp"
                alt=""
              />
              <div className="flex flex-col items-start mt-2 pl-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">Iphone 14 Pro Max</p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-2 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/assets/Bluetooth-Headset-Smartwatch-2-in-1-2-Inch-Full-Screen-Touch-Bluetooth-Call.avif"
                alt=""
              />
              <div className="flex flex-col items-start mt-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">Premium Smart Watch</p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/assets/csm_d581f22a5dc3c2c3d73d55ef22d3ae9d_b5602fcd6a.webp"
                alt=""
              />
              <div className="flex flex-col items-start mt-2 pl-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">
                  Premium Wireless Headphone
                </p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Products Section */}
        <div>
          <div className="flex flex-row items-center justify-evenly w-full h-158 max-[1556px]:flex-col max-[1556px]:h-498 max-[1556px]:justify-evenly">
            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="src/assets/service.webp"
                alt=""
              />
              <div className="flex flex-col items-start mt-2 pl-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (12)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">Rolex 45 Setware 2019</p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg  m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/assets/Rolex-Rainbow-Daytona-Sothebys-2.webp"
                alt=""
              />
              <div className="flex flex-col items-start mt-2 pl-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">
                  Rolex Rainbow 23P Fort
                </p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-2 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/assets/TEC-New-Sony-PlayStation-PS5-Gaming-Console-Disc-with-Marvel-s-Spider-Man-2-Bundle-White-Edition_7198fd26-acd8-4c23-820b-da7446773f7b.b0bfafe5007e5e6cfbc28138257ccafa.webp"
                alt=""
              />
              <div className="flex flex-col items-start mt-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">PS5 SpiderMan Edition</p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="src/assets/6ab52adc-8b80-43b5-9d17-4f83146452a0.50dca0cb2d1c881fb43e99a99cde2522.webp"
                alt=""
              />
              <div className="flex flex-col items-start mt-2 pl-2">
                <p className="flex flex-row items-center gap-2 text-lg font-semibold">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <span>4.8</span>
                  <span className="font-medium text-sm text-gray-400">
                    (156)
                  </span>
                </p>

                <p className="text-gray-700 font-bold">
                  Wireless Colourful Keyboard
                </p>

                <p className="flex flex-row gap-2 text-red-500 text-lg font-semibold items-center">
                  $299.99{" "}
                  <span className="text-gray-400 text-sm font-light line-through">
                    $399.99
                  </span>
                </p>

                <p className="text-gray-500 text-sm">
                  Experience premium sound quality with advanced noise
                  cancellation technology.
                </p>

                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  hidden ml-8 bg-linear-to-b from-orange-100 to-orange-300 h-80 w-370 rounded-lg shadow-lg mt-10 ">
        <h1 className="font-bold text-2xl ">Discover The Best Offers</h1>
        <form className="flex flex-row items-center justify-center mt-10 mb-10">
          <input
            type="email"
            placeholder="Enter your email for exclusive offers"
            required
            className="border border-black text-red-700 rounded-md p-2 focus:outline-none w-90"
          ></input>
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 ml-3 cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>

      <footer className="bg-gray-800 text-white mt-30 h-40 ">
        <div className="bg-gray-800 text-white py-6 px-4">
          <div className="container mx-auto text-center">
            <p className="text-sm mb-2">
              © 2023 ShopMart. All rights reserved.
            </p>
            <p className="text-xs">Terms of Service | Privacy Policy</p>
          </div>
        </div>
        <div className="bg-orange-200 text-white py-4 px-4 mt-4">
          <div className="container mx-auto text-center">
            <p className="text-xs text-black ">
              Follow us on:
              <a href="#" className="text-blue-400 hover:underline ml-2">
                Facebook
              </a>{" "}
              |
              <a href="#" className="text-blue-400 hover:underline ml-2">
                Twitter
              </a>{" "}
              |
              <a href="#" className="text-blue-400 hover:underline ml-2">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
