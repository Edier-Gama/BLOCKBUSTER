const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   params: {
      'api_key': APIKEY
   }
})

async function getTrendingMoviesPreview() {
   const {data} = await api('trending/movie/week')
   const movies = data.results

   const trendingMoviesContainer = document.querySelector('.trendingPreview-movieList')
   trendingMoviesContainer.innerHTML = ''
   movies.forEach(movie => {
      movies.innerText = ''
      const trendingSection = document.querySelector('.trendingPreview-container')
      const trendingMoviesDiv = document.createElement('div')
      trendingMoviesDiv.classList.add('movie-container')
      const trendingMoviesImg = document.createElement('img')
      trendingMoviesImg.classList.add('movie-img')
      trendingMoviesImg.setAttribute('alt', movie.title)
      trendingMoviesImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
      trendingMoviesDiv.appendChild(trendingMoviesImg)
      trendingMoviesContainer.appendChild(trendingMoviesDiv)
      trendingSection.appendChild(trendingMoviesContainer)   
   });
}

async function getCategoriesPreview() {
   const {data} = await api('genre/movie/list')
   const categories = data.genres
   const categoriesContainer = document.querySelector('.categoriesPreview-list')
   categoriesContainer.innerHTML = ''
   
   categories.forEach(categorie => {
      const categoriesSection = document.querySelector('.categoriesPreview-container')
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
      categoriesContainer.appendChild(categoryDiv)
      categoriesSection.appendChild(categoriesContainer)   
   });
}

async function getMovieByCategorie(id) {
   const {data} = await api(`discover/movie?with_genres=${id}`)
   const movies = data.results

   genericSection.innerHTML = ''

   movies.forEach(movie => {
      const categoryMovieDiv = document.createElement('div')
      categoryMovieDiv.classList.add('movie-container')
      const categoryMovieImg = document.createElement('img')
      categoryMovieImg.classList.add('movie-img')
      categoryMovieImg.setAttribute('alt', movie.title)
      categoryMovieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path)
      categoryMovieDiv.appendChild(categoryMovieImg)
      genericSection.appendChild(categoryMovieDiv)

   })  
}