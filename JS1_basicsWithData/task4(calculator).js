function calculation(num1, action, num2){
    if(action=='+'){
        console.log((num1+num2).toFixed(2))
    }else if(action=='-'){
        console.log((num1-num2).toFixed(2))
    }
}
calculation(25.5,'-',3)