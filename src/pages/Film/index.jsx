import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import api from "../../services/api";
import './film.css'


const Film = () => {
  const [film, setFilm] = useState([])
  const [loading, setLoading] = useState(true)
  console.log('film', film)
  const navigate = useNavigate()

  const { id } = useParams()

  const getFilmDetail = async () => {
    try {
    const response = await api.get(`/movie/${id}`, {
      params: {
        api_key: '8ee3957ba78e2d2c686262b1c590ad02',
        language: 'pt-BR',
      }
    })
      setFilm(response.data)
    } catch(error) {
      console.error('Erro ao buscar filme:', error.response || error.message || error)
      toast.error('Não conseguimos encontrar os detalhes do filme. Tente novamente mais tarde.')
      navigate('/', {replace: true})
    } 
    finally {
      setLoading(false)
    }
  } 

  const saveFilm = () => {
    const savedFilms = JSON.parse(localStorage.getItem('@primeFlix')) || []
    const hasFilm = savedFilms.some(item => item.id == film.id)
    if(hasFilm) {
      toast.warn('Este filme já está salvo!')
      return
    }
    savedFilms.push(film)
    localStorage.setItem('@primeFlix', JSON.stringify(savedFilms))
    toast.success('Filme salvo com sucesso!')
  }

  useEffect(() => {
    getFilmDetail()

    return () => {
      console.log('COMPONENTE DESMONTADO')
    }
  }, [])

  

  if(loading) {
    return (
        <div className='loading'>
            <h2 className="loading">Carregando filmes...</h2>
        </div>
    )
}

  
  return (
    <div className="film-info">
      <h1>{film.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.title} />
      <div className="rate">Avaliação: {Number(film.vote_average).toFixed(0)}/10</div>
      <h3>Sinopse</h3>
      <span>{film.overview}</span>
      

      <div className="area-buttons">
        <button onClick={saveFilm}>Salvar</button>
        <a target="_blank" href={`https://www.youtube.com/results?search_query=${film.title} Trailer`}>Trailer</a>
      </div>
    </div>
  )
}

export default Film