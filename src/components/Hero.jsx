
import { useState } from "react"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="flex flex-wrap items-start">
      <img
        src="/Photos/mainImage.png"
        alt="main headphone"
        width={240}
        height={560}
        className={`relative -mt-52 ml-60 transition-transform duration-100 ${isHovered ? "scale-110" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <div className="ml-48 mt-8 flex flex-wrap w-96 flex-col" data-aos="fade-left">
        <div className="flex items-start flex-col">
          <img src="/Photos/onEar.png" alt="on ear" width={300} height={200} className="ml-24" />
          <h1 className="text-white p-4 mt-8 text-5xl font-bold">Beats 3</h1>
          <h4 className="text-white p-4 text-xl">Overview</h4>
          <p className="p-4 w-full tracking-wide text-sm font-light text-[#bdc0c2] leading-6 mb-6">
            Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with
            comfortable padded earphones, delivering first-rate playback.
          </p>
        </div>

        <div className="flex items-center bg-[#1E1E21] w-56 rounded-lg justify-evenly flex-wrap cursor-pointer ml-4 px-4 py-3 transition-all duration-100 hover:bg-red-500 hover:scale-110">
          <img src="/Icons/shoppingBag.png" alt="shopping bag" width={25} height={25} />
          <p className="text-sm font-light text-white">Add to Bag</p>
          <span className="text-white font-normal">N399K</span>
        </div>
      </div>
    </main>
  )
}