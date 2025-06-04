const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-12">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left text-sm text-gray-600 font-semibold">
        &copy; 2024 Hadet Coffee. All rights reserved.
      </div>
      <nav className="flex gap-6 text-gray-600 text-sm font-semibold">
        <a href="#" className="hover:text-black transition">
          About Us
        </a>
        <a href="#" className="hover:text-black transition">
          Contact
        </a>
        <a href="#" className="hover:text-black transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-black transition">
          Terms of Service
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
