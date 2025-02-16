import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="border-t-8 border-teal-500 bg-gray-100 dark:bg-gray-900 py-6">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Ahsaan 
              </span>
              Ullah
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h4 className="text-gray-700 dark:text-white font-semibold">About</h4>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>
                  <a
                    href="https://www.ahsaanullah.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    25 JS Projects
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    Ahsaan Ullah 
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white font-semibold">Follow us</h4>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>
                  <a
                    href="https://github.com/ahsaanullah0088"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white font-semibold">Legal</h4>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Sahand's Blog. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/ahsaanullah00888" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <BsFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/ahsaanra_jput/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <BsInstagram size={20} />
            </a>
            <a href="https://github.com/ahsaanullah0088" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
