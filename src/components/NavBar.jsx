function NavBar() {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "#about",
    },
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
    {
      text: "Contact",
      url: "#contact",
    },
  ];

  return (
    <nav className="bg-gray-50 px-40">
      <ul className="flex justify-between items-center py-8">
        <div>
          <li className="text-2xl font-semibold">
            <a href="/">Saas</a>
          </li>
        </div>
        <div className="flex justify-between items-center space-x-8 text-gray-600">
          {links.map((link) => (
            <li className="cursor-pointer">
              <a href={link.url}>{link.text}</a>
            </li>
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
