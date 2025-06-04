import { Link } from "react-router-dom";

const PopupBeforeCheckout = ({ item, onClose }) => {
  return (
    <div className="w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-md shadow-lg max-w-md">
      <div className="flex justify-end">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          X
        </button>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-1/2">
          <img
            src={item.imageUrl || "https://via.placeholder.com/150"}
            alt={item.name || "Item"}
            className="mb-4"
          />
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-xl font-semibold">
              {item.name || "Nama Coffee"}
            </h1>
            <p className="text-gray-700">
              {item.description || "Deskripsi Coffee"}
            </p>
            <p className="text-lg font-bold">Harga: ${item.price || "10.00"}</p>
          </div>
          <div className="mt-4 text-center">
            <Link
              to="/checkout"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBeforeCheckout;
