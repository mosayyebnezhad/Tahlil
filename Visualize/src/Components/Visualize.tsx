import {  useContext } from "react"
import { Nahad } from "./nahad"
import { mainContext } from "../main"

const Visual = () => {


    const [state, , , ] = useContext(mainContext)



    return (
        <div className="flex gap-3 w-full justify-center h-screen items-center">






            <div className="w-36 h-36 bg-white opacity-65 flex justify-center items-center rounded-lg">



                {state.queue > 2 && <Nahad />}
            </div>

            <div className="w-36 h-36 bg-white opacity-65 flex justify-center items-center rounded-lg">


                {state.queue > 1 && <Nahad />}

            </div>

            <div className="w-36 h-36 bg-white opacity-65 flex justify-center items-center rounded-lg">


                {state.queue > 0 && <Nahad />}

            </div>
            <div className="w-48 h-2 bg-white opacity-65 rounded-xl"></div>
            <div className="w-36 h-36 rounded-full bg-white opacity-60 flex justify-center items-center">
                {state.server && <Nahad rule="server"/>}
            </div>
        </div>
    )
}

export default Visual



