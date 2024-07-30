function CTA() {
  return (
    <div
      id="features"
      className="flex flex-col-reverse lg:flex-row justify-between items-center text-center lg:text-left px-10 py-20 md:px-20 lg:p-40 bg-black text-white lg:space-x-16 gap-y-4"
    >
      {/* Image */}
      <div className="lg:w-1/2">
        <img
          className="rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          src="/images/product-3.png"
        />
      </div>

      {/* Content */}
      <div className="lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-snug">
          Keep track of all your activities
        </h3>
        <p className="lg:pb-5 text-sm md:text-base lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit
        </p>
        <p className="bg-blue-500 px-3 py-2 lg:px-6 lg:py-3 rounded-full text-white cursor-pointer hover:bg-white hover:text-blue-500 w-44 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          Start Free Trail
        </p>
      </div>
    </div>
  );
}
export default CTA;
