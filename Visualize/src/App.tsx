import { useContext, useEffect } from "react"
import "./app.css"
import Core from "./Components/core"
import { mainContext } from "./main"
import Visual from "./Components/Visualize"

function App() {



  const [state, setState, nahad, addNahad] = useContext(mainContext)


  useEffect(() => {
    console.log("render in App")
  }, [])

  return (


    <>
      <div className="bg-gray-600 w-full h-screen">


        <Core />
        
        <Visual />

      </div>




    </>


  )



}

export default App




