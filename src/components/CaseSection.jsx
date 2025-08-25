import { useState } from "react"

export default function CaseSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="case" className="text-white" >
      <div className="flex justify-center items-center pt-32">
        <img src="/Icons/caseLogo.png" alt="case logo" width={200} height={60} />
      </div>

      <div className="flex flex-wrap justify-center items-center pt-12 gap-24" >
        <div
          className={`transition-transform duration-200 ${isHovered ? "scale-110" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src="/Photos/caseImage.png" alt="case img" width={260} height={280} data-aos="fade-right" />
        </div>

        <div className="max-w-72">
          <p className="text-[16px] text-start text-[#bdc0c2]">
            With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability
            forever.
          </p>
          <div className="text-white flex justify-evenly items-center gap-3 w-32 rounded-md px-2 py-2 mt-3 cursor-pointer bg-[#1E1E21] text-sm hover:bg-red-500 transition-colors">
            <img src="/Icons/group.png" alt="group icon" width={20} height={20} />
            <span>More Info</span>
          </div>
        </div>
      </div>
    </section>
  )
}