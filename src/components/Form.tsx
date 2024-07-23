import {v4 as uuidv4} from 'uuid'
import { categories } from '../data/categories';
import { foodItem } from '../data/alimentodb';
import { exerciseItems } from '../data/ejerciciodb';
import {  Dispatch, useState  } from "react"
import { Options } from '../types';
import { ActivityAction } from '../reducers/activity-reducer';




type FormProps = {
  dispatch : Dispatch<ActivityAction>
}

const initial:Options={
    id: uuidv4(),
    categories: 0,
    foodItem: 0,
    exerciseItems: 0
}

export default function Form({dispatch}:FormProps) {

  const [opt, setOpt] = useState<Options>(initial)



  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOpt({...opt,[e.target.id]: e.target.value}) //* Escribe el valor en determinado "input" manteniendo lo que hay en el state previamente
  }


  const valid = () => {
    const { categories,foodItem, exerciseItems } = opt;
    return !isNaN(foodItem) && categories > 0 && foodItem > 0 || exerciseItems > 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    
    dispatch({type: 'save-activity' , payload: {newActivity:opt}})

    setOpt({...initial, id:uuidv4()})
  }
 
  return (
    
        <form 
        className="space-y-5 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
        >
<div className="grid grid-cols-1 gap-3">
  
<label htmlFor="categories">¿Qué hiciste?</label>
    
    <select className="
    border border-slate-300 p-2 rounded-lg w-full bg-white"
    id="categories"
    value={opt.categories}
    onChange={handleChange}
    >

    {categories.map(categories =>(<option
    key={categories.id}
    value={categories.id}
    >{categories.name}
    </option>))}
    </select>
</div>

{opt.categories==1&&(

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

{opt.categories==2&&(
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
className="bg-gray-700 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg  disabled:opacity-0"
value={opt.categories==1?'Guardar comida': 'Guardar Ejercicio'}
disabled={!valid()}
/>

      </form>
    
  )
}
