import { Link } from "react-router-dom";
import { useState } from "react";

const PopupBeforeCheckout = ({ item, onClose }) => {
  const [amount, setAmount] = useState(1);
  if (!item) return null;
  return (
    <div className="w-[75%] h-75 gap-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-md shadow-lg max-w-md">
      <ButtonClose onClose={onClose} />

      <div className="flex h-full w-full">
        <ImgMockup item={item} />
        <ItemDetails item={item} amount={amount} setAmount={setAmount} />
      </div>
    </div>
  );
};

export default PopupBeforeCheckout;

const ButtonClose = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

const ImgMockup = ({ item }) => {
  return (
    <div className="w-1/2">
      <img
        className="w-full h-full object-cover"
        src={item.img || "https://via.placeholder.com/150"}
        alt={item.name || "Item"}
      />
    </div>
  );
};

const ButtonBuy = ({ onClick }) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <Link
        to="/checkout"
        onClick={onClick}
        className="bg-black w-1/2 text-center text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Buy
      </Link>
      <button className="bg-gray-200 text-gray-800 w-1/2 text-center px-4 py-2 rounded-md hover:bg-gray-300 transition">
        Cart
      </button>
    </div>
  );
};

const ItemDetails = ({ item, amount, setAmount }) => {
  return (
    <div className="pt-8 pb-4 px-4 w-1/2 h-full flex flex-col justify-between">
      <h2 className="text-lg font-semibold">{item.title || "Item Name"}</h2>
      <p className="text-gray-600">{item.subtitle || "Item Description"}</p>
      <p className="text-xl font-bold mt-2">${item.price || "$0.00"}</p>
      <Amount amount={amount} setAmount={setAmount} />
      <CartAmount price={item.price} amount={amount} />
      <ButtonBuy />
    </div>
  );
};

const Amount = ({ amount, setAmount }) => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <button className="p-2" onClick={() => setAmount(amount - 1)}>
        -
      </button>
      <p>{amount}</p>
      <button className="p-2" onClick={() => setAmount(amount + 1)}>
        +
      </button>
    </div>
  );
};
const CartAmount = ({ price, amount }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="text-gray-600">Total:</span>
      <span className="text-xl font-bold">${(amount * price).toFixed(2) || "$0.00"}</span>
    </div>
  );
};
