import React from "react";
export function Pedido({ comida, items, setItems }) {
  const { nombre, costo, imagen, stocks, descripcion, id } = comida;
  console.log(comida);
  const increment = () => setItems(items + 1);
  const decrement = () => setItems(items - 1);
  if (items <= 0) {
    setItems(0);
  }
  return (
    <>
      <div
        key={id}
        className="flex flex-col justify-center mx-auto border-2 border-gray-300  rounded w-[90%] h-[293px]  text-black "
      >
        <img
          height={284}
          width={410}
          src={imagen}
          className="object-cover -mt-4  rounded h-[150px]"
          alt={descripcion}
        />
        <div className="mt-4 flex flex-col justify-center ">
          <div className="flex font-semibold justify-between mx-2 md:mx-4">
            <h5 className=" text-sm md:text-2xl w-96 text-start"> {nombre} </h5>
            <h5 className="text-sm w-full md:text-2xl text-end">$ {costo} </h5>
          </div>
          <p className="text-[10px] mt-2 md:text-[12px] text-center px-4 md:mx-8">
            {" "}
            {descripcion}{" "}
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-3">
          <h2 className="font-semibold md:text-[1.2rem] text-[#ECECEC]">
            Cantidad
          </h2>
          <div className="flex items-center justify-start gap-4 mt-1">
            <button
              onClick={decrement}
              className=" text-black border border-gray-400  bg-white w-6 rounded-full "
            >
              -
            </button>
            <span className="text-black">{items}</span>
            <button
              onClick={increment}
              className=" text-black border border-gray-400  bg-white w-6 rounded-full  "
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
