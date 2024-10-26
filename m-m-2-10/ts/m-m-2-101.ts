import { RandExp } from '../../Utils';

const lambda = 4;
const mu = {
    first: 5,
    second: 5
};
const entityCount = 1000;
const Capacity = 10;

let arrCount: number = 0;
let lossCount: number = 0;
let queueLength: number = 0;

let serverState = {
    first: false,
    second: false
};

let curruntArr: number = 0;
let nextArr: number = RandExp(1 / lambda);

curruntArr = nextArr;

let nextDep = {
    first: curruntArr + RandExp(1 / mu.first),
    second: curruntArr + RandExp(1 / mu.second)
};

while (arrCount < entityCount) {
    if (nextArr <= nextDep.first && nextArr <= nextDep.second) {
        arrCount++;
        curruntArr = nextArr;
        
        if (!serverState.first) {
            serverState.first = true;
            nextDep.first = curruntArr + RandExp(1 / mu.first);
        } else if (!serverState.second) {
            serverState.second = true;
            nextDep.second = curruntArr + RandExp(1 / mu.second);
        } else if (queueLength < (Capacity - 2)) {
            queueLength++;
        } else {
            lossCount++;
        }
        nextArr = curruntArr + RandExp(1 / lambda);
    } else {
        if (nextDep.first < nextDep.second) {
            curruntArr = nextDep.first;
            if (queueLength === 0) {
                serverState.first = false;
                nextDep.first = curruntArr + RandExp(1 / mu.first);
            } else {
                queueLength--;
                nextDep.first += RandExp(1 / mu.first);
            }
        } else {
            curruntArr = nextDep.second;
            if (queueLength === 0) {
                serverState.second = false;
                nextDep.second = curruntArr + RandExp(1 / mu.second);
            } else {
                queueLength--;
                nextDep.second += RandExp(1 / mu.second);
            }
        }
    }
}

console.log(`lossCount : ${lossCount} | total count : ${arrCount}`);
