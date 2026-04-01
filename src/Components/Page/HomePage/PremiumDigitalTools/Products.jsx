// import writingImages from '../../../../../public/assets/products/writing_2327400 1.png';

const Products = ({
  cardData,
  onHandleClick,
  handleChangeButtonStyle,
  activeId,
}) => {
  const badgeColors = {
    'Best Seller': 'bg-[#FEF3C6] text-[#BB4D00] ',
    Popular: 'bg-purple-100 text-purple-600',
    New: 'bg-green-100 text-green-600',
  };

  return (
    <>
      <div
        className="card  bg-base-100 border border-[#dddd] rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 cursor-pointer
      2xl:max-w-92"
      >
        <div className="card-body relative ">
          <div>
            <span
              className={`badge badge-xs absolute right-4 top-3 py-3 px-3 rounded-full  font-medium text-sm ${
                badgeColors[cardData?.badge]
              }`}
            >
              {cardData?.badge}
            </span>
          </div>

          {/* Images */}
          <div className="w-12 h-12 border border-[#ddd] rounded-full flex items-center justify-center">
            <img src={cardData?.icon} alt="icons" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{cardData?.name}</h2>
              <p>{cardData?.description}</p>
            </div>
            <span className="text-xl font-bold">
              ${cardData?.price}{' '}
              <span className="text-lg text-gray-400 capitalize">
                /{cardData?.billing}
              </span>
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {cardData?.features.map((item, i) => (
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
              onClick={() => {
                onHandleClick(cardData);
                // handleClick(cardData.id);
              }}
              className={`px-4 py-2 rounded-full w-full cursor-pointer ${
                activeId === cardData.id
                  ? 'bg-green-500 text-white'
                  : 'primaryGradient text-white'
              }`}
            >
              {handleChangeButtonStyle(cardData.id) ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 inline-block"
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
                  Added to Cart!
                </>
              ) : (
                cardData.buttonText
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
