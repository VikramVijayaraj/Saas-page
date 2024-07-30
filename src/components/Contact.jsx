import ContactForm from "./Form";

function Contact() {
  return (
    <div id="contact" className="bg-gray-50 px-40 py-40">
      <div className="text-center w-1/2 space-y-6 m-auto">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <p className="text-gray-500 text-xs">
          Required fields are marked <span className="text-red-500">*</span>
        </p>
        <form>
          <ContactForm />
        </form>
      </div>
    </div>
  );
}
export default Contact;
