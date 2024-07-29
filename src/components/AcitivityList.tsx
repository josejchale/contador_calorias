import { Dispatch, useMemo } from "react"
import {  Options } from "../types"
import { categories } from '../data/categories';
import { foodItem } from "../data/alimentodb";
import { exerciseItems } from "../data/ejerciciodb";
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { ActivityAction } from "../reducers/activity-reducer";


type ActivityListProps = {
    activities: Options[]
    dispatch : Dispatch<ActivityAction>

}
export default function AcitivityList({ activities , dispatch }: ActivityListProps) {

const categoryName = useMemo(()=>
    (Category:Options['categories'])=> categories.map(cat => cat.id === Category ? cat.name : '')
,[activities]);

    const foodName = useMemo(()=>
    (FoodItem:Options['foodItem'])=> foodItem.map(cat => cat.id === FoodItem ? cat.name : '')
    ,[activities])

    const foodCalories = useMemo(()=>
        (FoodItem:Options['foodItem'])=> foodItem.map(cat => cat.id === FoodItem ? cat.calories : '')
        ,[activities])

    const exerciseName = useMemo(()=>
    (ExerciseItem:Options['exerciseItems'])=> exerciseItems.map(cat => cat.id === ExerciseItem? cat.name : '')
    ,[activities])

    const exerciseCaloriesBurned = useMemo(()=>
        (ExerciseItem:Options['exerciseItems'])=> exerciseItems.map(cat => cat.id === ExerciseItem? cat.caloriesBurned : '')
        ,[activities])

    return (
        <>
            <h2 className='text-4xl font-bold text-slate-400 text-center'> Comida y Actividades </h2>


            {activities.map(opt => (

                <div key={opt.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className=" space-y-2 relative">
                    <p className={` absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${opt.categories==1?'bg-lime-500': 'bg-orange-500'}`}>
                        {categoryName(+opt.categories)}
                    </p>
                    {opt.categories==1&&(   
                    <>
                        <p className="text-2xl font-bold pt-5"> {foodName(+opt.foodItem)} </p>
                        <p className="font-black text-4xl text-lime-500"> {foodCalories(+opt.foodItem)} Calorias </p>
                    </>
                    )
                    }

                    {opt.categories==2&&(
                    <>
                        <p className="text-2xl font-bold pt-5"> {exerciseName(+opt.exerciseItems)} </p>
                        <p className="font-black text-4xl text-lime-500"> {exerciseCaloriesBurned(+opt.exerciseItems)} Calorias </p>
                    </>
                    )
                    }
                    </div>


                    <div className="flex gap-5 items-center">
                    <button
                    onClick={()=>dispatch({type: 'set-activiteID', payload: {id: opt.id}})}
                    >

                        <PencilSquareIcon 
                        className="h-8  w-8 text-gray-500"/>

                    </button>
                    </div>


                </div>

            ))

            }
        </>
    )
}
