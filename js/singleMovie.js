function getCurrentSlug(){
    const url = window.location.href;
    const slugs = url.split('/');
    const movieID = slugs[slugs.length-1].replace('.html',"");
    return movieID;
}



async function fillPage(backdropIndex) {
    const id = getCurrentSlug();
    const movie = await getMovieDetails(id);
    const title = document.getElementById('heroTitle');
    const overview = document.getElementById('overview');
    const headerImage = document.getElementById('singlePage');
    const releaseDate = document.getElementById('releaseDate');
    const splittedRelease = movie.release_date.split('-');
    const releaseYear = splittedRelease[0];
    const runtime = document.getElementById('runtime');
    const imgSection = document.getElementById('imgDiversity')
    title.textContent = movie.original_title;
    overview.textContent = movie.overview;
    releaseDate.textContent = releaseYear;
    runtime.textContent = movie.runtime +(' min');
    imgSection.src = `https://image.tmdb.org/t/p/w1280${movie.images.backdrops[backdropIndex].file_path}`;
    headerImage.style.backgroundImage = `linear-gradient(90deg, rgba(4,5,35,1) 0%, rgba(33,76,155,0) 100%), url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`;
}


