import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="2xl:h[700px] relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
