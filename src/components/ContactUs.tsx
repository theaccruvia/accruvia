import ContactForm from "./ContactForm";
import { contactus } from "@/const";

const ContactUs = () => {
  return (
    <div className="w-full overflow-x-hidden  bg-gradient-to-br from-orange-50 to-orange-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative  py-20 ">
        {/* Accent blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0F172A]">
                Let’s Connect for a{" "}
                <span className=" bg-clip-text text-primary ">
                  Free Consultation
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We’d love to hear from you! Let’s discuss how we can help you
                grow and support your business with professional accounting &
                recruitment solutions.
              </p>
              <div>
                <a
                  href="#contact-form"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <img
                src={contactus}
                alt="AccRuvia - Professional accounting and recruitment services"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ContactForm></ContactForm>
      </section>
    </div>
  );
};

export default ContactUs;
