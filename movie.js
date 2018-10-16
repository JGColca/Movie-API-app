let moviesSmall = document.getElementById("moviesSmall")
let moviesLarge = document.getElementById("moviesLarge")
let movieLink = document.getElementsByClassName("movieLink")
let movieSearchTextBox = document.getElementById('movieSearchTextBox')
let movieSearchButton = document.getElementById('movieSearchButton')

movieSearchButton.addEventListener('click', function () {

let searchValue = movieSearchTextBox.value    

moviesSmall.innerHTML = ""


const MOVIES_URL = "http://www.omdbapi.com/?s=" + searchValue + "&apikey=" + omdbKey

function getAllMovies(completion) {
    $.get(MOVIES_URL, function (movieData) {
    completion(movieData)})
}

getAllMovies(function(movies){
    let moviesArray = movies.Search
    

    function displayMovies() {
        
        for (let index = 0; index < moviesArray.length; index++) {
        
            let movie = moviesArray[index]
            
            
            
            function createMovieItem() {
            
            return `<div class ="movieSmall">
            <img class = "posterThumbnail" src="${movie.Poster}" alt = "Poster not available"></img>
            <a class="movieLink" id = "${index}" poster="${movie.Poster}" href="javascript:;">${movie.Title}
            </a>
            </div>`}
            
            
            
            moviesSmall.insertAdjacentHTML('beforeend',createMovieItem())
            
            
        }
           
   
           
            } 
    
    displayMovies()

    function displayLargeMovie() {

        for (let index = 0; index < moviesArray.length; index++) {



            let linkID = document.getElementById(index)
            $(linkID).click(function () {
                let id = $(this).attr("id")
                let imdb = ("https://www.imdb.com/title/" + moviesArray[id].imdbID)
                moviesLarge.innerHTML = `<div class ="movieLarge">
            <img class = "posterLarge" src="${moviesArray[id].Poster}"></img>
            <p>${moviesArray[id].Title}</p>
            <p>${moviesArray[id].Year}</p>
            <a href = ${imdb}>IMDB Page</a>
            </div>`


            })

        }

    }
    displayLargeMovie()
})
})            

         
                
                
                
            
        
        
     

       
    
    
    
    


        


   
   

    


    









    

