import React, { Fragment, useState } from "react";
import logo from "../../assets/imgs/svgs/logo.svg";
import cart from "../../assets/imgs/svgs/icon-cart.svg";
import avatar from "../../assets/imgs/jpgs/image-avatar.png";
import CartDropdown from "../ui/CartDropdown";

const Navbar = () => {
  const links = ["Collections", "Men", "Woment", "About", "Contact"];
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <nav className="w-full">
        <div className="px-6 lg:px-0 lg:max-w-5xl xl:max-w-6xl lg:mx-auto flex items-center border-b-2 border-gray-200">
          <div className="">
            <a href="#logo">
              <img src={logo} alt="sneakers logo" />
            </a>
          </div>
          <div className="flex justify-between w-full ml-14 items-center">
            <div className="">
              <ul className="flex gap-6">
                {links.map((item) => (
                  <li key={item} className="">
                    <a
                      className="text-gray-600 hover-item border-2 border-transparent block py-[50px] hover:border-b-3 hover:border-b-orange-400 transition-all"
                      href={item}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-12 items-center relative">
              <div className="">
                <img
                  className="cursor-pointer"
                  src={cart}
                  alt="icon cart"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                />
                {isOpen && <CartDropdown />}
              </div>
              <div className="">
                <span className="w-[50px] block overflow-hidden rounded-full border-2 border-transparent hover:border-2 hover:border-orange-400 transition-all">
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
