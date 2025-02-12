//'https://api.themoviedb.org/3/movie/now_playing?api_key=SuaChaveAqui&language=pt-BR'
//Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWUzOTU3YmE3OGUyZDJjNjg2MjYyYjFjNTkwYWQwMiIsIm5iZiI6MTczOTMyNTY2OC44NzYsInN1YiI6IjY3YWMwMGU0OWVkNzNhNDMyNGIwOGNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wq30AYdUduNxo9NPeTILOgq2plRohiSaZ_QKpqiuzK4'
// 'accept: application/json'
//8ee3957ba78e2d2c686262b1c590ad02
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default api