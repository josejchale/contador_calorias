import { category } from '../data/categories';
import { foodItem } from '../data/alimentodb';
import { exerciseItems } from '../data/ejerciciodb';
import {  useState  } from "react"
import { options } from '../types';





export default function Form() {

  const [opt, setOpt] = useState<options>({
    category: 0,
    foodItem: 0,
    exerciseItems: 0
    
  })



  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOpt({...opt,[e.target.id]: e.target.value}) //* Escribe el valor en determinado "input" manteniendo lo que hay en el state previamente
  }


  const valid = () => {
    const { foodItem, exerciseItems } = opt;
    return !isNaN(foodItem) && foodItem > 0 || exerciseItems > 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {(
    e.preventDefault()
    
  )}
 
  return (
    
        <form 
        className="space-y-5 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
        >
<div className="grid grid-cols-1 gap-3">
  
<label htmlFor="category">¿Qué hiciste?</label>
    
    <select className="
    border border-slate-300 p-2 rounded-lg w-full bg-white"
    id="category"
    value={opt.category}
    onChange={handleChange}
    >

    {category.map(category =>(<option
    key={category.id}
    value={category.id}
    >{category.name}
    </option>))}
    </select>
</div>

{opt.category==1&&(

<div className="grid grid-cols-1 gap-3">
<label htmlFor="foodItem">¿Qué comiste?</label>
<select className="
    border border-slate-300 p-2 rounded-lg w-full bg-white"
    id="foodItem"
    value={opt.foodItem}
    onChange={handleChange}
    >

    {foodItem.map(foodItem =>(
      <option
    key={foodItem.id}
    value={foodItem.id}
    >{foodItem.name}
    </option>))}
    </select>
</div>

)}

{opt.category==2&&(
<div className="grid grid-cols-1 gap-3">
<label htmlFor="exerciseItems">¿Qué ejercicio realizaste?</label>
<select className="
    border border-slate-300 p-2 rounded-lg w-full bg-white"
    id="exerciseItems"
    value={opt.exerciseItems}
    onChange={handleChange}
    >

    {exerciseItems.map(exerciseItems =>(<option
    key={exerciseItems.id}
    value={exerciseItems.id}
    >{exerciseItems.name}
    </option>))}
    </select>
</div>

)
}

<input
type="submit"
className="bg-gray-700 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg  disabled:opacity-10"
value={opt.category===1?'Guardar comida': 'Guardar ejercicio'}
disabled={!valid()}
/>

      </form>
    
  )
}
