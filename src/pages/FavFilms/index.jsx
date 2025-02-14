import './favfilms.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FavFilms = () => {
    const [films, setFilms] = useState([])

    const getFavFilms = () => {
        const favFilms = localStorage.getItem('@primeFlix') || []
        setFilms(JSON.parse(favFilms))
    }

    useEffect(() => {
        getFavFilms()
    }, [])
  return (
    <div className='films-container'>
        <h1>Meus Filmes favoritos</h1>
        <ul>
            {
                films.map(film => (
                    <li key={film.id} className='film-item'>
                        <p>{film.title}</p>
                        <div>
                            <Link to={`/film/${film.id}`}>Ver detalhe</Link>
                            <button>Excluir</button>
                        </div>
                    </li>

                ))
            }
        </ul>
    </div>
  )
}

export default FavFilms