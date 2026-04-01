const Cards = ({ CardData, handleRemoveCart }) => {
  return (
    <div>
      {/* item 1 */}
      <div className="border border-[#dddd] bg-[#F9FAFC] py-4 px-3 rounded-lg">
        <div className="flex items-center justify-between">
          {/* Details And Image */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-3 rounded-full border border-[#dddd]">
              <img src={CardData?.icon} alt="image" />
            </div>

            <div>
              <h2 className="text-lg font-medium">{CardData?.name}</h2>
              <p>
                $ <span>{CardData?.price}</span>
              </p>
            </div>
          </div>

          {/* Remove Button */}
          <div>
            <button
              onClick={() => handleRemoveCart(CardData.id, CardData?.name)}
              className="text-error font-semibold cursor-pointer"
            >
              {' '}
              Remove{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
