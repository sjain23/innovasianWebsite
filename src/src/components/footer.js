import React from 'react'
import NavLink from 'react-router-dom'

const bgStyle = {
    background: "linear-gradient(90.05deg, #FB9600 16.94%, #FFFFFF 88.08%)",
    opacity: ".95",
}

function Footer() {
    return (
        <footer className="" style={bgStyle}>
      <div className="hover:border-blue-500 container mx-auto mt-12 px-6 pt-10 pb-6">
        <div className="flex flex-wrap hover:border-blue-500">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  FAQ
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Help
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Terms
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Facebook
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Linkedin
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-4 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Official Blog
                </a>
              </li>
              <li className="mt-4">
                <a to="/about" className="hover:underline text-gray-600 hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li className="mt-4">
                <a href="mailto:hello@coachandcrew.com" className="hover:underline text-gray-600 hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer