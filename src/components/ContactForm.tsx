import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export const ContactForm = () => {
  return (
    <div
      id="contact-form"
      className="w-full mx-auto px-4 sm:px-10 lg:px-28 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      {/* Left Side - Info */}
      <div className="space-y-8 sm:space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[#0F172A]">
          Keep In Touch With Our <br /> Professional Team
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-md">
          Reach out to us for reliable solutions in accounting, recruitment, and
          taxation services. We’re just a call or email away.
        </p>

        <div className="space-y-4 sm:space-y-6">
          {[
            {
              icon: MapPin,
              title: "Office(India)",
              desc: "B-1102 Sivanta One Opposite Nalli sarees, Pritamnagar, Near paldi Cross Roads, Ahmedabad- 380007",
            },
            {
              icon: MapPin,
              title: "Office(Dubai)",
              desc: "Unit 3706, Platinum Tower JLT, Plot 12, Jumeirah Lakes Towers, Dubai, UAE - 336482",
            },
            {
              icon: Mail,
              title: "Email",
              desc: "info@theaccruvia.com",
            },
            {
              icon: Phone,
              title: "Phone",
              desc: "+91 98989 53563(India), +97 155 773 6808(Dubai)",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <item.icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100 w-full">
        <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg font-medium">
          Send us a message and we’ll get back to you shortly.
        </p>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget as any;

            const formData = new FormData();

            formData.append("entry.1483041672", form.firstName.value);
            formData.append("entry.321636449", form.lastName.value);
            formData.append("entry.790114394", form.email.value);
            formData.append("entry.1900390297", form.subject.value);
            formData.append("entry.909505091", form.phone.value);
            formData.append("entry.429593277", form.message.value);

            await fetch(
              "https://docs.google.com/forms/d/e/1FAIpQLSc5P5qUKQDYJEAnoRPHAk2_6Rhn-nfVrIEa6DI6rXQ5CnBFeg/formResponse",
              {
                method: "POST",
                mode: "no-cors",
                body: formData,
              }
            );

            form.reset();
            const successPopup = document.createElement("div");

            successPopup.innerHTML = `
            <div style="
                        position:             fixed;
                        bottom:               24px;
                        right:                24px;
                        background:           linear-gradient(to right, #f97316, #ef4444);
                        color:                white;
                        padding:              16px 22px;
                        border-radius:        14px;
                        box-shadow:           0 10px 30px rgba(0,0,0,0.15);
                        font-family:          sans-serif;
                        font-size:            15px;
                        font-weight:          600;
                        z-index:              9999;
                        opacity:              0;
                        transform:            translateY(10px);
                        transition:           all 0.3s ease;
            ">

              ✅ Message submitted successfully
            </div>
            `;

            document.body.appendChild(successPopup);

            const popupEl = successPopup.firstElementChild as HTMLElement;

            requestAnimationFrame(() => {
              popupEl.style.opacity = "1";
              popupEl.style.transform = "translateY(0)";
            });

            setTimeout(() => {
              popupEl.style.opacity = "0";
              popupEl.style.transform = "translateY(10px)";

              setTimeout(() => {
                successPopup.remove();
              }, 300);
            }, 3000);
          }}
        >
          <div className="w-full">
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              First Name *
            </label>

            <input
              type="text"
              name="firstName"
              required
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              Last Name *
            </label>

            <input
              type="text"
              name="lastName"
              required
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              Mobile Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="+91"
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              Message *
            </label>

            <textarea
              rows={5}
              name="message"
              required
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition text-sm sm:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;