import React from 'react'

const footer = () => {
  return (
    <div className='inset'>
     <div className=" bg-gray-950 text-white py-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Company</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Safety Center</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Community Guidelines</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Legal</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="hover:underline">Cookies Policy</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Law Enforcement</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Advertise with Us</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Partnerships</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center md:text-left">
              <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default footer
