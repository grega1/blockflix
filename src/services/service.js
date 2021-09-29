import axios from "axios";
//API_KEY = api_key=56612e2a0bc14a6546ab2b396a87375a
export const MoviesService = {
  async getMovies(){
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=56612e2a0bc14a6546ab2b396a87375a")
    return response.data.results
  } 
}
console.log(MoviesService);