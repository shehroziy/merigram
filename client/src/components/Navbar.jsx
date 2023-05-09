import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="white">
    <div className="nav-wrapper navBg container">
      <Link to="/" className="brand-logo">Devgram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/signin">Kirish</Link></li>
        <li><Link to="/signup">Ro'yxatdan o'tish</Link></li>
        <li><Link to="/profile">Mening profilim</Link></li>
        <li><Link to="/createpost">Maqola yozish</Link></li>
      </ul>
    </div>
  </nav>
  )
}
