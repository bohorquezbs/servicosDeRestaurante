import React from 'react'

export default function Card({ item }) {
    const { imagen, titulo, descripcion, categoria, id, precio } = item
    return (
        <>
            <div className=''>

                <div className='mb-4'>
                    <div className='border h-40 bg-white'>

                        <img src={imagen} alt="" />
                    </div>
                    <div className='bg-[#875638] border'>
                        <div className='m-4'>
                            <h3 className='text-white font-semibold '>{titulo} </h3>
                            <span className='text-white font-light  '>{descripcion} </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


{/* array.map(({ }) => (

)) */}