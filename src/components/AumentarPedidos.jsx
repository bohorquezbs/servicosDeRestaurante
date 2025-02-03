import { useState } from "react"
import React from 'react'

export function AumentarPedidos({ drink, items, setItems }) {
    const { nombre, costo, imagen, stocks, descripcion } = drink
      function increment() {
        setItems(items + 1)
      }
      function decrement() {
        setItems(items - 1)
      }
    return (
        <>
            <div className="flex flex-col border-2 border-[#515151] rounded-[30px] w-[90%] h-[293px] bg-[#515151] text-[#ECECEC] ">
                <img height={284} width={410} src={imagen} className="object-cover  rounded-[30px] h-[150px]" alt={descripcion} />
                <div className="mt-1">
                    <div className="flex font-semibold justify-between mx-2 md:mx-4">
                    <h5 className="md:text-2xl"> {nombre} </h5>
                    <h5 className="md:text-2xl">$ {costo} </h5>
                    </div>
                    <p className="text-[10px] md:text-[12px] text-center md:mx-8"> {descripcion} </p>
                </div>
                <div className="flex flex-col items-center text-center mx-5">
                        <h2 className="font-semibold md:text-[1.2rem] text-[#ECECEC]">Cantidad</h2>
                        <div className="flex items-center justify-start mt-1">
                          <button onClick={decrement} className="border border-black rounded-md bg-[#ECECEC] text-black px-1 md:px-2 m-1">-</button>
                          <span className="text-[#ECECEC]">{items}</span>
                          <button onClick={increment} className="border border-black rounded-md bg-[#ECECEC] text-black px-1 md:px-2 m-1">+</button>
                        </div>
                      </div>
                    </div>
        </>
    )
}
//284 190