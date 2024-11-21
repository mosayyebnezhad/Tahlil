import { useContext, useEffect } from "react"
import { mainContext } from "../main"


export const Starter = () => {

    const [level, setLevel] = useContext(mainContext)




    const click = () => {
        let i = 0

        let intr = setInterval(() => {
            setLevel(i + 1)
            i++
            if (i == 25) clearInterval(intr)
        }, 1500);

     




    }





    
    return (
        <>

            {

                <div className="absolute top-[70vh] w-full flex justify-center items-center">
                    <button className=" px-12 bg-emerald-600 rounded text-gray-300" onClick={click}>
                        Start
                        {level}
                    </button>
                </div>
            }



        </>
    )
}