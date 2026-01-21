import React from "react";

const ContactSection = () => {
  return (
    <div className="relative bg-white p-4 sm:p-4 md:p-4">
      <div className="w-full flex flex-col lg:flex-row py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-lg sm:rounded-xl bg-stone-100 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
        <div className="flex-1 flex flex-col items-start justify-center lg:px-4 xl:px-8 max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Looking for more information? Get in touch!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Stay up-to-date on the latest news and updates! Sign up for our
            newsletter and receive exclusive offers, tips, and more straight to
            your inbox. Don't miss out! Join our community today!
          </p>

          <div className="mt-6 sm:mt-8 lg:hidden">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">+8801918166104</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">musabbir666@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center lg:justify-end max-w-xl mx-auto lg:mx-0 w-full">
          <form
            action="#"
            method="POST"
            className="w-full space-y-4 sm:space-y-6"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First Name"
                    className="w-full bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg 
                             border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                             focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="surname" className="sr-only">
                    Surname
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Surname"
                    className="w-full bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg 
                             border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                             focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email Address"
                  className="w-full bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg 
                           border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                           focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Your message (optional)"
                  className="w-full bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg 
                           border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                           focus:outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="newsletter"
                  className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-600"
                >
                  Subscribe to our newsletter for updates
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 
                         text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl 
                         text-base sm:text-lg transition-all duration-200 transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
                         shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

              <div className="hidden lg:flex flex-col text-right">
                <span className="text-sm text-gray-500">Prefer to call?</span>
                <a
                  href="tel:+8801918166104"
                  className="text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  +8801918166104
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left mt-4">
              By submitting this form, you agree to our{" "}
              <a
                href="#"
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                Privacy Policy
              </a>
              . We'll never share your information.
            </p>
          </form>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-30 blur-xl hidden lg:block" />
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-50 rounded-full opacity-20 blur-xl hidden lg:block" />
    </div>
  );
};

export default ContactSection;

// import React from "react";

// const ContactSection = () => {
//   return (
//     <div className="relative h-min-screen bg-white p-4">
//       <div className="h-min-screen w-full flex py-16 px-8 rounded-md bg-stone-100 flex-col-2 items-center">
//         <div className="flex flex-col items-start justify-center ml-16 px-16">
//           <h2 className="text-3xl font-bold mb-4">
//             Looking for more information? Get in touch!
//           </h2>
//           <p className="text-sm max-w-md">
//             Stay up-to-date on the latest news and updates! Sign up for our
//             newsletter and receive exclusive offers, tips, and more straight to
//             your inbox. Don't miss out! Join our community today!
//           </p>
//         </div>
//         <div className="mt-10 flex flex-1 items-center justify-center">
//           <form action="#" method="POST" className="space-y-6">
//             <div className="my-7 space-y-4">
//               <div className="flex gap-8 pb-4">
//                 <div className="flex-1">
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     required
//                     autoComplete="given-name"
//                     placeholder="First Name"
//                     className="w-full bg-white rounded-md outline-2 outline-emerald-600 outline-offset-4 placeholder:text-gray-400 px-8 py-2"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <input
//                     id="surname"
//                     name="surname"
//                     type="text"
//                     required
//                     autoComplete="family-name"
//                     placeholder="Surname"
//                     className="w-full bg-white rounded-md outline-2 outline-emerald-600 outline-offset-4 placeholder:text-gray-400 px-8 py-2"
//                   />
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   placeholder="Email"
//                   className="w-full bg-white rounded-md outline-2 outline-emerald-600 outline-offset-4 placeholder:text-gray-400 px-8 py-2"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex justify-center w-20 rounded-full bg-emerald-600 px-3 py-2 text-sm/6 font-semibold text-white hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;
