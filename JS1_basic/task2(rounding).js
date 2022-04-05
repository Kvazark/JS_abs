function rounding(num1, num2){
    let str = num1.toString();
    let l = str.split('.').map(i => i.length)
    if (l[1] < num2){
        console.log(num1.toFixed(l[1]))
    }
    else{
        console.log(num1.toFixed(num2))
    }
}
rounding(3.14,5)