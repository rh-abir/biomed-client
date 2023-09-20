import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import contactImg from '../../assets/contact_us/top-view-blue-monday-concept-composition-with-telephone_23-2149139103.avif'

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hgn2gkn",
        "template_rph9cik",
        form.current,
        "0NYSO9RzbhtXf6dad"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message sent successfully");
          setIsFormSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="bg-contact-image bg-cover bg-no-repeat bg-center min-h-screen flex items-center pt-56 pb-40"
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-20 rounded-lg shadow-md mx-auto w-1/2">
        <h2 className="text-3xl font-semibold mb-10 text-center">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full border rounded-md px-3 py-2"
              placeholder="example@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Your message here..."
              required
            />
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-8 hover:bg-green-600 transition duration-300"
              disabled={isFormSubmitted}
            >
              {isFormSubmitted ? "Sent" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
