import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const products = [
    { id: 1, name: "Beats Studio3 Wireless", price: "N399K", img: "/Photos/black.png", category: "headphones" },
    { id: 2, name: "Beats Solo Pro", price: "N299K", img: "/Photos/redBlack.png", category: "headphones" },
    { id: 3, name: "Beats Studio Buds", price: "N199K", img: "/Photos/nightBlack.png", category: "earbuds" },
    { id: 4, name: "Beats Powerbeats Pro", price: "N249K", img: "/Photos/blue.png", category: "earphones" },
    { id: 5, name: "Beats Flex", price: "N149K", img: "/Photos/twilightGray.png", category: "earphones" },
    { id: 6, name: "Beats Studio3 Limited", price: "N449K", img: "/Photos/black.png", category: "headphones" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-[#bdc0c2] text-lg">Discover the perfect sound for every moment</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 bg-[#181A1B] rounded-lg p-2">
            {["all", "headphones", "earphones", "earbuds"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md transition-colors capitalize ${
                  selectedCategory === category ? "bg-red-500 text-white" : "text-[#bdc0c2] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-[#181A1B] rounded-lg p-6 transition-transform duration-300 cursor-pointer ${
                hoveredProduct === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="flex justify-center mb-4">
                <img src={product.img || "/placeholder.svg"} alt={product.name} width={120} height={120} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{product.name}</h3>
              <p className="text-2xl font-bold text-center mb-4">{product.price}</p>
              <div className="flex gap-2">
                <Link to="/cart" className="flex-1">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors">
                    Add to Cart
                  </button>
                </Link>
                <button className="bg-[#1E1E21] hover:bg-black text-white py-2 px-4 rounded-md transition-colors">
                  <img src="/Icons/shoppingBag.png" alt="shopping bag" width={20} height={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}