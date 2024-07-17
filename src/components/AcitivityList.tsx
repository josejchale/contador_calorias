import { useMemo } from "react"
import {  Options } from "../types"
import { categories } from '../data/categories';
import { foodItem } from "../data/alimentodb";
import { exerciseItems } from "../data/ejerciciodb";



type ActivityListProps = {
    activities: Options[]

}
export default function AcitivityList({ activities }: ActivityListProps) {

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
                    <div className="space-y-2 relative font-semibold">
                    <p>
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

                    <div>

                    </div>
                </div>

            ))

            }
        </>
    )
}
