function checkEnter(event) {
    if (event.key === "Enter") {
        // Prevent the default behavior of the Enter key (form submission, etc.)
        event.preventDefault();

        // Trigger the button click
        performSearch();
    }
}





function clearInput() {
    document.getElementById("searchInput").value = "";
}


function performSearch() {
    var query = document.getElementById("searchInput").value;
    document.getElementById("results").style.display="block";
    document.getElementById("yt-results").style.display="block";


    if (query.trim() === "") {
        alert("Search for any movie, series or anime");
        return;
    }

    var key = 'ea72ed34';

    getMoviepost(query, key);

    var hdhub4uUrl = `https://hdhub4u.mov/search/${encodeURIComponent(query)}`;
    var vegamoviesUrl = `https://vegamovies.ngo/?s=${encodeURIComponent(query)}`;
    var themoviesverse = `https://themoviesverse.cc/search/${encodeURIComponent(query)}`;
    var movies4uUrl = `https://movies4u.date/search/${encodeURIComponent(query)}`;
    var olamoviesurl = `https://olamovies.yachts/search/${encodeURIComponent(query)}`;
    var mkvcinemasurl = `https://mkvcinemas.zip/?s=${encodeURIComponent(query)}`;
    var worldfree4uurl = `https://worldfree4u.zip/?s=${encodeURIComponent(query)}`;
    var xflixurl = `https://9xflix.trade/m/?s=${encodeURIComponent(query)}`;
    var yturl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    var imbdurl = `https://www.imdb.com/find/?q=${encodeURIComponent(query)}`;
    var trailerurl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}+trailer`;
    var animeplanet = `https://www.anime-planet.com/anime/all?name=${encodeURIComponent(query)}`;
    var nineanimes = `https://9animes.ph/?s=${encodeURIComponent(query)}`;

    // Display the links on the webpage
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = `
        <h2>Download ${query} for free.</h2>
        <p class="result-link" data-aos="zoom-in-up"><b> HDHub4u:  <br> <a href="${hdhub4uUrl}" target="_blank">${hdhub4uUrl}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> VegaMovies: </b> <br> <a href="${vegamoviesUrl}" target="_blank">${vegamoviesUrl}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> The MoviesVerse : </b> <br> <a href="${themoviesverse}" target="_blank">${themoviesverse}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> Movies4u: </b> <br> <a href="${movies4uUrl}" target="_blank">${movies4uUrl}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> Ola Movies: </b> <br> <a href="${olamoviesurl}" target="_blank">${olamoviesurl}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> mkv Cinemas : </b> <br> <a href="${mkvcinemasurl}" target="_blank">${mkvcinemasurl}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> World Free4u : </b> <br> <a href="${worldfree4uurl}" target="_blank">${worldfree4uurl}</a></p>
        <p class="result-link" data-aos="zoom-in-up"><b> 9xflix : </b> <br> <a href="${xflixurl}" target="_blank">${xflixurl}</a></p>
    `;

    var ytResultsContainer = document.getElementById("yt-results");
    ytResultsContainer.innerHTML = `
    <div id="poster"></div>
    <h3>
    <details>
  <summary>For Anime</summary>
  <h3>Watch Online ${query}. </h3>
  <p class="result-link" data-aos="zoom-in-up"><b> Anime Planet : </b> <br> <a href="${animeplanet}" target="_blank">${animeplanet}</a></p>
  <p class="result-link" data-aos="zoom-in-up"><b> 9 Animes : </b> <br> <a href="${nineanimes}" target="_blank">${nineanimes}</a></p>
  </details>
  </h3>
  <hr />


  <h3>
  <details>
  <summary>  Check IMDB of ${query}.</summary>
    <p class="result-link" data-aos="zoom-in-up"><b> imdb : </b> <br> <a href="${imbdurl}" target="_blank">${imbdurl}</a></p>
    </details>
     </h3>
     <hr />

    <h3>See the trailer of ${query}.</h3>
    <p class="result-link" data-aos="zoom-in-up"><b> Trailer : </b> <br> <a href="${trailerurl}" target="_blank">${trailerurl}</a></p>


    <h3>Watch Online ${query}.</h3>
    <p class="result-link" data-aos="zoom-in-up"><b> HDHub4u Online:  <br> <a href="${hdhub4uUrl}" target="_blank">${hdhub4uUrl}</a></p>
    <p class="result-link" data-aos="zoom-in-up"><b> YouTube : </b> <br> <a href="${yturl}" target="_blank">${yturl}</a></p>

   
    
    `;
    // <h3>See the results of ${query} on YouTube.</h3>
    // <p class="result-link" data-aos="zoom-in-up"><b> YouTube : </b> <br> <a href="${yturl}" target="_blank">${yturl}</a></p>

    // <iframe width="560" height="315" src="https://www.youtube.com/embed/${yturl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}
function show() {
}


// Function to get the movie poster from OMDb API
let getMoviepost = (query, key) => {
    let movieName = query;
    let url = `https://www.omdbapi.com/?t=${query}&apikey=${key}`;

    if (movieName.length <= 0) {
        // This block is empty, consider removing it
    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                let poster = document.getElementById("poster");

                if (data.Response == 'True') {
                    poster.innerHTML = `
                            <img src=${data.Poster} class="poster">
                            
                        `;
                } else {
                    poster.innerHTML = `<p>${query} images are not available</p>`;
                }
            })
            .catch(() => {
                let poster = document.getElementById("poster");
                poster.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
            });
    }
};
