function conversion(number){
    num=number.toString(8)
    let l =num.toString().length;
    let a =0
    let sum =0
    if (l < 5){
        for(let i= l;i>0; i--){
            a = (num % 10)
            console.log(a)
            sum += a*(2**(i-1))
            num=parseInt(num/10)
        }
        console.log(sum)
    }
    else{
        for(let i= l-1;i>0; i--){
            a = (num % 10)
            console.log(a)
            sum += a*(2**(i-1))
            num=parseInt(num/10)
        }
        console.log(sum)
    }
    
}
conversion(11110000)