import Header from "../components/header";
import Footer from "../components/footer";
import PopupBeforeCheckout from "../components/PopupBeforeCheckout";

import { useState } from "react";

const menuItems = [
  {
    img: "https://storage.googleapis.com/a1aa/image/4a4a5167-14c1-4aa2-1dab-c2639c4bbe5e.jpg",
    title: "Croissant with Berries",
    subtitle: "Freshly baked",
    rating: 5,
    price: "$3.50",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg",
    title: "Nisano Britoice",
    subtitle: "Danno Touker",
    rating: 4,
    price: "$4.50",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg",
    title: "Musiano Tartoe",
    subtitle: "Estetoro Nape",
    rating: 4,
    price: "$3.80",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg",
    title: "Benco Giana",
    subtitle: "Dunance-Kep",
    rating: 5,
    price: "$6.00",
    badge: "95", // Bisa berarti skor atau item populer
  },
  // Menambahkan 16 item baru
  {
    img: "https://storage.googleapis.com/a1aa/image/4a4a5167-14c1-4aa2-1dab-c2639c4bbe5e.jpg", // img 1
    title: "Red Velvet Delight",
    subtitle: "Smooth & Creamy",
    rating: 5,
    price: "$5.20",
    badge: "New",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg", // img 2
    title: "Choco Lava Cake",
    subtitle: "Warm & Gooey",
    rating: 4,
    price: "$4.75",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg", // img 3
    title: "Blueberry Muffin",
    subtitle: "Soft & Fluffy",
    rating: 4,
    price: "$2.90",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg", // img 4
    title: "Caramel Macchiato",
    subtitle: "Rich Espresso Blend",
    rating: 5,
    price: "$5.50",
    badge: "Popular",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4a4a5167-14c1-4aa2-1dab-c2639c4bbe5e.jpg", // img 1
    title: "Strawberry Shortcake",
    subtitle: "Classic Favorite",
    rating: 4,
    price: "$4.90",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg", // img 2
    title: "Iced Lemon Tea",
    subtitle: "Refreshing & Cool",
    rating: 3,
    price: "$2.50",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg", // img 3
    title: "Vanilla Bean Frappe",
    subtitle: "Sweet & Chilled",
    rating: 5,
    price: "$5.80",
    badge: "Special",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg", // img 4
    title: "Espresso Con Panna",
    subtitle: "Bold with Cream",
    rating: 4,
    price: "$3.20",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4a4a5167-14c1-4aa2-1dab-c2639c4bbe5e.jpg", // img 1
    title: "Apple Pie Slice",
    subtitle: "Warm & Cinnamon",
    rating: 4,
    price: "$4.00",
    badge: "Homemade",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg", // img 2
    title: "Matcha Latte",
    subtitle: "Earthy & Smooth",
    rating: 5,
    price: "$5.10",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg", // img 3
    title: "Oatmeal Raisin Cookie",
    subtitle: "Chewy & Sweet",
    rating: 3,
    price: "$1.50",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg", // img 4
    title: "Dark Chocolate Mocha",
    subtitle: "Intense & Velvety",
    rating: 5,
    price: "$5.75",
    badge: "Rich",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4a4a5167-14c1-4aa2-1dab-c2639c4bbe5e.jpg", // img 1
    title: "Lemon Poppy Seed Loaf",
    subtitle: "Zesty & Moist",
    rating: 4,
    price: "$3.75",
    badge: null,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/08ed816e-97dc-43ed-2fb1-149855f8ca98.jpg", // img 2
    title: "Affogato Classic",
    subtitle: "Espresso Over Ice Cream",
    rating: 5,
    price: "$4.80",
    badge: "Dessert",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4c8ec572-eba2-4e66-e114-32d5a263ad26.jpg", // img 3
    title: "Pistachio Croissant",
    subtitle: "Nutty & Buttery",
    rating: 4,
    price: "$4.20",
    badge: "Limited",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/ca063eb1-0e09-42a7-a935-e6730a55a42e.jpg", // img 4
    title: "Cold Brew Concentrate",
    subtitle: "Smooth & Strong",
    rating: 5,
    price: "$4.50",
    badge: null,
  },
];

const ratingStars = (count) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      stars.push(
        <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
      );
    } else {
      stars.push(
        <i key={i} className="far fa-star text-yellow-400 text-xs"></i>
      );
    }
  }
  return stars;
};

const MenuCard = ({ img, title, subtitle, rating, price, badge, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-xl shadow-md cursor-pointer relative w-full flex-shrink-0"
  >
    <img src={img} alt={title} className="rounded-t-xl w-full object-cover" />
    {badge && (
      <div className="absolute top-2 right-2 bg-yellow-400 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {badge}
      </div>
    )}
    <div className="p-2 text-xs font-semibold">
      <p className="truncate">{title}</p>
      <p className="text-gray-400">{subtitle}</p>
      <div className="flex gap-1 mt-1">{ratingStars(rating)}</div>
      <p className="mt-1 font-bold">{price}</p>
    </div>
  </div>
);
const MenuPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onClickHandler = (item) => {
    setSelectedItem(item); // Menyimpan item yang dipilih
    setIsPopupVisible(true); // Menampilkan popup
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Menutup popup
  };

  return (
    <>
      <Header />
      {isPopupVisible && (
        <PopupBeforeCheckout item={selectedItem} onClose={closePopup} />
      )}
      <section className="min-h-screen pt-18">
        <div className="grid grid-cols-6 gap-4 overflow-x-auto scrollbar-hide bg-[#f5f5f5] py-[2%] mx-[5%]">
          {menuItems.map((item) => (
            <MenuCard
              onClick={() => onClickHandler(item)}
              key={item.id}
              {...item}
            />
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
};
export default MenuPage;
