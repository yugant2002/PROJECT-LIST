import React from 'react'

const about = () => {
  return (
    <>
    <section className="bg-[#0b1d26] text-white py-20">

      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-start">

        {/* LEFT SIDE (Services list) */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-2 top-2 h-[140px] w-[2px] bg-orange-500"></div>

          {/* Items */}
          <div className="flex flex-col gap-8">

            <div className="flex items-center gap-4">
              <div className="w-4 h-4 border-2 border-orange-500 rounded-full bg-[#0b1d26]"></div>
              <p className="text-gray-300 hover:text-orange-400 transition">
                Website Development
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-4 h-4 border-2 border-orange-500 rounded-full bg-[#0b1d26]"></div>
              <p className="text-gray-300 hover:text-orange-400 transition">
                App Development
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-4 h-4 border-2 border-orange-500 rounded-full bg-[#0b1d26]"></div>
              <p className="text-gray-300 hover:text-orange-400 transition">
                Website Hosting
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE (About text) */}
        <div className="max-w-[600px]">

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4">
            About me
          </h2>

          {/* Description */}
          <p className="text-gray-400 mb-8 leading-relaxed">
            I am a passionate Software Developer. I build modern,
            fast, and responsive websites and applications using
            latest technologies.
          </p>

          {/* Stats */}
          <div className="flex gap-12">

            <div>
              <h3 className="text-2xl font-bold">
                120<span className="text-orange-500">+</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Completed Projects
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                95<span className="text-orange-500">%</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                10<span className="text-orange-500">+</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  
    </>
  )
}

export default about