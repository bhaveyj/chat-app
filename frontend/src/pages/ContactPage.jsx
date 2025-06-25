import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          showToast("✅ Message sent successfully!", "success");
        },
        () => {
          setLoading(false);
          showToast("❌ Failed to send message. Try again.", "error");
        }
      );
  };

  const showToast = (message, type) => {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = message;
    toast.className =
      "toast toast-center toast-middle fixed z-50 " +
      (type === "success" ? "bg-green-500" : "bg-red-500");
    toast.classList.remove("hidden");

    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
  };

  return (
    <>
    <div className="min-h-screen bg-base-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="card shadow-lg bg-base-200 p-8 space-y-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="from_name"
              className="input input-bordered"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              className="input input-bordered"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered h-32"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full flex justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-10 text-sm text-base-content/70">
          Or email us directly at{" "}
          <span className="link link-hover">support@chatsphere.app</span>
        </div>
      </div>

      {/* Toast container */}
      <div
        id="toast"
        className="hidden text-white px-6 py-3 rounded shadow-xl text-center"
      ></div>
      
    </div>
    <footer className="bg-black text-gray-400 py-12 mt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            ChatSphere is a real-time messaging platform designed for seamless and secure communication. It connects users instantly, enabling meaningful conversations through a fast, intuitive, and reliable interface.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/home"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/home"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/home"
                className="hover:text-white transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/bhavya-joshi-0a6490227/"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bhaveyj"
                className="hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 11001</p>
          <p>Email: bjoshi1503@gmail.com</p>
          <p>Phone: (+91) 9599911350</p>
        </div>
        </div>
    </footer>
    </>
  );
};

export default ContactPage;
