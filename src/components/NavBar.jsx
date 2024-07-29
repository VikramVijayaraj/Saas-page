function NavBar() {
  const links = ["Home", "Features", "About", "Pricing", "Contact"];

  return (
    <nav>
      <ul className="flex justify-between items-center py-8">
        <div>
          <li>Saas Product</li>
        </div>
        <div className="flex justify-between items-center space-x-8 text-gray-600">
          {links.map((link) => (
            <li className="cursor-pointer">{link}</li>
          ))}

          <li className="bg-blue-500 px-6 py-3 rounded-full text-white cursor-pointer hover:bg-black">
            Get Started
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
