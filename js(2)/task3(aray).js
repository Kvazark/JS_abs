function reverseArr(arr, num){
    new_arr=[]
    if( num <= arr.length){
        count = num
    }else{
        count = num-arr.length
    }

    for(let i =count; i < arr.length; i++){
        new_arr.push(arr[i])
    }
    for(let i =0; i < count; i++){
        new_arr.push(arr[i])                     
    }
    
    console.log(new_arr.join(' '))
}
reverseArr([2,4,15,31],5)