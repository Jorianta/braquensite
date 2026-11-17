import { insertSorted } from "../util/util"

export function rollDice(rolls: number, sides: number): [number[], number] {
    if(rolls <= 0 || sides <= 0) throw "Dice need to have at least 2 sides, and you need to roll at least 1 die!"

    let results: number[] = []
    let sum = 0

    for(let i=0; i<rolls; i++)
    {
        let r = Math.floor(Math.random()*sides)+1
        sum += r
        insertSorted(r, results, (a,b)=>b-a)
    }

    return [results, sum]
}

export function shuffle<T>(array: T[], rng: ()=>number = Math.random): T[]{

    for(let i = array.length -1; i > 0; i-=1){
        let swapIdx = Math.floor(rng() * (i+1))

        const temp = array[i]
        array[i] = array[swapIdx]
        array[swapIdx] = temp
    }

    return array
}