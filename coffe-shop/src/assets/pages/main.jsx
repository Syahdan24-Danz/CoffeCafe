import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <FirstPage />
      <CoffeeGallery />
      <div>
        <CoffeeShopCards />
      </div>
      <Footer />
    </>
  );
};

export default Main;
const coffeeImages = [
  {
    src: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg",
    alt: "Latte art coffee cup on wooden table",
    title: "Nisano Britoice",
    subtitle: "Danno Touker",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg",
    alt: "Latte coffee cup on wooden table",
    title: "Musiano Tartoe",
    subtitle: "Estetoro Nape",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/17359201-afdd-481b-4aea-6b3f941f5b09.jpg",
    alt: "Latte art coffee cup on blue saucer with spoon",
    title: "Dutwine Ratnot",
    subtitle: "Exteonto lorum",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/4a4a5167-14c1-4aa2-1dab-c2639c4bbe5e.jpg",
    alt: "Croissant with red berries on white plate",
    title: "Croissant Special",
    subtitle: "Freshly baked",
  },
];

const coffeeShops = [
  {
    img: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg",
    title: "Nisano Britoice",
    rating: 4.8,
    description: "Delicious latte with smooth foam and rich flavor.",
    price: "$4.50",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg",
    title: "Musiano Tartoe",
    rating: 4.5,
    description:
      "Classic cappuccino with a perfect balance of espresso and milk.",
    price: "$3.80",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/17359201-afdd-481b-4aea-6b3f941f5b09.jpg",
    title: "Dutwine Ratnot",
    rating: 4.9,
    description:
      "Creamy latte art coffee served with a side of fresh croissant.",
    price: "$5.20",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg",
    title: "Benco Giana",
    rating: 4.7,
    description: "Freshly baked pastries paired with aromatic coffee.",
    price: "$6.00",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex text-yellow-400 text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <i key={"full" + i} className="fas fa-star"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={"empty" + i} className="far fa-star"></i>
      ))}
    </div>
  );
};

const CoffeeCard = ({ img, title, rating, description, price }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img className="w-full h-48 object-cover" src={img} alt={title} />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <StarRating rating={rating} />
      <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <button className="bg-black text-white text-xs font-semibold rounded-full px-4 py-2 hover:bg-gray-800 transition">
          Beli
        </button>
        <span className="font-semibold text-lg">{price}</span>
      </div>
    </div>
  </div>
);

const CoffeeShopCards = () => (
  <section className="flex flex-col py-[2rem] px-[7%]">
    <div className="flex flex-row justify-between items-center p-2">
      <h1 className="font-semibold text-xl">Our Menu</h1>
      <Link
        className="border-2 border-gray-500 bg-gray-200 py-2 px-4 rounded-xl"
        to="/menu"
      >
        Show All
      </Link>
    </div>
    <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {coffeeShops.map((shop, idx) => (
        <CoffeeCard key={idx} {...shop} />
      ))}
    </div>
  </section>
);

const FirstPage = () => {
  return (
    <section className="bg-white w-full shadow-lg overflow-hidden pt-18">
      <div className="h-[90vh] relative overflow-hidden rounded-b-[4rem]">
        <img
          alt="Coffee shop interior with neon sign and tables"
          className="h-100vh w-full object-cover rounded-b-[4rem]"
          height="160"
          src="https://storage.googleapis.com/a1aa/image/7ebb134d-6470-4211-2bf9-a0b8cccbba2f.jpg"
          width="450"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
          <h2 className="text-white font-extrabold text-3xl max-w-xs leading-tight">
            Kreasikan Kopi Sempurnamu Di Sini
          </h2>
          <p className="text-white text-sm mt-1 max-w-xs leading-tight">
            Dari aroma biji pilihan hingga sentuhan akhir yang manis, rancang
            sendiri minuman kopi yang paling mewakili dirimu.
          </p>
          <button className="mt-4 bg-[#fbbf24] text-black text-xs font-semibold rounded-full px-6 py-1">
            Mulai Racik Kopi
          </button>
        </div>
      </div>
    </section>
  );
};

const ButtonBuy = () => {
  return (
    <div className="flex flex-row w-full justify-left items-center gap-4">
      <button className="px-8 py-2 bg-blue-500 rounded-xl">Buy</button>
      <p className="font-semibold text-neutral-700">$20</p>
    </div>
  );
};

const CoffeeGallery = () => (
  <section className="py-8 mx-[7%]">
    <h2 className="text-center font-extrabold text-xl mb-6">Coffee Gallery</h2>
    <div className="flex flex-row gap-2 h-64">
      <div className="w-1/4 h-full">
        <img
          className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          src="https://storage.googleapis.com/a1aa/image/cef4caa7-f540-4e24-e1a0-468277637da8.jpg"
          alt=""
        />
      </div>
      <div className="w-2/4 grid grid-cols-2 grid-rows-2 gap-1">
        {coffeeImages.map(({ src, alt }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={src}
              alt={alt}
            />
          </div>
        ))}
      </div>
      <div className="w-1/4 h-full">
        <img
          className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-110 animate transition-transform duration-300 ease-in-out"
          src="https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
);
