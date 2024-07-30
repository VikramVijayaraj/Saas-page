import { logos } from "../data";

function Companies() {
  return (
    <div className="px-10 py-20 md:px-20 lg:p-40 space-y-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Trusted by companies all over the world
        </h2>
      </div>

      <div className="flex justify-between items-center">
        {logos.map((logo) => (
          <img className="h-7 lg:h-14" src={`/logos/${logo}`} />
        ))}
      </div>
    </div>
  );
}

export default Companies;
