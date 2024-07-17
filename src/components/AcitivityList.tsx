import { Options } from "../types"



type ActivityListProps = {
    activities: Options[]
}
export default function AcitivityList({ activities }: ActivityListProps) {



    return (
        <>
            <h2 className='text-4xl font-bold text-slate-400 text-center'> Comida y Actividades </h2>


            {activities.map(opt => (

                <div key={opt.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                    <p>
                        {opt.category}
                    </p>
                    <p className="text-2xl font-bold pt-5"> {opt.exerciseItems} </p>
                    <p className="font-black text-4xl text-lime-500"> {opt.foodItem} </p>
                    </div>

                    <div>

                    </div>
                </div>

            ))

            }
        </>
    )
}
