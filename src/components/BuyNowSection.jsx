import { Link } from "react-router-dom"
import '../App.css'


export default function BuyNowSection() {
  return (
    <div className="flex justify-center items-center my-16 flex-wrap" data-aos="zoom-in">
      <section className="mt-12 h-96 w-full max-w-5xl flex flex-wrap justify-center items-center bg-[#181A1B] rounded-lg">
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-white w-80 text-3xl font-bold mb-4">Immerse yourself in your music</h1>
            <p className="text-sm text-[#bdc0c2] mb-6">Buy Now, up to 40% off.</p>
            <Link to="/cart">
              <div className="text-white flex items-center px-4 py-2 gap-4 text-sm cursor-pointer rounded bg-black hover:bg-red-500 hover:text-sm  transition-all">
                <img src="/Icons/shoppingBag.png" alt="shopping bag" width={20} height={20} />
                <p>Buy Now</p>
              </div>
            </Link>
          </div>

          <div >
            <img
              src="/Photos/buyNowSectionImage.png"
              alt="headphones"
              width={300}
              height={300}
                className="animate-pulse-zoom"
            />
          </div>
        </div>
      </section>
    </div>
  )
}