export function ExtrasQuantity() {
  return (
    <div className="flex flex-col items-center ">
      <nav className="mb-10 w-screen py-5 bg-[#da5e2b]">
        <h1 className="text-center text-white font-semibold text-2xl">Extras</h1>
      </nav>
      <ul className="self-start mb-60 px-10 ">
        <li className="flex items-center gap-44">
          <span>Tomate</span>
          <div>
            <button className="font-extrabold rounded-full border text-2xl px-5 py-2.5 text-center mb-3 bg-gray-200 hover:bg-gray-300">
              -</button>
            <span>0</span>
            <button className="font-extrabold rounded-full border text-2xl px-4 py-2.5 text-center mb-3 bg-gray-200 hover:bg-gray-300">
              +</button>
          </div>
        </li>
        <li className="flex items-center gap-44">
          <span>Cebolla</span>
          <div>
            <button className="font-extrabold rounded-full border text-2xl px-5 py-2.5 text-center mb-3 bg-gray-200 hover:bg-gray-300">
              -</button>
            <span>0</span>
            <button className="font-extrabold rounded-full border text-2xl px-4 py-2.5 text-center bg-gray-200 hover:bg-gray-300">
              +</button>
          </div>
        </li>
        <li className="flex items-center gap-32">
          <span>Salsa picante</span>
          <div>
            <button className="font-extrabold rounded-full border text-2xl px-5 py-2.5 text-center bg-gray-200 hover:bg-gray-300">
              -</button>
            <span>0</span>
            <button className="font-extrabold rounded-full border text-2xl px-4 py-2.5 text-center bg-gray-200 hover:bg-gray-300">
              +</button>
          </div>
        </li>
      </ul>

      <ul className="flex gap-20">
        <button className="border px-5">Cancelar</button>
        <button className="border px-5 bg-[#e79406]">Confirmar</button>
      </ul>
    </div>
  )
}
