import { useState } from "react";
import searchIcon from "/images/search-icon.png";
import whiteHoodie from "/images/white-hoodie.png";
import greenHoodie from "/images/green-hoodie.png";
import redHoodie from "/images/red-hoodie.png";
import whiteCap from "/images/white-cap.png";
import redCap from "/images/red-cap.png";
import greenCap from "/images/green-cap.png";

const products = [
  {
    id: 1,
    name: "African Warrior's Hoodie",
    price: 20,
    color: "White",
    category: "Clothing",
    image: whiteHoodie,
  },
  {
    id: 2,
    name: "African Warrior's Hoodie",
    price: 20,
    color: "Green",
    category: "Clothing",
    image: greenHoodie,
  },
  {
    id: 3,
    name: "African Warrior's Hoodie",
    price: 20,
    color: "Red",
    category: "Clothing",
    image: redHoodie,
  },
  {
    id: 4,
    name: "African Warrior's Cap",
    price: 12.5,
    color: "White",
    category: "Accessories",
    image: whiteCap,
  },
  {
    id: 5,
    name: "African Warrior's Cap",
    price: 10.7,
    color: "Red",
    category: "Accessories",
    image: redCap,
  },
  {
    id: 6,
    name: "African Warrior's Cap",
    price: 17,
    color: "Green",
    category: "Accessories",
    image: greenCap,
  },
  {
    id: 7,
    name: "African Warrior's T-Shirt",
    price: 15,
    color: "White",
    category: "Clothing",
    image: whiteHoodie,
  },
  {
    id: 8,
    name: "African Warrior's T-Shirt",
    price: 15,
    color: "Green",
    category: "Clothing",
    image: greenHoodie,
  },
  {
    id: 9,
    name: "African Warrior's T-Shirt",
    price: 15,
    color: "Red",
    category: "Clothing",
    image: redHoodie,
  },
  {
    id: 10,
    name: "African Warrior's Mug",
    price: 8,
    color: "White",
    category: "Accessories",
    image: whiteCap,
  },
  {
    id: 11,
    name: "African Warrior's Mug",
    price: 8,
    color: "Green",
    category: "Accessories",
    image: greenCap,
  },
  {
    id: 12,
    name: "African Warrior's Mug",
    price: 8,
    color: "Red",
    category: "Accessories",
    image: redCap,
  },
];

const categories = ["All", "Clothing", "Accessories"];

export default function Store() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5 md:p-10 md:pt-24">
      <div className="sticky top-0 bg-white z-10 w-full flex flex-col md:flex-row items-center md:justify-between gap-4 mb-6">
        <h2 className="text-left text-2xl font-bold mb-4 md:mb-0 md:w-1/4">
          ONLINE STORE
        </h2>
        <div className="w-full flex">
          <div className="flex items-center border rounded-[40px] w-full md:w-1/2 my-6">
            <input
              type="text"
              placeholder="What item do you need?"
              className="p-2 flex-1 outline-none rounded-l-[40px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={searchIcon} alt="Search" className="w-5 h-5 mr-2" />
          </div>
          <select
            className="border p-2 rounded w-full h-12 md:w-1/6 ml-auto mb-6"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{ background: "#F4F4F4" }}
            className="= rounded-[20px] p-4"
          >
            <div className="w-full overflow-hidden rounded-[20px] mb-4 md:h-[320px] h-52">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-start py-4 justify-center">
              <p className="text-xl font-bold">£{product.price.toFixed(2)}</p>
              <p className="text-lg font-semibold mt-2">{product.name}</p>
              <p className="text-gray-600">{product.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
