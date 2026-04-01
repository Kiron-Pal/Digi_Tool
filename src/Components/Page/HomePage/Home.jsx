import UsersCounts from './ActiveUsers/UsersCounts';
import HeroSection from './Hero/HeroSection';
import Nav from './NavigationMenu/Nav';
import ReadyWorkflow from './ReadyWorkflow/ReadyWorkflow';
import Footer from './Footer/Footer';
import PremiumDigitalTools from './PremiumDigitalTools/PremiumDigitalTools';
import GetStartedInSteps from './GetStartedInSteps/GetStartedInSteps';
import SimpleTransparentPricing from './SimpleTransparentPricing/SimpleTransparentPricing';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [data, setData] = useState([]);

  // Data Fetch
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/CardData.json');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  // Store Card Click Data
  const [addToCard, setAddToCard] = useState([]);

  // Button Color Change
  const [activeCard, setActiveCard] = useState(null);
  const isAdded = id => activeCard === id;

  // Buy Now Button Click handle function
  const handleBuyNow = data => {
    // check if already added
    const exists = addToCard.some(item => item.id === data.id);

    if (exists) {
      toast.error(`${data.name} already added to cart!`);
      return;
    }

    setAddToCard(prev => [...prev, data]);
    setActiveCard(data.id);
    toast.success(`${data.name} added to cart!`);
  };

  // Your Cart Remove Functionality
  const handleRemoveCart = (id, title) => {
    const removedItem = addToCard.filter(item => item.id !== id);
    setAddToCard(removedItem);
    toast.warning(`${title} removed from cart`);
  };

  // Proceed to Checkout Functionality
  const handleProceedToCheckout = () => {
    setAddToCard([]);
    setActiveCard(null);
    toast.success('Checkout completed successfully!');
  };

  return (
    <>
      <Nav addToCardLengthCountData={addToCard} />
      <HeroSection />
      <UsersCounts />
      <PremiumDigitalTools
        cardData={data}
        onHandleClick={handleBuyNow}
        handleChangeButtonStyle={isAdded}
        activeCardStoreData={addToCard}
        activeId={activeCard}
        handleRemoveCart={handleRemoveCart}
        handleProceedToCheckout={handleProceedToCheckout}
      />
      <GetStartedInSteps />
      <SimpleTransparentPricing />
      <ReadyWorkflow />
      <Footer />
    </>
  );
};

export default Home;
