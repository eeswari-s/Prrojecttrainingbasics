import React from 'react'

function Services() {
  return (
    <div className='py-20 bg-gray-100 text-center px-6'>
        <h1 className='text-4xl font-bold mb-12'>Our services</h1>

<div className='grid md:grid-cols-3 gap-8'>

    {/*card1*/}
        <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600'>Web Development</h3>
            <p className='text-gray-600'> We build fast, responsive and moderwesites using latest teclogies</p>
        </div>

         {/*card1*/}
        <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600'>App Development</h3>
            <p className='text-gray-600'> We build fast, responsive and moderwesites using latest teclogies</p>
        </div>

         {/*card1*/}
        <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600'>UI/UX design</h3>
            <p className='text-gray-600'> We build fast, responsive and moderwesites using latest teclogies</p>
        </div>
        </div>
    </div>
  )
}

export default Services
