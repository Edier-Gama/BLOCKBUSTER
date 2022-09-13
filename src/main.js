async function getTrendingMoviesPreview() {
   const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
   const data = await res.json()
   const movies = data.results
   console.log({data, movies});
}

getTrendingMoviesPreview()
