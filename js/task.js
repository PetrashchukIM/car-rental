let primeNumberArr = [2,3];

function isPrime(num){
    let found = false;
    let k = 2;
    let steep = 4; 

    for (let i=5; k<=num; i+=steep){
            primeNumberArr.push(i);
            k += 1;
            steep = (steep == 4)? 2: 4; 
    }
    primeNumberArr.forEach(item => {
        if (item === num) {
            found = true;
        }
    });
    return found;
}
