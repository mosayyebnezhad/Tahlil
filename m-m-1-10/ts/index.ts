import { RandExp } from "../../Utils";


//Input's
const lambda = 4;
const mu = 5
const entityCount = 1000
const Capacity = 10


// initial Varibles
let arrCount: number = 0;
let lossCount: number = 0;
let queueLength: number = 0;
let serverState: boolean = false;
let curruntTime: number = 0;

let nextArr = curruntTime + RandExp(1 / lambda);
let nextDep = curruntTime + RandExp(1 / mu);



while (arrCount < entityCount) {
    if (nextArr < nextDep) {

        arrCount++
        curruntTime = nextArr;

        if (!serverState) {
            serverState = true
            //+
        }
        else {

            if (queueLength < (Capacity - 1)) {

                queueLength++
                //+
            } else {
                lossCount++
                //+

            }
        }

        nextArr = curruntTime + RandExp(1 / lambda)
        // console.log("in : " + arrCount)


    } else {
        curruntTime = nextDep

        // console.log(queueLength)
        if (queueLength == 0) {
            serverState = false
            nextDep = nextDep + RandExp(1 / mu)
            // nextDep = Infinity
        } else {
            queueLength--
            nextDep = curruntTime + RandExp(1 / mu)
            // console.log("out : " + nextDep)
        }
    }
}



const P = lossCount / arrCount;

// console.log(`Probably Of this is: ${P}` )



