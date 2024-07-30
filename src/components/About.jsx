import Services from "./Services";

function About() {
  return (
    <div
      id="about"
      className="flex justify-between space-x-16 px-40 py-20 items-center"
    >
      {/* Content */}
      <div className="w-1/2 space-y-6">
        <h3 className="text-5xl font-semibold tracking-wide leading-snug">
          Automate all of business operations
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur.
        </p>
        <Services />
      </div>

      {/* Image */}
      <div className="w-1/2">
        <img className="rounded-2xl" src="/images/product-2.png" />
      </div>
    </div>
  );
}
export default About;
