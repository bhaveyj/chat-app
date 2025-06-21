import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <form className="card shadow-lg bg-base-200 p-8 space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
