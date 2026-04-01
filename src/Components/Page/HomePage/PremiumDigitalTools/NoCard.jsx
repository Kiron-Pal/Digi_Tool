import { ShoppingCart } from 'lucide-react';

const NoCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center text-gray-400">
      <ShoppingCart size={35} color="#627382" />
      <p className="capitalize">Your card is empty</p>
    </div>
  );
};

export default NoCard;
