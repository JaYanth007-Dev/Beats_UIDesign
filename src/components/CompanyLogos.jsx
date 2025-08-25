export default function CompanyLogos() {
  const logos = [
    { src: "/Photos/appleLogo.png", alt: "Partner 1" },
    { src: "/Photos/youtubeLogo.png", alt: "Partner 2" },
    { src: "/Photos/amazonLogo.png", alt: "Partner 3" },
    { src: "/Photos/spotifyLogo.png", alt: "Partner 4" },
  ]

  return (
    <section className="bg-[#0F0F10] py-26 mt-32 px-6">
      <div className="max-w-9xl mx-auto">
        <div className="flex justify-center items-center space-x-12 flex-wrap gap-20">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="h-7 "
            />
          ))}
        </div>
      </div>
    </section>
  )
}
