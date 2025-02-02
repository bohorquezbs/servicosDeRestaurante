import React, { useState } from 'react'
import { CardDrink } from '../components/CardDrink'
import { bebidas } from '../../public/API/bebidas'
export function Bebidas({ items, setItems }) {

  const [drinks, setDrinks] = useState(bebidas)

  return (
    <div className='flex w-full min-h-screen bg-[#ECECEC]'>
      <div className="grid grid-cols-2 md:grid-cols-4 w-[100%] h-[100%] gap-2 md:gap-4 ms-2 md:ms-6 mt-5">
        {drinks.map(drink =>
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
