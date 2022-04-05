function printMatrix(n){

    var matrix = [];

    for (var i = 0; i < n; i++) {
        var row = [];
        for(var j = 0; j < n; j++){
            row.push(n);
            }
        matrix.push(row);
    }
    for(let i=0; i < n; i++){
        console.log(matrix[i].join('  '))
        console.log('')
    }
}

printMatrix(4)