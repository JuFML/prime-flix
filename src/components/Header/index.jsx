import { Link } from "react-router-dom"

import './header.css'

const Header = () => {
  return (
    <header>
        <Link className="logo" to='/'>Prime Flix</Link>
        <Link className="favorites" to='/favorites'>Meu favoritos</Link>
    </header>
  )
}

export default Header