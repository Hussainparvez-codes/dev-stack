import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex gap-5 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-gray-900">
                Home
              </a>

              <a
                href="#technologies"
                className="block hover:text-gray-900"
              >
                Technologies
              </a>

              <a href="#" className="block hover:text-gray-900">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-gray-900">
                About
              </a>

              <a href="#" className="block hover:text-gray-900">
                Contact
              </a>

              <a href="#" className="block hover:text-gray-900">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-gray-900">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-10">
          <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-700">
                Privacy
              </a>

              <a href="#" className="hover:text-gray-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;