import React, { useState } from 'react'
import { CardDrink } from '../components/CardDrink'
import { bebidas } from '../../public/API/bebidas'
export function Bebidas({ items, setItems }) {

  const [drinks, setDrinks] = useState(bebidas)
  const [search, setSearch] = useState("")
  const onChange = (e) => {
    setSearch(e.target.value)
  }
  
  const searchedItems = drinks.filter(
    (items) => {
      return items.nombre.toLowerCase().includes(search.toLowerCase())
    }
  )

  return (
    <div className='flex flex-col w-full min-h-screen bg-[#ECECEC]'>
      <div className='flex justify-center mt-5'>
        <input 
          onChange={onChange} 
          value={search} 
          className='bg-white rounded-md ps-2 outline-none border-2 border-[#515151]' 
          placeholder='Search...' 
          type="search" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-[100%] h-[100%] gap-2 md:gap-4 ms-2 md:ms-6 mt-5">
        {searchedItems &&
          searchedItems.map(drink =>
            <CardDrink
              drink={drink}
              key={drink.id}
              items={items}
              setItems={setItems}
            />
          )}
      </div>
    </div>
  )
}
