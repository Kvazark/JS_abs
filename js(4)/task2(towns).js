class Town{
    constructor(element){
        this.name=element[0];
        this.latitude = parseFloat(element[1]).toFixed(2);
        this.longitude = parseFloat(element[2]).toFixed(2);

    }
    printInfo(){
        return `{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
    }
}

function conversion(arr){
    let towns = [];
    arr.forEach(element => {
        let town = new Town(element.split(' | '));
        towns.push(town);
    });

    towns.forEach(e => console.log(e.printInfo()));
}

conversion(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625']);