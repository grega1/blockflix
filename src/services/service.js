import axios from "axios";
const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "56612e2a0bc14a6546ab2b396a87375a"
const infoByCategory = {
  "action": {
      id: "28",
      title: "Ação"
  },
  "horror": {
      id: "27",
      title: "Terror"
  },
  "romance": {
      id: "10749",
      title: "Romance"
  },
  "comedy": {
      id: "35",
      title: "Comédia"
  },
  "documentary": {
      id: "99",
      title: "Documentário"
  },
}
export const MoviesService = {
  async getMovies() {
    const response = await axios.get(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1%22`);
    response.data.results.forEach((e) =>{
      e.length = 0;
    })
    return response.data.results
   
  },
  async getFilteredMovies(categoryID) {
    //const response = await  axios.get(`${API_URL}/discover/movie?with_genres=${categoryID}&language=pt-BR&api_key=${API_KEY}}`)
    const response = await  axios.get(`${API_URL}/discover/movie?with_genres=${categoryID}&language=pt-BR&api_key=${API_KEY}&page=1`)
    //https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=56612e2a0bc14a6546ab2b396a87375a&language=en-US
    response.data.results.forEach((e) =>{
      e.length = 0;
    })
    return response.data.results
  }

}

