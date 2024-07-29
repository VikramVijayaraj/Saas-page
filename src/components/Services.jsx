import { ChartIcon, LinkIcon, OfficeIcon } from "./Icons";

function Services() {
  return (
    <ul className="p-4 space-y-4">
      <li className="flex justify-start space-x-4 py-4">
        <OfficeIcon />
        <p>Integrate all business departments</p>
      </li>
      <hr />
      <li className="flex justify-start space-x-4 py-4">
        <LinkIcon />
        <p>Connect to third-party apps</p>
      </li>
      <hr />
      <li className="flex justify-start space-x-4 py-4">
        <ChartIcon />
        <p>One interface to monitor all</p>
      </li>
    </ul>
  );
}
export default Services;
