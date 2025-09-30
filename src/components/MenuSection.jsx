import { useState } from "react";
import pizzaImg from '../assets/images/pizzaImg.png'
import burgerImg from '../assets/images/burgerImg.png'
import drinksImg from '../assets/images/drinksImg.png'
import dessertImg from '../assets/images/dessertImg.png'

// Menu items data
const menuItems = {
  pizza: [
    { name: "Margherita", description: "Tomatoes, mozzarella", price: "₹125" },
    {
      name: "Quattro Formaggi",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: "₹189",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "₹175",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "₹132",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "₹190",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "₹160",
    },
    {
      name: "Salmone e Pesto di Noci",
      description: "Salmon, walnut pesto",
      price: "₹141",
    },
  ],
  sandwiches: [
    {
      name: "Pomodori Pancetta",
      description: "Tomatoes, bacon, onion",
      price: "₹135",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "₹198",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "₹155",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "₹140",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "₹125",
    },
    {
      name: "Tonno al Carciofi",
      description: "Red onions, basil, capers, olives, tuna",
      price: "₹172",
    },
  ],
  drinks: [
    { name: "Coca Cola", description: "Refreshing soda", price: "₹120" },
    { name: "Lemonade", description: "Fresh squeezed", price: "₹134" },
    { name: "Lemonade", description: "Fresh squeezed", price: "₹180" },
    { name: "Lemonade", description: "Fresh squeezed", price: "₹145" },
    { name: "Lemonade", description: "Fresh squeezed", price: "₹199" },
    { name: "Lemonade", description: "Fresh squeezed", price: "₹165" },
  ],
  desserts: [
    { name: "Tiramisu", description: "Classic Italian dessert", price: "₹140" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "₹177" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "₹165" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "₹150" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "₹180" },
    { name: "Cheesecake", description: "Creamy and delicious", price: "₹190" },
  ],
};


const MenuSection = () => {
  const [currentMenu, setCurrentMenu] = useState("pizza"); // Default menu is pizza
  const [activeMenu, setActiveMenu] = useState(currentMenu);

  return (
    <div
      className="bg-gray-900 text-white py-30 px-4 lg:px-[12vw]"
      style={{ backgroundImage: "url(menubgImg.jpg)" }}
    >
      <h2 className="text-6xl font-semibold text-center mb-5 bebas-neue-regular">
        CAST YOUR EYES UPON OUR ENCHANTING MENU
      </h2>
      <p className="text-3xl lg:text-2xl text-center mb-8 pacifico-regular">
        Deliciousness! This is where it happens!
      </p>

      {/* Menu Categories */}
      <div className="flex flex-row space-x-2 md:space-x-20 lg:space-x-50 mb-6 border-b border-zinc-600">
        <div
          onClick={() => { 
            setCurrentMenu("pizza"); 
            setActiveMenu("pizza"); 
          }}
          className={`flex flex-col justify-center items-center w-full pb-4 ${activeMenu === "pizza" ? " border border-[#F4452C] bg-zinc-900/60" : ''}`}
        >
          <img src={pizzaImg} alt="Pizza Image" className="h-18 md:h-30 lg:h-36" />
          <button className="text-[#F4452C] text-xl lg:text-3xl pacifico-regular">
            Pizza
          </button>
        </div>

        <div
          onClick={() => { 
            setCurrentMenu("sandwiches"); 
            setActiveMenu("sandwiches"); 
          }}
          className={`flex flex-col justify-center items-center w-full pb-6 px-1 ${activeMenu === "sandwiches" ? "border border-[#F1703D]  bg-zinc-900/60" : ''}`}
        >
          <img src={burgerImg} alt="Burger Image" className="h-18 md:h-30 lg:h-36" />
          <button className="text-[#F1703D] text-xl lg:text-3xl pacifico-regular">
            Sandwiches
          </button>
        </div>
        
        <div
          onClick={() => { 
            setCurrentMenu("drinks"); 
            setActiveMenu("drinks"); 
          }}
          className={`flex flex-col justify-center items-center w-full pb-6 ${activeMenu === "drinks" ? "border-b-2 border-[#FEBA11]  bg-zinc-900/60 rounded-xl" : ''}`}
        >
          <img src={drinksImg} alt="Drinks Image" className="h-18 md:h-30 lg:h-36" />
          <button className="text-[#FEBA11] text-xl lg:text-3xl pacifico-regular">
            Drinks
          </button>
        </div>
        
        <div
          onClick={() => { 
            setCurrentMenu("desserts"); 
            setActiveMenu("desserts"); 
          }}
          className={`flex flex-col justify-center items-center w-full pb-6 ${activeMenu === "desserts" ? "border-b-2 border-[#CFDF5A]  bg-zinc-900/60 rounded-xl" : ''}`}
        >
          <img src={dessertImg} alt="Dessert Image" className="h-18 md:h-30 lg:h-36" />
          <button className="text-[#CFDF5A] text-xl lg:text-3xl pacifico-regular">
            Desserts
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6">
        {menuItems[currentMenu].map((item, index) => (
          <div key={index} className=" p-3 flex flex-col justify-center border-b border-dashed border-zinc-600 ">
            <div className="flex flex-row justify-between items-center ">
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold uppercase bebas-neue-regular">
                {item.name}
              </h3>
              <p className="text-2xl md:text-3xl text-[#CFDF5A] mb-2 lg:mb-4 pacifico-regular">
                {item.price}
              </p>
            </div>
            <p className="text-base font-bold text-start py-1 md:py-2 roboto-slab-small">
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
