
import { useState } from "react"
import { Link } from "react-router-dom"
export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Beats Studio Pro Blue", price: 349.99, quantity: 1, image: "/Photos/blue.png", color: "Black" },
    { id: 2, name: "Beats Studio Red", price: 299.99, quantity: 2, image: "/Photos/redBlack.png", color: "Red" },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white">
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-300 mb-8">Add some amazing products to get started!</p>
              <Link
                to="/products"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Shop Products
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-[#1E1E21] rounded-lg p-6 flex items-center space-x-6">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-21 h-28 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-300">Color: {item.color}</p>
                        <p className="text-red-500 font-bold text-lg">{"\u20B9"}{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="text-red-500 hover:text-red-400 p-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1E1E21] rounded-lg p-6 h-fit">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{"\u20B9"}{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>{"\u20B9"}{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-red-500">{"\u20B9"}{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/payments"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors mt-6 block text-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/products"
                  className="w-full border border-gray-600 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors mt-4 block text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}