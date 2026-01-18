import React from "react";

const ContactSection = () => {
  return (
    <div className="relative h-min-screen bg-white p-4">
      <div className="h-min-screen w-full flex py-16 px-8 rounded-md bg-stone-100 flex-col-2 items-center">
        <div className="flex flex-col items-start justify-center ml-16 px-16">
          <h2 className="text-3xl font-bold mb-4">
            Looking for more information? Get in touch!
          </h2>
          <p className="text-sm max-w-md">
            Stay up-to-date on the latest news and updates! Sign up for our
            newsletter and receive exclusive offers, tips, and more straight to
            your inbox. Don't miss out! Join our community today!
          </p>
        </div>
        <div className="mt-10 flex flex-1 items-center justify-center">
          <form action="#" method="POST" className="space-y-6">
            <div className="my-7 space-y-4">
              <div className="flex gap-8 pb-4">
                <div className="flex-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First Name"
                    className="w-full bg-white rounded-md outline-2 outline-emerald-600 outline-offset-4 placeholder:text-gray-400 px-8 py-2"
                  />
                </div>
                <div className="flex-1">
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Surname"
                    className="w-full bg-white rounded-md outline-2 outline-emerald-600 outline-offset-4 placeholder:text-gray-400 px-8 py-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className="w-full bg-white rounded-md outline-2 outline-emerald-600 outline-offset-4 placeholder:text-gray-400 px-8 py-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center w-20 rounded-full bg-emerald-600 px-3 py-2 text-sm/6 font-semibold text-white hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
