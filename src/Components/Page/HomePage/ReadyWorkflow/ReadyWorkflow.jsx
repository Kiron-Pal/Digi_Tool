const ReadyWorkflow = () => {
  return (
    <section className="primaryGradient py-20">
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Ready Workflow Details */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-[40px] text-white font-extrabold">
            Ready to Transform Your Workflow?
          </h2>
          <p className="textChange">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br className="hidden sm:block" /> Start your free
            trial today.
          </p>
        </div>

        {/* 2 Button */}
        <div className="flex items-center gap-4">
          <button className="bg-white py-2 px-4  rounded-3xl text-primary text-lg capitalize cursor-pointer font-semibold sm:px-2 lg:px-4">
            Explore Products
          </button>

          <button className="flex items-center gap-1 border border-white text-white  py-2 px-4 rounded-3xl hover:text-primaryEnd text-lg capitalize cursor-pointer font-semibold duration-300 hover:bg-white sm:px-2 lg:px-4">
            Watch Demo
          </button>
        </div>

        {/* last text */}
        <div className="text-center">
          <p className="textChange">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyWorkflow;
