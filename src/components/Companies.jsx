function Companies() {
  const logos = [
    "adobe.svg",
    "hubspot.svg",
    "stripe.svg",
    "zoom.svg",
    "slack.svg",
  ];

  return (
    <div className="py-40 space-y-16">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">
          Trusted by companies all over the world
        </h2>
      </div>

      <div className="flex justify-between h-14">
        {logos.map((logo) => (
          <img src={`/logos/${logo}`} />
        ))}
      </div>
    </div>
  );
}

export default Companies;
