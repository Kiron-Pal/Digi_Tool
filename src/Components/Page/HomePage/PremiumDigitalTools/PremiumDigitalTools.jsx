import { useState } from 'react';
import Cards from './Cards';
import Products from './Products';
import DetailsCard from './DetailsCard';

const PremiumDigitalTools = ({
  cardData,
  onHandleClick,
  handleChangeButtonStyle,
  activeCardStoreData,
  activeId,
  handleRemoveCart,
  handleProceedToCheckout,
}) => {
  // Card Details Render data
  const DataMapProducts = cardData.map(item => (
    <Products
      key={item.id}
      cardData={item}
      onHandleClick={onHandleClick}
      handleChangeButtonStyle={handleChangeButtonStyle}
      activeId={activeId}
    />
  ));

  const [page, setPage] = useState('products');

  return (
    <section className="py-10 containers">
      {/* Title  SubTitle And 2 Button */}
      <div className="text-center space-y-4">
        {/* title Subtitle */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">
            Premium Digital Tools
          </h2>
          <p>
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>

        {/* 2 Button */}
        <div className="flex items-center justify-center gap-5">
          {/* Tabs */}
          <div className="tabs tabs-box rounded-full">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full bg-transparent 
               checked:bg-gradient-to-r 
               checked:from-[#4F39F6] 
               checked:to-[#9514FA] 
               checked:text-white"
              aria-label="Products"
              checked={page === 'products'}
              onChange={() => setPage('products')}
            />

            <input
              type="radio"
              name="my_tabs_1"
              className="tab  rounded-full bg-transparent 
               checked:bg-gradient-to-r 
               checked:from-[#4F39F6] 
               checked:to-[#9514FA] 
               checked:text-white"
              aria-label={`Cart (${activeCardStoreData.length})`}
              checked={page === 'cards'}
              onChange={() => setPage('cards')}
            />
          </div>
        </div>
      </div>
      {/* Card Get Started in 3 steps */}
      <div className="py-10 px-3 flex items-center justify-center">
        <div className="grid gap-5 grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3">
          {page === 'products' && DataMapProducts}
        </div>
        {page === 'cards' && (
          <DetailsCard
            activeCardStoreData={activeCardStoreData}
            handleRemoveCart={handleRemoveCart}
            handleProceedToCheckout={handleProceedToCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default PremiumDigitalTools;
