import { ChartIcon, LinkIcon, OfficeIcon } from "./Icons";

function Services() {
  return (
    <ul className="p-4 space-y-2 lg:space-y-4 text-sm md:text-base lg:text-base">
      <li className="flex justify-start space-x-4 py-2 md:py-4 lg:py-4">
        <OfficeIcon />
        <p>Integrate all business departments</p>
      </li>
      <hr />
      <li className="flex justify-start space-x-4 py-2 md:py-4 lg:py-4">
        <LinkIcon />
        <p>Connect to third-party apps</p>
      </li>
      <hr />
      <li className="flex justify-start space-x-4 py-2 md:py-4 lg:py-4">
        <ChartIcon />
        <p>One interface to monitor all</p>
      </li>
    </ul>
  );
}
export default Services;
