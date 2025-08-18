import { Search, User, ShoppingCart, X } from "lucide-react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Homepage() {
  const searchBar = () => {
    // Toggle search bar visibility
    const searchInput = document.querySelector("input[type='search']");
    if (searchInput) {
      searchInput.classList.toggle("hidden");
    }
  };

  const toggleCart = () => {
    // Toggle shopping cart visibility
    const cartDisplay = document.getElementById("cart");
    if (cartDisplay) {
      cartDisplay.classList.toggle("hidden");
    }
  };

  return (
    <div className="bg-white w-full h-200vh flex flex-col ">
      {/* Shopping Cart Display */}
      <div
        className="flex flex-col bg-white fixed right-0 hidden top-0 z-10000 rounded-t-lg w-118 h-screen shadow-3xl transition all ease-in-out duration-10 overflow-y-auto"
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
            Shopping Cart <span className="font-medium ">(0 items)</span>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <ShoppingCart className="text-gray-400 w-24 h-24 mb-4" />
          <p className="text-lg text-gray-600 text-center mb-5">
            Your cart is currently empty.
          </p>

          <button
            className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 ml-3 cursor-pointer"
            onClick={toggleCart}
          >
            Start Shopping
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-200 w-full justify-evenly h-23 items-center sticky flex flex-row shadow-2xl z-9999 ">
        <div className="flex flex-row items-center gap-3 ml-5">
          <ShoppingCart className="text-orange-500 w-10 h-10 cursor-pointer" />
          <p className="text-2xl font-bold ">ShopMart</p>
        </div>

        <div>
          <ul className="list-none flex flex-row justify-center items-center gap-5">
            <li>
              <a href="#home" className="text-gray-700 hover:text-orange-500">
                All
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-gray-700 hover:text-orange-500"
              >
                Today's Deals
              </a>
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

        <div className="flex items-center space-x-6">
          <Search className="cursor-pointer " onClick={searchBar} />
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-400 rounded px-2 py-1 shadow-2xl focus:outline-none hidden "
          />
          <div>
            <User className="cursor-pointer " />
          </div>

          <ShoppingCart
            className="cursor-pointer "
            onClick={toggleCart}
            id="cart2"
          />
        </div>
      </div>

      <div className="flex flex-row items-center bg-gray-200  justify-evenly w-full h-158 max-[1556px]:justify-center  max-[1128px]:bg-[url('istockphoto-1487500111-612x612.jpg')] bg-cover bg-no-repeat bg-center  max-[1128px]:h-158 ">
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
            src="/src/public/images/istockphoto-1487500111-612x612.jpg"
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
      <div className="flex flex-col justify-evenly gap-5 w-full h-159 max-[1802px]:flex-row  max-[1802px]:flex-wrap max-[1802px]:justify-center  max-[1556px]:flex-row max-[1556px]:flex-wrap max-[1556px]:justify-evenly max-[1556px]:mt-7 max-[1556px]:h-498">
        <div>
          <div className="flex flex-row items-center justify-evenly w-full h-158  max-[1556px]:flex-col max-[1556px]:justify-evenly max-[1556px]:h-498">
            <div className="w-86 h-109j bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
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
                src="/src/public/images/media@2x1.avif"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg  m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/public/images/REF-REF-2658350-bento-apple-sv_DER-4df4ae4c-6322-42ae-ab25-11f1e3ef81ff.webp"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-2 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/public/images/Bluetooth-Headset-Smartwatch-2-in-1-2-Inch-Full-Screen-Touch-Bluetooth-Call.avif"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/public/images/csm_d581f22a5dc3c2c3d73d55ef22d3ae9d_b5602fcd6a.webp"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
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
                src="/src/public/images/csm_d581f22a5dc3c2c3d73d55ef22d3ae9d_b5602fcd6a.webp"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg  m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/public/images/Rolex-Rainbow-Daytona-Sothebys-2.webp"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-2 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/public/images/TEC-New-Sony-PlayStation-PS5-Gaming-Console-Disc-with-Marvel-s-Spider-Man-2-Bundle-White-Edition_7198fd26-acd8-4c23-820b-da7446773f7b.b0bfafe5007e5e6cfbc28138257ccafa.webp"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-86 h-109 bg-white shadow-lg rounded-lg p-1 m-4 flex flex-col">
              <img
                className="w-full h-56 rounded-t-lg"
                src="/src/public/images/csm_d581f22a5dc3c2c3d73d55ef22d3ae9d_b5602fcd6a.webp"
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

                <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600 transition duration-300 mt-6 flex flex-row items-center gap-2 ml-3 cursor-pointer">
                  <ShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
