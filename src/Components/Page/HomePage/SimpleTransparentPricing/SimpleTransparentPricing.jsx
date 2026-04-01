import SimpleCards from './SimpleCards';
import { useEffect, useState } from 'react';

const SimpleTransparentPricing = () => {
  const [data, setData] = useState([]);

  // Data Fetch
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/SimpleTransparentData.json');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <section className="containers py-10 md:py-20 space-y-10">
      {/* Title Subtitle */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl text-hadingColor font-extrabold">
          Simple, Transparent Pricing
        </h2>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Card Start trial */}
      <div className="grid items-center px-3 justify-center grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {data.map((item, i) => (
          <SimpleCards key={item.id} CardData={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SimpleTransparentPricing;
