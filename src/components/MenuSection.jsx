import {
  DessertIcon,
  GlassWater,
  GlassWaterIcon,
  PizzaIcon,
  SandwichIcon,
} from "lucide-react";
import pizzaImg from '../assets/images/pizzaImg.png'
import burgerImg from '../assets/images/burgerImg.png'
import drinksImg from '../assets/images/drinksImg.png'
import dessertImg from '../assets/images/dessertImg.png'
import {React ,useState } from "react";

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
      <div className="flex flex-col md:flex-row justify-center space-x-50 mb-8 py-10 border-b border-zinc-600">
        <div
          onClick={() => setCurrentMenu("pizza")}
          className="flex flex-col justify-center items-center"
        >
          <img src={pizzaImg} alt="Pizza Image" className="h-36" />
          <button className="text-[#F4452C] text-3xl pacifico-regular">
            Pizza
          </button>
        </div>

        <div
          onClick={() => setCurrentMenu("sandwiches")}
          className="flex flex-col justify-center items-center"
        >
          <img src={burgerImg} alt="Burger Image" className="h-36" />
          <button className="text-[#F1703D] text-3xl pacifico-regular">
            Sandwiches
          </button>
        </div>
        <div
          onClick={() => setCurrentMenu("drinks")}
          className="flex flex-col justify-center items-center"
        >
          <img src={drinksImg} alt="Drinks Image" className="h-36" />
          <button className="text-[#FEBA11] text-3xl pacifico-regular">
            Drinks
          </button>
        </div>
        <div
          onClick={() => setCurrentMenu("desserts")}
          className="flex flex-col justify-center items-center"
        >
          <img src={dessertImg} alt="Dessert Image" className="h-36" />
          <button className="text-[#CFDF5A] text-3xl pacifico-regular">
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
              <p className="text-3xl text-[#CFDF5A] mb-4 pacifico-regular">
                {item.price}
              </p>
            </div>
            <p className="text-base font-bold text-start py-2 roboto-slab-small">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Explore Full Menu Button */}
      <div className="text-center mt-10">
        <button className="text-[#CFDF5A] border-2 border-[#CFDF5A] text-2xl py-2 px-6 rounded-full hover:bg-lime-400 hover:text-black bebas-neue-regular">
          EXPLORE FULL MENU
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
