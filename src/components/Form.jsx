import { useState } from "react";

function ContactForm() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInfo((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    console.log(info);

    setInfo({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <form>
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <input
          onChange={handleInputChange}
          className="w-full p-2 border-2 border-gray-100 rounded-lg"
          type="text"
          placeholder="Name *"
          name="name"
          value={info.name}
          required
        />
        <input
          onChange={handleInputChange}
          className="w-full p-2 border-2 border-gray-100 rounded-lg"
          type="text"
          placeholder="Email *"
          name="email"
          value={info.email}
          required
        />
      </div>
      <textarea
        onChange={handleInputChange}
        className="w-full p-2 border-2 border-gray-100 my-4 rounded-lg"
        type="text"
        name="message"
        placeholder="Your message *"
        rows="5"
        value={info.message}
      />
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-blue-500 text-white w-full lg:w-auto px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 disabled:opacity-50 disabled:cursor-not-allowed rounded-full hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
        disabled={!info.name || !info.email || !info.message}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
