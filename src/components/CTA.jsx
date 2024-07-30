function CTA() {
  return (
    <div id="features" className="flex justify-between items-center px-40 py-40 bg-black text-white space-x-16">
      {/* Image */}
      <div className="w-1/2">
        <img className="rounded-2xl" src="/images/product-3.png" />
      </div>

      {/* Content */}
      <div className="w-1/2 space-y-6">
        <h3 className="text-5xl font-semibold tracking-wide leading-snug">
          Keep track of all your activities
        </h3>
        <p className="pb-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit
        </p>
        <p className="bg-blue-500 px-6 py-3 rounded-full text-white cursor-pointer hover:bg-white hover:text-blue-500 w-44 text-center">
          Start Free Trail
        </p>
      </div>
    </div>
  );
}
export default CTA;
