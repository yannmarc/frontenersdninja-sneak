import React, { Fragment, useState } from "react";
import logo from "../../assets/imgs/svgs/logo.svg";
import Imgcart from "../../assets/imgs/svgs/icon-cart.svg";
import avatar from "../../assets/imgs/jpgs/image-avatar.png";
import menuOpen from "../../assets/imgs/svgs/icon-menu.svg";
import menuClose from "../../assets/imgs/svgs/icon-close.svg";
import CartDropdown from "../ui/CartDropdown";

const Navbar = ({ cart, counter, setCart, setCounter }) => {
  const links = ["Collections", "Men", "Woment", "About", "Contact"];
  const [isOpen, setOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive((prevState) => !prevState)
  }
  return (
    <Fragment>
      <nav className="w-full relative">
        <div className="px-6 py-3 lg:py-0 lg:px-6 lg:max-w-5xl xl:max-w-6xl lg:mx-auto flex items-center justify-between border-b-2 border-gray-200">
          <div className="flex items-center gap-2 lg:inline">
            <span className="block lg:hidden cursor-pointer w-[50px]" onClick={handleActive}><img src={menuOpen} alt="icon menu" /></span>
            <a href="#logo" >
              <img className="w-[300px] lg:w-[initial]" src={logo} alt="sneakers logo" />
            </a>
          </div>
          <div className="flex justify-end lg:justify-between md:justify-end w-full ml-14 items-center">
            <div className={isActive ? "active translate-x-0 absolute left-0 top-[0%] bg-[#0000005b] lg:bg-[inherit] w-screen h-screen lg:relative lg:w-[initial] lg:h-[initial]" : " translate-x-[-100vw] lg:translate-x-0 absolute left-0 top-[0%] bg-[#0000005b] lg:bg-[inherit] w-screen h-screen lg:relative lg:w-[initial] lg:h-[initial] transition-all"}>
              <ul className={isActive ? "active lg:flex lg:gap-6 lg:flex-row bg-white flex flex-col gap-2 px-6 h-[inherit] pt-3 w-[70%]" : "lg:flex lg:gap-6 lg:flex-row bg-white flex flex-col gap-2 px-4 h-[inherit] pt-3 w-[70%]"}>
              <span className="mt-2 mb-8 cursor-pointer" onClick={handleActive}><img src={menuClose} alt="icon close" /></span>
                {links.map((item) => (
                  <li key={item} className="">
                    <a
                      className="text-gray-600 font-bold lg:font-medium hover-item border-2 border-transparent block py-2 lg:py-[50px] hover:border-b-3 hover:border-b-orange-400 transition-all"
                      href={item}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 md:justify-end lg:gap-12 items-center relative md:right-[initial] -z-10 lg:z-0 lg:right-[initial]">
              <div className="relative">
                <img
                  className="cursor-pointer w-[20px] lg:w-[initial] relative"
                  src={Imgcart}
                  alt="icon cart"
                  onClick={() => setOpen((prevState) => !prevState)}
                />
                {isOpen && <CartDropdown cart={cart} setCart={setCart} setCounter={setCounter}/>}
                <span className={counter <= 0 ? "hidden" : "absolute -top-[9.5px] -right-4 bg-orange-400 py-[0.1px] text-sm px-3 rounded-xl text-white"}>{counter}</span>
              </div>
              <div className="">
                <span className="w-[35px] lg:w-[50px] block overflow-hidden rounded-full border-2 border-transparent hover:border-2 hover:border-orange-400 transition-all">
                  <img src={avatar} alt="avatar" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
