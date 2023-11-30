const movieIds = ['62177','10530','354912','812', '568124', '277834', '269149', '177572', '10198', '10674', '527774', '10020'];
const movieDetails = [];

async function getMovieDetails(movieID) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?append_to_response=images`, {
        method:'get',
        headers:{
            accept:'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjZkNzNmYzIyZjUxZjc1NGQ3NjY5OTg3OThjNzE0MSIsInN1YiI6IjY1MzY1NDNjYzhhNWFjMDBlMmI3ZWY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mfRdF7UFf82IrIspCXt1iL-bFdUmIg8pTSQeeslvu5Y`
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function getAllMovies(){
    for(let i = 0; i < movieIds.length; i++){
        const movie = await getMovieDetails(movieIds[i]);
        movieDetails.push(movie);
    }
    console.log(movieDetails);
}



async function displayCards(){
    await getAllMovies();
    const kacheln = document.getElementById('kachelnWrapper');
    for(let i = 0; i < movieIds.length; i++){
        const link = document.createElement('a');
        link.classList.add('card');
        link.href = `/movie/${movieDetails[i].id}.html`;
        link.innerHTML = `<img src="https://image.tmdb.org/t/p/w780${movieDetails[i].poster_path}" alt="">`
        kacheln.append(link);
    }
}



