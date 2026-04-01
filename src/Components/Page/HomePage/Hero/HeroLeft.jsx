import { Play } from 'lucide-react';
import icons from '../../../../../public/assets/Group 5.png';

const HeroLeft = () => {
  return (
    <div className="md:basis-[50%] space-y-4 px-3">
      {/* Left Context */}
      <div>
        {/* Hero Left details */}
        <div className="space-y-4 text-center py-5 sm:text-left">
          <div
            className="bg-[#E1E7FF] max-w-max px-4 
          items-center gap-2 py-1 rounded-full flex mx-auto sm:mx-0"
          >
            <img src={icons} alt="icons" />
            <h2
              className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
             bg-clip-text text-transparent inline-block "
            >
              New: AI-Powered Tools Available
            </h2>
          </div>

          <h1 className="text-3xl text-hadingColor sm:text-4xl lg:text-5xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p>
            Access premium AI tools, design assets, templates, and productivity{' '}
            <br className="hidden lg:block" />
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          {/* Button 2 */}
          <div className="flex items-center gap-4">
            <button className="primaryGradient py-3 px-4 rounded-full text-white text-lg capitalize cursor-pointer font-semibold sm:px-2 lg:px-4">
              Explore Products
            </button>

            <button className="flex items-center gap-1 border text-primary border-primary py-3 px-4 rounded-full hover:text-white text-lg capitalize cursor-pointer font-semibold duration-300 hover:bg-primary sm:px-2 lg:px-4">
              <Play />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
