function Hero() {
  return (
    <div className="bg-gray-50 px-10 py-20 md:px-20 lg:p-40 text-center flex flex-col justify-center items-center space-y-8 ">
      <div className="lg:w-2/3 space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
          Streamline all business operations in one space
        </h1>
        <p className="text-gray-500 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        </p>
      </div>
      <div className="bg-blue-500 px-3 py-2 lg:px-6 lg:py-3 text-sm lg:text-base rounded-full text-white cursor-pointer hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        Get Started
      </div>

      <div className="lg:w-3/4 rounded-2xl shadow-2xl">
        <img
          className="skew-y-10 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          src="/images/product-1.png"
        />
      </div>
    </div>
  );
}

export default Hero;
