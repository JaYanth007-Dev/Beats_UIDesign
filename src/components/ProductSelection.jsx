"use client"
import { useState } from "react"

export default function ProductSelection() {
  const [selectedColor, setSelectedColor] = useState("red")

  const colors = [
    { name: "red", color: "#EF4444", image: "/Photos/redBlack.png" },
    { name: "black", color: "#000000", image: "/Photos/black.png" },
    { name: "blue", color: "#3B82F6", image: "/Photos/blue.png" },
    { name: "Orange", color: "#924D0A", image: "/Photos/nightBlack.png" },
  ]

  return (
    <section className="bg-[#1E1E21] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Choose Your <span className="text-red-500">Style</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <img
              src={colors.find((c) => c.name === selectedColor)?.image || "/placeholder.svg"}
              alt={`${selectedColor} headphones`}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-semibold mb-8 text-white">Available Colors</h3>
            <div className="flex space-x-4 mb-8">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-12 h-12 rounded-full border-4 transition-all ${
                    selectedColor === color.name ? "border-red-500 scale-110" : "border-gray-600"
                  }`}
                  style={{ backgroundColor: color.color }}
                />
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-white">
                <span>Price:</span>
                <span className="font-bold text-xl">$299.99</span>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full text-lg font-semibold transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
