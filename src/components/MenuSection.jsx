import {
  DessertIcon,
  GlassWater,
  GlassWaterIcon,
  PizzaIcon,
  SandwichIcon,
} from "lucide-react";
import React, { useState } from "react";

// Menu items data
const menuItems = {
  pizza: [
    { name: "Margherita", description: "Tomatoes, mozzarella", price: "$18" },
    {
      name: "Quattro Formaggi",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: "$24",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "$26",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "$26",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "$26",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "$26",
    },
  ],
  sandwiches: [
    {
      name: "Pomodori Pancetta",
      description: "Tomatoes, bacon, onion",
      price: "$22",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "$28",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "$28",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "$28",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "$28",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "$28",
    },
  ],
  drinks: [
    { name: "Coca Cola", description: "Refreshing soda", price: "$5" },
    { name: "Lemonade", description: "Fresh squeezed", price: "$6" },
    { name: "Lemonade", description: "Fresh squeezed", price: "$6" },
    { name: "Lemonade", description: "Fresh squeezed", price: "$6" },
    { name: "Lemonade", description: "Fresh squeezed", price: "$6" },
    { name: "Lemonade", description: "Fresh squeezed", price: "$6" },
    { name: "Lemonade", description: "Fresh squeezed", price: "$6" },
  ],
  desserts: [
    { name: "Tiramisu", description: "Classic Italian dessert", price: "$8" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "$9" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "$9" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "$9" },
  ],
};

const MenuSection = () => {
  const [currentMenu, setCurrentMenu] = useState("pizza"); // Default menu is pizza

  return (
    <div
      className="bg-gray-900 text-white py-30 px-4 lg:px-[12vw]"
      style={{ backgroundImage: "url(menubgImg.jpg)" }}
    >
      <h2 className="text-6xl font-semibold text-center mb-5 bebas-neue-regular">
        CAST YOUR EYES UPON OUR ENCHANTING MENU
      </h2>
      <p className="text-2xl text-center mb-8 pacifico-regular">
        Deliciousness! This is where it happens!
      </p>

      {/* Menu Categories */}
      <div className="flex justify-center space-x-50 mb-8 py-10 border-b border-zinc-600">
        <div
          onClick={() => setCurrentMenu("pizza")}
          className="flex flex-col justify-center items-center"
        >
          <PizzaIcon className="text-red-500 " size={80} />
          <button className="text-red-500 hover:text-red-500 text-3xl pacifico-regular">
            Pizza
          </button>
        </div>

        <div
          onClick={() => setCurrentMenu("sandwiches")}
          className="flex flex-col justify-center items-center"
        >
          <SandwichIcon className="text-orange-500 " size={80} />
          <button className="text-orange-500 hover:text-orange-500 text-3xl pacifico-regular">
            Sandwiches
          </button>
        </div>
        <div
          onClick={() => setCurrentMenu("drinks")}
          className="flex flex-col justify-center items-center"
        >
          <GlassWaterIcon className="text-blue-300 " size={80} />
          <button className="text-blue-300 hover:text-blue-300 text-3xl pacifico-regular">
            Drinks
          </button>
        </div>
        <div
          onClick={() => setCurrentMenu("desserts")}
          className="flex flex-col justify-center items-center"
        >
          <DessertIcon className="text-yellow-300 " size={80} />
          <button className="text-yellow-300 hover:text-yellow-300 text-3xl pacifico-regular">
            Desserts
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems[currentMenu].map((item, index) => (
          <div key={index} className=" p-3 flex flex-col justify-center ">
            <div className="flex flex-row justify-between items-center border-b border-dashed border-zinc-600 py-2">
              <h3 className="text-3xl font-semibold uppercase bebas-neue-regular">
                {item.name}
              </h3>
              <p className="text-3xl text-lime-400 mb-4 pacifico-regular">
                {item.price}
              </p>
            </div>
            <p className="text-sm font-bold pacifico-regular text-start py-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Explore Full Menu Button */}
      <div className="text-center mt-10">
        <button className="text-lime-400 border-2 border-lime-400 text-2xl py-2 px-6 rounded-full hover:bg-lime-400 hover:text-black bebas-neue-regular">
          EXPLORE FULL MENU
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
