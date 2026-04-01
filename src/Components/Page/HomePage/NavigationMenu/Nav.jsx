import { ShoppingCart } from 'lucide-react';

const navItems = [
  {
    id: 2,
    name: 'Products',
    path: '/products',
    dropdown: true,
    subItems: [
      { id: 21, name: 'All Products', path: '/products' },
      { id: 22, name: 'Popular', path: '/products/popular' },
      { id: 23, name: 'New Arrivals', path: '/products/new' },
    ],
  },
  {
    id: 3,
    name: 'Features',
    path: '/features',
    dropdown: true,
    subItems: [
      { id: 31, name: 'AI Tools', path: '/features/ai' },
      { id: 32, name: 'Automation', path: '/features/automation' },
      { id: 33, name: 'Analytics', path: '/features/analytics' },
    ],
  },
  {
    id: 4,
    name: 'Pricing',
    path: '/pricing',
  },
  {
    id: 5,
    name: 'Testimonials',
    path: '/testimonials',
  },
  {
    id: 6,
    name: 'FAQ',
    path: '/faq',
  },
];

const Nav = ({ addToCardLengthCountData }) => {
  // Navigation Menu map Render
  const Navigation = navItems.map(item => (
    <li key={item.id} className="group">
      <a
        className="font-medium transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-[#4F39F6] group-hover:to-[#9514FA] group-hover:bg-clip-text group-hover:text-transparent"
        href={item.path}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className="fixed w-full z-50 top-4 px-4">
      <nav className="containers w-full z-50 bg-gray-100/30 backdrop-blur-sm flex items-center justify-between py-3 px-3 shadow-sm rounded-full">
        {/* Logo image */}
        <div>
          <h2 className="textGradientColorApply text-3xl font-semibold">
            DigiTools
          </h2>
        </div>

        {/* Navigation Menu  */}
        <ul className="hidden  gap-4 lg:flex">{Navigation}</ul>

        {/* login Button */}
        <div className="flex gap-4">
          <button className="flex items-center font-semibold cursor-pointer gap-1">
            <span className="relative">
              {' '}
              <span className="absolute -top-5  bg-red-500 w-6 h-6 flex items-center justify-center rounded-full text-white text-sm">
                {addToCardLengthCountData.length}
              </span>
              <ShoppingCart />
            </span>{' '}
            Cart
          </button>

          {/* Get Started Buttons */}
          <button className="hidden sm:block primaryGradient py-2 px-4 rounded-full text-white text-lg capitalize cursor-pointer font-semibold">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
