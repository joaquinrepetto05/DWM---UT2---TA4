function sumAll (num1 , num2) {
    
    let sum = 0;
    
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);
}

sumAll(2 , 7)
sumAll(5 , 10)
sumAll(1 , 9)