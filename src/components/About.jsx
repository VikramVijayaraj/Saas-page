import Services from "./Services";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-between lg:space-x-16 px-10 py-20 md:px-20 lg:p-40 items-center text-center lg:text-left"
    >
      {/* Content */}
      <div className="lg:w-1/2 space-y-6">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-snug">
          Automate all of business operations
        </h3>
        <p className="text-sm md:text-base lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur.
        </p>
        <Services />
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          src="/images/product-2.png"
        />
      </div>
    </div>
  );
}
export default About;
