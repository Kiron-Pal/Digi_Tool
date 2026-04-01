const SimpleCards = ({ CardData, index }) => {
  const isPopular = index === 1;
  return (
    <div
      className={`card transition duration-300 hover:-translate-y-2  bg-[#F9FAFC] rounded-2xl shadow-sm border border-[#ddd] 2xl:w-92 ${
        isPopular
          ? 'primaryGradient text-white scale-105'
          : 'bg-[#F9FAFC] border-[#ddd]'
      }`}
    >
      <div className="card-body relative">
        {isPopular && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <span className="bg-[#FEF3C6] text-[#BB4D00] py-1.5 px-3 rounded-full font-medium">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold">{CardData?.title}</h2>
          {isPopular ? (
            <>
              <p className="text-white">{CardData?.subtitle}</p>
            </>
          ) : (
            <>
              <p>{CardData?.subtitle}</p>
            </>
          )}
        </div>

        <div>
          <span className="text-2xl font-semibold">
            ${CardData?.price}{' '}
            {isPopular ? (
              <>
                <span className="text-white text-xl capitalize">
                  /{CardData?.billing}
                </span>
              </>
            ) : (
              <span className="text-gray-400 text-xl capitalize">
                /{CardData?.billing}
              </span>
            )}
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {CardData.features.map((item, i) => (
            <li key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            className={`btn rounded-full btn-block ${isPopular ? 'text-primary shadow-none' : 'primaryGradient text-white'}`}
          >
            {CardData?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCards;
