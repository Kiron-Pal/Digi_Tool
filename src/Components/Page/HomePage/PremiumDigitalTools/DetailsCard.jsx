import Cards from './Cards';
import NoCard from './NoCard';

const DetailsCard = ({
  activeCardStoreData,
  handleRemoveCart,
  handleProceedToCheckout,
}) => {
  // Cart Page Data render
  const RenderCartPage = activeCardStoreData.map(item => (
    <Cards key={item.id} CardData={item} handleRemoveCart={handleRemoveCart} />
  ));

  // Total Price
  const total = activeCardStoreData.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {/* title Subtitle */}
      <div className="text-left space-y-4 w-full">
        <div className="border border-[#ddd] w-full rounded-lg py-20 space-y-10">
          {activeCardStoreData.length === 0 ? (
            <NoCard />
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-2xl font-extrabold">Your Cart</h2>
              </div>

              {/* item Card */}
              <div className="px-3 grid grid-cols-1 gap-2">
                {RenderCartPage}
              </div>

              {/* Total Price Sum */}
              <div className="px-4 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">Total:</p>
                  <h2 className="text-2xl font-bold">
                    $ <span>{total}</span>
                  </h2>
                </div>
                <button
                  onClick={handleProceedToCheckout}
                  className="btn w-full rounded-2xl primaryGradient text-white font-medium cursor-pointer"
                >
                  Proceed To Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
