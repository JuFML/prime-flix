import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './home.css'

const Home = () => {
    const [films, setFilms] = useState([])
    console.log('films', films)

    const loadFilms = async () => {
        const response = await api.get('movie/now_playing', {
            params: {
                api_key: '8ee3957ba78e2d2c686262b1c590ad02',
                language: 'pt-BR',
                page: '1'
            }
        })
        setFilms(response.data.results)
    }

    useEffect(() => {
        loadFilms()
    }, [])
  return (
    <div className='container'>
        <div className='films-list'>
            {films.map(film => (
                <article key={film.id}>
                    <strong>{film.title}</strong>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                    <Link to={`/film/${film.id}`}>Acessar</Link>
                </article>
            ))}
        </div>
    </div>
  )
}

export default Home