// const sum = (val) => {
//     if(val == 1) return 1
//     return val * sum(val-1)
// }
// console.log(sum(5));

// function hasDuplicateValue(array) {
//     let existingNumbers = [];
//     for(let i = 0; i < array.length; i++) {
//         console.log(existingNumbers[array[i]])
//         console.log(existingNumbers)        

//         if(existingNumbers[array[i]] === 1) { 
//             return true;
//         } else {
//             existingNumbers[array[i]] = 1;
//         } 
//     }
//     return false; 
// }

// console.log(hasDuplicateValue([1,2,3,5,2]))

function ran(cnt) {
    while(cnt > 0) {
        const res = [];
        const bad = [9,10,12,15,18,20,29,45]
        const soso = [11,25,34,44]
        const luck = [2,5,19,21,24,36,43]
        const luckTmp = luck[Math.floor(Math.random()*luck.length)];
            if( !bad.includes(luckTmp)) {
                res.push(luckTmp)
            }
        const tmp = Math.floor(Math.random()*2);
        if(tmp%2 ==0) {
            bad.push(soso[Math.floor(Math.random()*soso.length)])
        }
        while(res.length < 6) {
            const num = Math.floor(Math.random()*45) +1;
            if(!res.includes(num) && !bad.includes(num)) {
                res.push(num)
            }
        }
        console.log(res.sort((a, b) => a - b))
        cnt --;
    }
}
ran(20);