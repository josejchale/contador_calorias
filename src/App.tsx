import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer,initialState } from "./reducers/activity-reducer"
import AcitivityList from "./components/AcitivityList"

function App() {

const [state, dispatch] = useReducer(activityReducer,initialState)

  return (
    <>
    <header className=" bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
      <h1 className=" text-center font-bold text-white uppercase text-lg">Contador de Calorias</h1>
      </div>
    </header>

    <section className="bg-lime-500 py-20 px-5">
      <div className="max-w-4xl mx-auto">
      <Form
      dispatch={dispatch}
      />
      </div>
    </section>

    <section className="p-10 mx-auto max-w-4xl">
    
{state && <AcitivityList activities={state.activities} />}
    
    </section>

    </>
  )
}

export default App
