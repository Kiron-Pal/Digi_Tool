import UserImages from '../../../../../public/assets/user.png';
import PackageImage from '../../../../../public/assets/package.png';
import rocketImage from '../../../../../public/assets/rocket.png';

const GetStartedInSteps = () => {
  return (
    <section className="bg-[#F9FAFC] py-15 md:py-20 px-3">
      <div className="containers space-y-10">
        {/* Title Subtitle */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl text-hadingColor font-extrabold">
            Get Started in 3 Steps
          </h2>
          <p>Start using premium digital tools in minutes, not hours.</p>
        </div>

        {/* item Card */}
        <div className="px-4 grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* item 1 */}
          <div
            className="border relative bg-white
          transition duration-300 hover:-translate-y-1 cursor-pointer  border-[#dddd] rounded-lg flex flex-col items-center justify-center text-center gap-3  py-8 px-2"
          >
            <div className="bg-[#f3e8fe] p-3 rou rounded-full">
              <img src={UserImages} alt="icons" />
            </div>

            {/* Details */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p>
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>

            {/* Count Numbers */}
            <div className="absolute top-2 right-5">
              <div className="primaryGradient w-7 h-7 flex flex-col items-center justify-center p-2 text-white  text-2xl rounded-full">
                1
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div
            className="border relative bg-white
          transition duration-300 hover:-translate-y-1 cursor-pointer border-[#dddd] rounded-lg flex flex-col items-center justify-center text-center gap-3  py-8 px-2"
          >
            <div className="bg-[#f3e8fe] p-3 rou rounded-full">
              <img src={PackageImage} alt="icons" />
            </div>

            {/* Details */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Choose Products</h2>
              <p>
                Browse our catalog and select the tools <br />
                that fit your needs.
              </p>
            </div>

            {/* Count Numbers */}
            <div className="absolute top-2 right-5">
              <div className="primaryGradient w-7 h-7 flex flex-col items-center justify-center p-2 text-white  text-2xl rounded-full">
                2
              </div>
            </div>
          </div>
          {/* item 3 */}
          <div
            className="border relative bg-white
          transition duration-300 hover:-translate-y-1 cursor-pointer border-[#dddd] rounded-lg flex flex-col items-center justify-center text-center gap-3  py-8 px-2"
          >
            <div className="bg-[#f3e8fe] p-3 rou rounded-full">
              <img src={rocketImage} alt="icons" />
            </div>

            {/* Details */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Start Creating</h2>
              <p>
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>

            {/* Count Numbers */}
            <div className="absolute top-2 right-5">
              <div className="primaryGradient w-7 h-7 flex flex-col items-center justify-center p-2 text-white  text-2xl rounded-full">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedInSteps;
