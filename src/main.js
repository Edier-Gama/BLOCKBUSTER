function createMovies(movies, container) {

   container.innerHTML = ''
   
   movies.forEach(movie => {
      movies.innerText = ''
      const trendingMoviesDiv = document.createElement('div')
      trendingMoviesDiv.classList.add('movie-container')
      const trendingMoviesImg = document.createElement('img')
      trendingMoviesImg.classList.add('movie-img')
      trendingMoviesImg.setAttribute('alt', movie.title)
      trendingMoviesImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
      trendingMoviesDiv.appendChild(trendingMoviesImg)
      container.appendChild(trendingMoviesDiv)  
})
}

function createCategories(categories, container) {

   container.innerHTML = ''
   
   categories.forEach(categorie => {
      const categoryDiv = document.createElement('div')
      categoryDiv.classList.add('category-container')
      const categoryTitle = document.createElement('h2')
      categoryTitle.classList.add('category-title')
      categoryTitle.setAttribute('id', 'id' + categorie.id)
      categoryTitle.innerText = categorie.name

      categoryTitle.addEventListener('click', () => {
         location.hash = `#category=${categorie.id}-${categorie.name}`
      })
      categoryDiv.appendChild(categoryTitle)
      container.appendChild(categoryDiv)  
   });
}

async function getTrendingMoviesPreview() {
   const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
   data = await res.json()
   const movies = data.results

   const trendingMoviesContainer = document.querySelector('.trendingPreview-movieList')
   createMovies(movies, trendingMoviesContainer)
}

async function getCategoriesPreview() {
   const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}`)
   const data = await res.json()
   const categories = data.genres

   createCategories(categories, categoriesPreviewList)

}

async function getMovieByCategorie(id) {
   const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${id}`)
   const data = await res.json()
   const movies = data.results

   createMovies(movies, genericSection)
}