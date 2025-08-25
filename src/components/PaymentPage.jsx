export default function PaymentPage() {
 


  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Order placed successfully!")
  }

  const orderTotal = 949.97

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white">

      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="w-full px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                      required
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP code"
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      
                      className="w-full px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="nameOnCard"
                      placeholder="Name on card"
                      className="w-full px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        className="px-4 py-3 bg-[#1E1E21] border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Complete Order - {"\u20B9"}{orderTotal.toFixed(2)}
                </button>
              </form>
            </div>

            <div className="bg-[#1E1E21] rounded-lg p-6 h-fit">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 pb-4 border-b border-gray-600">
                  <img src="/Photos/blue.png" alt="Beats Studio Pro" className="w-16 h-16 rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Beats Studio Pro</h3>
                    <p className="text-gray-300">Black × 1</p>
                  </div>
                  <span>{"\u20B9"}349.99</span>
                </div>
                <div className="flex items-center space-x-4 pb-4 border-b border-gray-600">
                  <img src="/Photos/redBlack.png" alt="Beats Studio Red" className="w-16 h-16 rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Beats Studio Red</h3>
                    <p className="text-gray-300">Red × 2</p>
                  </div>
                  <span>{"\u20B9"}599.98</span>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{"\u20B9"}949.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>{"\u20B9"}0.00</span>
                  </div>
                  <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-red-500">{"\u20B9"}{orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}