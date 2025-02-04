import React from 'react'

export function Detail({ items, setItems }) {
    function increment() {
        setItems(items + 1)
    }
    function decrement() {
        setItems(items - 1)
    }
    return (
        <div className='border w-full h-full'>
            <div className='bg-amber-700 h-20 pt-4'>
                <h2 className='font-bold text-center'>Mesa 1</h2>
                <h2 className='font-bold text-center'> Pedido nombre del cliente</h2>
            </div>
            <div className='p-4 gap-4'>
                <h3 className='flex justify-between'>
                    tacos
                    <div className="flex justify-between w-[8.5rem]">
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            -
                        </button>
                        <span>0</span>
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            +
                        </button>
                    </div>
                </h3>
                <h3 className='flex justify-between'>
                    coca cola
                    <div className="flex justify-between w-[8.5rem]">
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            -
                        </button>
                        <span>0</span>
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            +
                        </button>
                    </div>
                </h3>
                <h3 className='flex justify-between'>
                    agua
                    <div className="flex justify-between w-[8.5rem]">
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            -
                        </button>
                        <span>0</span>
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            +
                        </button>
                    </div>
                </h3>
                <h3 className='flex justify-between'>
                    sopa de pollo
                    <div className="flex justify-between w-[8.5rem]">
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            -
                        </button>
                        <span>0</span>
                        <button className="border border-black bg-slate-200 px-2 rounded-2xl">
                            +
                        </button>
                    </div>
                </h3>
            </div>
            <div className='flex justify-center p-2'>
                <h2 className='border rounded-4xl w-20 text-center'>
                    $150
                </h2>
            </div>
        </div>
    )
}
