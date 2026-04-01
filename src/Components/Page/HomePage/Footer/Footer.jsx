import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white pt-22 pb-8 px-3 space-y-4">
      <div className="containers grid items-center justify-center grid-cols-1 gap-8 md:flex md:items-center md:justify-between pb-10">
        {/* left Footer */}
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">DigiTools</h2>
          <p>
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>

        {/* center Footer */}
        <div className="flex items-center gap-5 justify-between">
          {/* Fast list */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Product</h2>
            <ul className="text-[#FAFAFA]/30 space-y-2">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>

          {/* Center List */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Company</h2>
            <ul className="text-[#FAFAFA]/30 space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          {/* Right List */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Resources</h2>
            <ul className="text-[#FAFAFA]/30 space-y-2">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Footer  */}
        <div className="mx-auto sm:mx-0 space-y-4">
          <h2 className="text-lg font-medium">Social Links</h2>

          <div className="flex gap-4">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black">
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>

            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>

      {/* last Content */}
      <div className="containers border-t border-[#FAFAFA]/30 flex flex-col gap-4 pt-4 items-center justify-between sm:flex-row">
        <small className="text-[#FAFAFA]/30">
          © 2026 Digitools. All rights reserved.
        </small>

        <ul className="flex gap-4 items-center justify-between">
          <p className="text-[#FAFAFA]/30">Privacy Policy</p>
          <p className="text-[#FAFAFA]/30">Terms of Service</p>
          <p className="text-[#FAFAFA]/30">Cookies</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
