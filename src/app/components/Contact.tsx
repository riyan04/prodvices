'use client';
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="p-7 flex flex-col lg:flex-row rounded-3xl border shadow-lg">
      {/* Left Section */}
      <div className="w-full lg:w-[50%] mb-6 lg:mb-0">
        <h1 className="mt-4 font-bold pl-6 text-4xl">
          Start Your Online Journey <br /> With Us
        </h1>
        <p className="pl-6 mt-4 text-l">
          Allow us to assist your business succeed in <br /> the AI age
        </p>
        <button className="flex items-center justify-center w-[9rem] h-[3rem] bg-black rounded-full mt-5 ml-7 text-slate-100">
          <div className="flex items-center justify-center bg-white p-1 rounded-full h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4 text-black"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
            </svg>
          </div>
          <span className="ml-1">Book A Call</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%]">
        <h2 className="text-2xl font-bold text-black mb-4 mt-3 ml-5 block">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="ml-3 flex flex-col items-center space-y-4"
        >
          {[
            {
              id: "name",
              type: "text",
              value: formData.name,
              placeholder: "Enter your name",
              label: "Name",
            },
            {
              id: "email",
              type: "email",
              value: formData.email,
              placeholder: "Enter your email",
              label: "Email",
            },
            {
              id: "subject",
              type: "text",
              value: formData.subject,
              placeholder: "Enter the subject",
              label: "Subject",
            },
            {
              id: "message",
              type: "textarea",
              value: formData.message,
              placeholder: "Type your message",
              label: "Message",
            },
          ].map(({ id, type, value, placeholder, label }) => (
            <div key={id} className="flex w-full lg:w-[80%] items-center">
              <label
                htmlFor={id}
                className="block w-[20%] text-sm font-medium text-black"
              >
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={id}
                  value={value}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="flex-1 p-2 bg-gray-200 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:outline-none h-24 text-black"
                  required
                ></textarea>
              ) : (
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={value}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="flex-1 p-2 bg-gray-200 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:outline-none text-black"
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full lg:w-[80%] bg-black text-white py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
