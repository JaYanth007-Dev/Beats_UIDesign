export default function Specifications() {
  const specs = [
    {
      icon: "/Icons/bluetooth.png",
      title: "Connection",
      description: "Bluetooth v5.2",
      className: "pt-6 pl-14",
    },
    {
      icon: "/Icons/battery.png",
      title: "Battery",
      description: "Duration 40hrs",
      className: "pt-6 pl-4",
    },
    {
      icon: "/Icons/charger.png",
      title: "Load",
      description: "Fast Charge 4.2AAC",
      className: "pt-6 pl-2",
    },
    {
      icon: "/Icons/mic.png",
      title: "Microphone",
      description: "Supports Apple Siri and Google",
      className: "pt-6 pl-12",
    },
  ]

  return (
    <section id="specs" className="text-white mt-32" data-aos="fade-up">
      <div className="flex justify-center items-center">
        <img src="/Icons/specsLogo.png" alt="specs logo" width={200} height={60} />
      </div>

      <div className="flex flex-wrap items-center justify-center pt-8 gap-24">
        <div className="">
          {specs.map((spec, index) => (
            <div key={index} className={spec.className}>
              <img src={spec.icon || "/placeholder.svg"} alt={spec.title.toLowerCase()} width={20} height={10} />
              <h5 className="text-[15px] font-semibold my-2">{spec.title}</h5>
              <p className="text-xs font-light -mt-2">{spec.description}</p>
            </div>
          ))}
        </div>

        <div className="flex pt-6">
          <img
            src="/Photos/specsImage.png"
            alt="headphone specs"
            width={300}
            height={300}
            className="animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </div>
      </div>
    </section>
  )
}