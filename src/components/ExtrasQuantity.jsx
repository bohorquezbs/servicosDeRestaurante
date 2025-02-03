export function ExtrasQuantity() {
  return (
    <div className="flex flex-col items-center ">
      <nav className="mb-10 w-screen py-5 bg-[#da5e2b]">
        <h1 className="text-center text-white font-semibold text-2xl">Extras</h1>
      </nav>
      <ul className="self-start mb-60 px-10 ">
        <li>
          <span>Tomate</span>
          <button className="font-extrabold rounded-full text-2xl px-5 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300">
          -</button>
          <span>0</span>
          <button className="font-extrabold rounded-full text-2xl px-4 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300">+</button>
        </li>
        <li>
          <span>Cebolla</span>
          <button className="font-extrabold rounded-full text-2xl px-5 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300">
          -</button>
          <span>0</span>
          <button className="font-extrabold rounded-full text-2xl px-4 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300">+</button>
        </li>
        <li>
          <span>Salsa picante</span>
          <button className="font-extrabold rounded-full text-2xl px-5 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300">
          -</button>
          <span>0</span>
          <button className="font-extrabold rounded-full text-2xl px-4 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-gray-300">+</button>
        </li>
      </ul>

      <ul className="flex gap-20">
        <button>Confirmar</button>
        <button>Cancelar</button>
      </ul>
    </div>
  )
}
