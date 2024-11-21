import { Fragment, useContext, useEffect, useState } from "react"
import { mainContext } from "../main"
import { Nahad } from "./nahad"

const Core = () => {
    const [state, setState, nahad, addNahad] = useContext(mainContext)



    const [lossCount, addLoss] = useState<number>(0)



    const entityCount = 15;
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













    useEffect(() => {

        console.log("add one")
    }, [lossCount])






    return (


        <>



            <h1 className="absolute w-full text-5xl text-red-400 opacity-65 text-center mt-[20vh] float-left" >
                Loss Count : {lossCount}
            </h1>






            {nahad < 1 &&
                <div className="absolute bottom-36 w-full flex justify-center">
                    <button className="bg-green-400 px-6 rounded-lg"

                        onClick={() => {



                            let i = 0
                            let ouw = setInterval(() => {
                                i++

                                console.log(lossCount)
                                addNahad((prev: number) => {
                                    return prev + 1
                                })



                                if (i >= entityCount) {
                                    clearInterval(ouw)
                                }
                            }, Time);



                            let o = 0
                            let removing = setInterval(() => {
                                o++


                                addNahad((prev: number) => {
                                    return prev - 1
                                })





                                if (o >= entityCount) {
                                    clearInterval(removing)
                                }

                            }, Time * 1.75);









                        }}

                    >Start</button>
                </div>}
        </>


    )
}

export default Core