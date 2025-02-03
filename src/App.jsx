import React from 'react'

export default function App() {
  return (
    <>
      <div className='flex flex-col w-screen h-screen bg-[#DA5E2B] items-center pt-3'>
        <h1 className='text-[#515151] font-extrabold text-2xl'>Las Delicias de la Cena</h1>
        <input type="text" className='h-10 w-70 p-2 border border-[#ECECEC] bg-[#ECECEC] rounded-lg' />
        <div className='flex flex-col justify-items-start h-full w-full bg-[#ECECEC] mb-6 mt-4 p-7 gap-6'>
          <div className='flex items-center'>
            <h3 className='text-[#875638] text-xl font-bold rotate-270 h-4'>Tortas</h3>
            <div>
              <img src="../public/ImagesFood/Totas.jpg" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio</h3>
            </div>
          </div>
          <div className='flex items-center'>
            <h3 className='text-[#875638] text-xl font-bold rotate-270 h-4'>Tacos</h3>
            <div>
              <img src="../public/ImagesFood/Tacos.png" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio</h3>
            </div>
          </div>
          <div className='flex items-center'>
            <h3 className='text-[#875638] text-xl font-bold rotate-270 h-4'>Quesadilla</h3>
            <div>
              <img src="../public/ImagesFood/Quesadilla.jpeg" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio</h3>
            </div>
          </div>
          <div className='flex items-center'>
            <h3 className='text-[#875638] text-xl font-bold rotate-270 h-4'>Sopes</h3>
            <div>
              <img src="../public/ImagesFood/Sopes.jpg" alt="" className='flex flex-col h-32 w-60' />
              <h3 className='text-[#875638] font-bold'>Precio</h3>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}
