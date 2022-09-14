const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   params: {
      'api_key': APIKEY
   }
})

async function getTrendingMoviesPreview() {
   const {data} = await api('trending/movie/week')
   const movies = data.results

   movies.forEach(movie => {
      const trendingSection = document.querySelector('.trendingPreview-container')
      const trendingMoviesContainer = document.querySelector('.trendingPreview-movieList')
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

   categories.forEach(categorie => {
      const categoriesSection = document.querySelector('.categoriesPreview-container')
      const categoriesContainer = document.querySelector('.categoriesPreview-list')
      const categoryDiv = document.createElement('div')
      categoryDiv.classList.add('category-container')
      const categoryTitle = document.createElement('h2')
      categoryTitle.classList.add('category-title')
      categoryTitle.setAttribute('id', 'id' + categorie.id)
      categoryTitle.innerText = categorie.name
      categoryDiv.appendChild(categoryTitle)
      categoriesContainer.appendChild(categoryDiv)
      categoriesSection.appendChild(categoriesContainer)   
   });
}

getTrendingMoviesPreview()
getCategoriesPreview()