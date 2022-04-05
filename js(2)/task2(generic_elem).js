function generic(arr1,arr2){
    new_arr=[]
    for( let i=0; i <arr1.length; i++){
        if(arr2.includes(arr1[i])){
            new_arr.push(arr1[i])
        }
    }
    console.log(new_arr.join('\n'))
    
}
generic(['Hey','hello',2,4,'Peter','e'],['Petar',10,'hey',4,'hello','2'])