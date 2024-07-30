function Hero() {
  return (
    <div className="bg-gray-50 px-40 text-center flex flex-col justify-center items-center space-y-8 py-40">
      <div className="w-2/3 space-y-6">
        <h1 className="text-6xl font-semibold">
          Streamline all business operations in one space
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        </p>
      </div>
      <div className="bg-blue-500 px-6 py-3 rounded-full text-white cursor-pointer hover:bg-black">
        Get Started
      </div>

      <div className="w-3/4 rounded-2xl shadow-2xl py-4">
        <img className="rounded-2xl" src="/images/product-1.png" />
      </div>
    </div>
  );
}

export default Hero;
