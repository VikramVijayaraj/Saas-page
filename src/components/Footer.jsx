import { links } from "../data";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-black text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 h-74 gap-12 px-14 py-12">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">
            <a href="/">Saas</a>
          </h2>
          <p className="text-md text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Information</h2>
          <ul className="text-md text-gray-300">
            {links.map((link) => (
              <li className="cursor-pointer hover:underline">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
          <ul className="text-md text-gray-300">
            <li>Phone: (+63) 555 1212</li>
            <li>Fax: (+63) 555 0100</li>
            <li>Email: info@mail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-10">
        <p className="text-gray-400">Copyright © {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
