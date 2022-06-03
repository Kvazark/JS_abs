class Product{
    constructor(pair){
        this.name = pair[0];
        this.count = pair[1];
    }
    printInfo(){
        return `${this.name} -> ${this.count}`;
    }
}
function conversion(arr1,arr2){

    let count =0;
    for( let i =0; i < arr2.length; i+=2){
        if(arr2.includes(arr1[i])){
            for( let j=0; j < arr2.length; j+=2){
                if (arr2[j]===arr1[i]){
                    arr1[i+1]=Number(arr1[i+1])+Number(arr2[j+1]);
                }
            }
        }
        for(let j=0; j < arr1.length; j+=2){
            if (arr2[i] !== arr1[j]){
                count +=1;
            }
            if (count*2 === arr1.length){
                arr1.push(arr2[i], arr2[i+1]);
                
            }
        }
        count =0;
    }
   // arr1.forEach(e => {console.log(e)});
   
   let products = [];
    for(let i =0; i <arr1.length; i+=2){
        let param = arr1[i].concat(' ',arr1[i+1]);
        let product = new Product(param.split(' '));
        products.push(product);
    }
   
    products.forEach(e => console.log(e.printInfo()));

}

conversion(['Chips', '5','CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);