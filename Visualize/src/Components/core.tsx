import { Fragment, useContext, useEffect, useState } from "react"
import { mainContext } from "../main"
import { Nahad } from "./nahad"

const Core = () => {
    const [state, setState, nahad, addNahad] = useContext(mainContext)



    const [lossCount, addLoss] = useState<number>(0)



    const entityCount = 10;
    const Time = 1000







    //Controll Add Event 
    useEffect(() => {





        if (nahad == 1) {
            setState({ queue: 0, server: true })
        }
        else if (nahad > 1) {


            if (nahad > 4) { addLoss(lossCount + 1) }
            else {

                setState({ queue: nahad - 1, server: true })
            }



        }
        else {
            setState({ queue: 0, server: false })
        }





    }, [nahad])

















    return (


        <>
            <h1>{`losscount : ${lossCount}`}</h1>
            <h1>Server : {`${state.server}`} </h1>
            <h1>

                queue:{`${state.queue}`}


            </h1>

            <h1>
                {nahad}
            </h1>



            <div className="flex justify-center">

                {Array.from({ length: nahad }).map((_, i) => {
                    return (


                        <Fragment key={i}>
                            <Nahad rule={i == 0 ? "server" : i > 3 ? "loss" : "normal"} />
                        </Fragment>



                    )
                })}
            </div>

            <button

                onClick={() => {



                    let i = 0
                    let ouw = setInterval(() => {
                        i++
                        addNahad((prev: number) => {
                            return prev + 1
                        })


                        if (i > entityCount) {
                            clearInterval(ouw)
                        }
                    }, Time);



                    let o = 0
                    let removing = setInterval(() => {
                        o++


                        addNahad((prev: number) => {
                            return prev - 1
                        })



                        if (o > entityCount) {
                            clearInterval(removing)
                        }

                    }, Time * 1.75);









                }}

            >Click for increase!</button>
        </>


    )
}

export default Core