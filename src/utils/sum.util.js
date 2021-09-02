export const sum = (obj)=>{
    let sum = 0
    for(let {value} of obj){
        sum+=value
    }

    return sum
}