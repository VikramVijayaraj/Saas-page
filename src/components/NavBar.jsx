import { useState } from "react";

import { links } from "../data";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

function NavBar() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav className="bg-gray-50 px-10 md:px-20 lg:px-40">
      <ul className="flex justify-between items-center py-8">
        <div>
          <li className="text-2xl font-semibold">
            <a href="/">Saas</a>
          </li>
        </div>
        <div className="hidden lg:flex justify-between items-center space-x-8 text-gray-600">
          {links.map((link) => (
            <li className="cursor-pointer">
              <a href={link.url}>{link.text}</a>
            </li>
          ))}

          <li className="bg-blue-500 px-6 py-3 rounded-full text-white cursor-pointer hover:bg-black">
            Get Started
          </li>
        </div>
        <div className="block lg:hidden">
          <div className="relative cursor-pointer" onClick={handleMenu}>
            {menu ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className="absolute right-10 shadow-2xl p-4 rounded-xl z-50 text-gray-600 bg-gray-50">
            {menu && (
              <ul className="space-y-4">
                {links.map((link) => (
                  <li className="cursor-pointer">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>{" "}
      </ul>
    </nav>
  );
}

export default NavBar;
