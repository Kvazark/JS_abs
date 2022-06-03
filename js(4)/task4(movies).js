class Movie{
    constructor(name){
        this.name = name;
    }
}

function conversion(arr){

    var movies = [];
    arr.forEach(e => {
        //console.log(word[1]);
        
        if (e.startsWith('addMovie')) {

            let name = e.substring(9);
            movies.push(new Movie(name));

        }else if(e.includes('directedBy')){

            let nameMovie = e.split(' directedBy ')[0]; 
            let movie = movies.findIndex(item => item.name === nameMovie);
            if( movie !== -1){
                movies[movie].directorBy = e.split(' directedBy ')[1];
            }
                       
        }else if(e.includes('onDate')){
            let nameMovie = e.split(' onDate ')[0]; 
            let movie = movies.findIndex(item => item.name === nameMovie);
            if( movie !== -1){
                movies[movie].date = e.split(' onDate ')[1];
            }
            
        } 
    });
    
    movies.forEach(movie=> {console.log(JSON.stringify(movie));}); 
    
} 


conversion(['addMovie Fast and Furious', 
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen']);
