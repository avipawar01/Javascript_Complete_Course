// 1 - 1000 number sum 

function sumToNum(num){
    var ans = 0;
    for(let i=1; i<=num; i++){
        ans = ans + i;
    }

    return ans;
}

const result = sumToNum(1000);
console.log(result);