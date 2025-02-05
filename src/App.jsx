import React from 'react'

export default function App() {
  return (
    <>
      <div className='flex flex-col w-screen h-screen bg-[#DA5E2B] items-center pt-3'>
        <h1 className='text-[#515151] font-extrabold text-2xl'>Las Delicias de la Cena</h1>
        <input type="text" placeholder='Buscar' className='h-10 w-75 p-2 border border-[#ECECEC] bg-[#ECECEC] rounded-lg' />
        <div className='flex flex-col justify-center items-center h-full w-full bg-[#ECECEC] mb-6 mt-4 gap-6'>
          <div className='flex items-end'>
            <div className='flex items-start'>
              <h3 className='text-start text-[#875638] text-xl font-bold rotate-270 h-5 w-10 ps-8'>Tortas</h3>
            </div>
            <div>
              <img src="../public/ImagesFood/Totas.jpg" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio $0.00</h3>
            </div>
          </div>
          <div className='flex items-end'>
            <div className='flex '>
              <h3 className='text-[#875638] text-xl font-bold rotate-270 h-5 w-10 ps-8'>Tacos</h3>
            </div>
            <div>
              <img src="../public/ImagesFood/Tacos.png" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio $0.00</h3>
            </div>
          </div>
          <div className='flex items-end'>
            <div className='flex items-start'>
              <h3 className='text-[#875638] text-xl font-bold rotate-270 h-5 w-10 ps-8'>Quesadillas</h3>
            </div>
            <div>
              <img src="../public/ImagesFood/Quesadilla.jpeg" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio $0.00</h3>
            </div>
          </div>
          <div className='flex items-end'>
            <div className='flex '>
              <h3 className='text-[#875638] text-xl font-bold rotate-270 h-5 w-10 ps-8'>Sopes</h3>
            </div>
            <div>
              <img src="../public/ImagesFood/Sopes.jpg" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio $0.00</h3>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}
