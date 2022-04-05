function summ(num){
    let a=0
    let sum =0
    while(num>=1){
        a = num % 10
        sum+=a
        num =parseInt(num /10)
    }
    console.log(sum)
}
summ(543)