async function getTrendingMoviesPreview() {
   const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
   const data = await res.json()
   const movies = data.results
   console.log(movies);

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

async function getTrendingMoviesPreview() {
   const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
   const data = await res.json()
   const movies = data.results
   console.log(movies);

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

getTrendingMoviesPreview()
