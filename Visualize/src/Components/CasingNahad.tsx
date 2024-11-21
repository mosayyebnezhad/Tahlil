import { useContext, useEffect, useState } from "react"
import { Nahad } from "./nahad"
import { mainContext } from "../main"

const CasingNahad = () => {




    const [level, setLevel] = useContext(mainContext)







    return (

        <div className=" absolute top-[25vh] -ml-48 transition-all"


            style={
                {
                    transform: `translate(${450}px , ${0})`
                }
            }

        >
            {level}
            <Nahad />
        </div>
    )
}


export default CasingNahad