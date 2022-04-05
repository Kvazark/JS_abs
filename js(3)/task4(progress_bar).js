function check(num){
    if(num%10==0){
        progress(num)
    }else{
        console.log('Error: incorrect data.')
    }
}
function progress(num){
    arr1=[]
    arr2=[]
    n=num/10
    for(let i = 0; i < n; i++){
        arr1.push("%") 
    }
    for(let i=0; i < 10-n; i++){
        arr2.push('.')
    }
    if(num == 100){
        console.log(`${num}% Complete!\n[${arr1.join('')}]`)
    }else{
        console.log(`${num}% [${arr1.join('')+arr2.join('')}]\nStill loading...`)
    }
    
}
check(50)