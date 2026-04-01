const UsersCounts = () => {
  return (
    <section className="primaryGradient">
      <div className="containers flex justify-between px-3 py-10 sm:justify-around">
        {/* left Active users */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            50K+
          </h2>
          <p className="textChange">Active Users</p>
        </div>

        {/* Center Premium Tools user */}
        <div className="text-center space-y-3">
          <h2 className=" text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            200+
          </h2>
          <p className="textChange">Premium Tools</p>
        </div>

        {/* Rating */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            4.9
          </h2>
          <p className="textChange">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default UsersCounts;
