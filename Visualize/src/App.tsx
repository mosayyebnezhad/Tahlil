import { useContext, useEffect } from "react"
import "./app.css"
import Core from "./Components/core"
import { mainContext } from "./main"

function App() {



  const [state, setState,nahad, addNahad] = useContext(mainContext)


  useEffect(() => {
    console.log("render in App")
  }, [])

  return (


    <>
      <Core />
      <h1>
        {`All of you entities ${nahad}`}
      </h1>



    </>


  )



}

export default App




