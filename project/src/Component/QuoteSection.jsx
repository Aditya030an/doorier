import { useState } from "react";
import emailjs from "emailjs-com";

const QuoteSection = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    international: "",
    ecommerce: "",
    volume: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          mobile: form.mobile,
          international: form.international,
          ecommerce: form.ecommerce,
          volume: form.volume,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Quote request sent successfully!");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        international: "",
        ecommerce: "",
        volume: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center gap-20">

      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 border border-white/30 backdrop-blur-md rounded-full shadow-md">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <p className="text-gray-700 font-medium text-sm">
            100% Transparent Estimates
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f1a3a] leading-tight">
          Get a Quote,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
            Before You Ship.
          </span>
        </h1>

        <p className="text-gray-700 text-lg">
          A simple, clean, honest pricing experience — designed for businesses
          that value clarity and speed.
        </p>

        <p className="text-gray-700 text-lg">
          Share your details and we’ll send you a tailored quote —
          <span className="font-semibold"> no hidden charges.</span>
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="lg:w-1/2 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] p-10"
        >
          <h3 className="text-3xl font-extrabold text-[#0f1a3a] mb-8">
            Quick <span className="text-blue-600">Shipping Quote</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              className="premium-input p-2"
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="premium-input p-2"
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            className="premium-input mb-4 p-2"
            placeholder="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            className="premium-input mb-4 p-2"
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          </div>

          {/* Radios */}
          <div className="mb-6">
            <p className="font-medium mb-2">Selling internationally?</p>
            <div className="flex gap-8">
              <label>
                <input
                  type="radio"
                  name="international"
                  value="Yes"
                  required
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="international"
                  value="No"
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-medium mb-2">E-commerce seller?</p>
            <div className="flex gap-8">
              <label>
                <input
                  type="radio"
                  name="ecommerce"
                  value="Yes"
                  required
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="ecommerce"
                  value="No"
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <select
            className="premium-input mb-8 p-2"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            required
          >
            <option value="">Monthly shipment volume</option>
            <option value="1 - 100">1 - 100</option>
            <option value="101 - 500">101 - 500</option>
            <option value="500+">500+</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-semibold text-white text-lg transition-all
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02]"
              }`}
          >
            {loading ? "Sending..." : "Get My Quote"}
          </button>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By continuing, you agree to our{" "}
            <span className="text-blue-600 underline">Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuoteSection;
