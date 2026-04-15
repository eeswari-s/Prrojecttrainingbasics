import React from 'react'

function Hero() {
  return (
    <div className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center rrelative">

        {/* overlay */}
        <div className='absolute inset-0 bg-black/60' ></div>

        {/*content*/}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className='text-5xl font-bold mb-6 leading-tight' >Build your dream website</h1>
   
        <p className='text-5xl mb-6 max-w-xl'>we create modern, fast and responsive websites</p>
  <button className='bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition '>Explore Services</button>
     </div>
    </div>
  )
}

export default Hero
