import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroSection = () => {
  return (
    <section className="containers flex flex-col justify-between items-center gap-10 sm:gap-4 py-20 md:flex-row">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
