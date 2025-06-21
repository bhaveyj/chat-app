import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import bgg from "../assets/bgg.jpg"; // adjust path as needed

function Landing() {
  const { logout } = useAuthStore();
  return (
    <div>
      <header
        className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
      >
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2.5 hover:opacity-80 transition-all"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-lg font-bold">ChatSphere</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={"/settings"}
                className={`
              btn btn-sm gap-2 transition-colors
              
              `}
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>
              <Link to={"/signup"} className={`btn btn-sm gap-2`}>
                <User className="size-5" />
                <span className="hidden sm:inline">SignUp</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section id="home">
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Chat. Connect. Collaborate.
            </h1>
            <p className="mb-5">
              Experience seamless real-time messaging with ChatSphere — built
              for fast, secure, and intuitive communication. Stay connected
              anytime, anywhere.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </section>
      <section id="about" className="bg-base-200 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose ChatSphere?</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature Card 1 */}
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
              <figure className="px-10 pt-10">
                <img
                  src="/src/assets/main.png"
                  alt="Real-Time Chat"
                  className="w-80 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Real-Time Chat</h3>
                <p>
                  Send and receive messages instantly with Socket.io-powered
                  communication.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
              <figure className="px-10 pt-10">
                <img
                  src="/src/assets/secure.jpg"
                  alt="Secure Authentication"
                  className="w-60 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Secure Authentication</h3>
                <p>
                  JWT-based login system ensures secure access and private
                  messaging.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
              <figure className="px-10 pt-10">
                <img
                  src="/src/assets/responsive.jpg"
                  alt="Responsive UI"
                  className="w-64 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Responsive UI</h3>
                <p>
                  Built with TailwindCSS and DaisyUI for a beautiful experience
                  on any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 bg-base-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Is ChatSphere free to use?
            </div>
            <div className="collapse-content">
              <p>Yes! ChatSphere is completely free with no hidden charges.</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Do I need to create an account to chat?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you need to sign up or log in to access the chat features.
                We use JWT for secure authentication.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Is my data and chat history secure?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely. We use encrypted sockets and secure login systems to
                protect your messages and personal data.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Can I use ChatSphere on mobile?
            </div>
            <div className="collapse-content">
              <p>
                Yes! ChatSphere is fully responsive and works smoothly on both
                desktop and mobile devices.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              How can I report a bug or suggest a feature?
            </div>
            <div className="collapse-content">
              <p>
                You can report bugs or request features through our GitHub repo
                or contact form on the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
