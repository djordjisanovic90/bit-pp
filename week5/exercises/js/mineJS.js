function Movie(title,length,genre){
    this.movieTitle=title;
    this.movieLength=length;
    this.movieGenre=genre;
}

Movie.prototype.showData = function(){
    return this.movieTitle + ', ' + this.movieLength + ' min' + ', ' + this.movieGenre.getAcronym();
}

Movie.prototype.getAcronym = function(){
    var acr = (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();  // da li radi ovaj nacin zapisa???
    return acr;
}

var allMovies = [];

function MovieSelect (movie){  // odakle nam movie argument?
    var movieSelect = '';
    movieSelect = '<option value="' + movie.movieTitle + '">' + movie.movieTitle + '</option>\n'; // objasnjenje linije
    var movieSelector = document.querySelector('#movie-selector');
    movieSelector.innerHTML += movieSelect;  // inner???
}

// document.querySelector('.create-movie').addEventListener('click', function (event) {

// }

// ........................................
    var movieTitleInput = document.querySelector('#movie-title');
    var movieLengthInput = document.querySelector('#movie-length');
    var movieGenreInput = document.querySelector('#genre-selector');
    var create=document.querySelector('#list');
    var createMovieBtn = document.querySelector('.create-movie');
function getFormInput(){
    return movieTitleInput.value + ', ' + movieLengthInput.value + ' min' + ',' + movieGenreInput.value;
    
}
createMovieBtn.addEventListener('click',function(){
    getFormInput();
    document.querySelector('#movie-title').value = '';
    document.querySelector('#movie-length').value = '';
    movieGenreInput.selectedIndex = 0;


    var li = document.createElement('li');
    var liContent = getFormInput();
    create.liContent;
    var list = document.querySelector('#hope').appendChild(li);
})

//error


