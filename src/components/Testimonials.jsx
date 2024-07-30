import { testimonials } from "../data";

function Testimonials() {
  return (
    <div id="testimonials" className="px-10 py-20 md:px-20 lg:p-40 space-y-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          What Our Clients Say About Us
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-8">
        {testimonials.map((d) => (
          <div className="p-6 text-center shadow-2xl rounded-2xl hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="pb-6 flex justify-start items-center space-x-4">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src={`/images/${d.img}`}
              />

              <div>
                <p className="text-left font-semibold text-base lg:text-lg">{d.name}</p>
                <p className="text-left font-light text-sm lg:text-base">{d.designation}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="lg:text-xl font-semibold">{d.title}</h3>
              <p className="text-sm font-light">{d.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;
