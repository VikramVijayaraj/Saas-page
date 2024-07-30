function Testimonials() {
  const data = [
    {
      img: "client-1.jpg",
      name: "Leo",
      designation: "Lead Designer",
      title: "It was a very good experience",
      feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.`,
    },
    {
      img: "client-2.jpg",
      name: "Richard",
      designation: "Product Manager",
      title: "Easy to use and navigate",
      feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.`,
    },
    {
      img: "client-3.jpg",
      name: "Samantha",
      designation: "Senior Developer",
      title: "Great customer support",
      feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.`,
    },
  ];

  return (
    <div id="testimonials" className="px-40 py-40 space-y-16">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">
          What Our Clients Say About Us
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        {data.map((d) => (
          <div className="p-6 text-center shadow-2xl rounded-2xl">
            <div className="pb-6 flex justify-start items-center space-x-4">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src={`/images/${d.img}`}
              />

              <div>
                <p className="text-left font-semibold text-lg">{d.name}</p>
                <p className="text-left text-gray-500">{d.designation}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{d.title}</h3>
              <p className="text-gray-500 text-sm">{d.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;
