function matrixCheck(matrix){
    let sum_row=[]
    let sum =0
    let sum_column=[]


    for(let i=0; i < matrix.length; i++){
        let len = matrix[i].length
        for(let j =0; j < len;j++){
            sum += matrix[i][j]
        }
        sum_row.push(sum)
        sum=0
             
    }
    for(let i=0; i < matrix.length; i++){
        let len = matrix[i].length
        for(let j =0; j < matrix.length;j++){
            sum += matrix[j][i]
            
        }
        sum_column.push(sum)
        sum=0
    }
    console.log(JSON.stringify(sum_row)==JSON.stringify(sum_column))

}
matrixCheck([[1,2,1],[3,1,0],[0,1,0]])