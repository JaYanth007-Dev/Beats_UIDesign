
import { Link } from "react-router-dom"
import { useState } from "react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)


  const handleSubmit = (e) => {
    e.preventDefault()
      alert("Success!")
  }

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white">

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
                  <div className="text-center mb-8">
                      {isLogin && <h1 className="text-3xl font-bold mb-2">🔑 </h1>}
             <h1 className="text-3xl font-bold mb-2">{isLogin ? "Welcome Back" : "Create Account"}</h1>
            <p className="text-[#bdc0c2]">{isLogin ? "Sign in to your account" : "Join the Beats community"}</p>
          </div>

          <div className="bg-[#181A1B] rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full bg-[#1E1E21] border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-red-500"
                      required={!isLogin}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full bg-[#1E1E21] border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-red-500"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-[#1E1E21] border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full bg-[#1E1E21] border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full bg-[#1E1E21] border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-red-500"
                    required={!isLogin}
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md transition-colors font-semibold"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {isLogin && (
              <div className="text-center mt-4">
                <Link to="#" className="text-red-500 hover:text-red-400 text-sm">
                  Forgot your password?
                </Link>
              </div>
            )}

            <div className="text-center mt-6 pt-6 border-t border-gray-600">
              <p className="text-[#bdc0c2]">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-red-500 hover:text-red-400 ml-2 font-semibold"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}