export default function Footer() {
  return (
    <footer className="bg-[#0F0F10] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/Photos/beatsLogo.png" alt="Beats Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">Beats</span>
            </div>
            <p className="text-gray-300">Premium audio experiences for music lovers worldwide.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Earbuds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Icons/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Icons/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Icons/twitter.png" alt="twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-300">
          <p>&copy; Created by Jayanth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
