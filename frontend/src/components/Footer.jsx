


function Footer() {
  return (
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
                href="#home"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#faq"
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
        <p className="text-center text-xs pt-8">© 2025 ChatSphere. All rights reserved.</p>
    </footer>
  )
}

export default Footer