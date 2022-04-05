function operations(arr){
    let sum=0
    let new_sum=0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
        if(arr[i]%2==0){
            arr[i] = arr[i] + i
            new_sum+=arr[i]
        }else{
            arr[i] = arr[i] - i
            new_sum+=arr[i]
        }
    }
    console.log(`[${arr.join(', ')}]\n${sum} \n${new_sum}`)
}
operations([-5,11,3,0,2])