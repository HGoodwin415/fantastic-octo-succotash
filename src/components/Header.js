import { Link } from 'react-router-dom';
import '../App.css'


function Header() {
  return (
    <header className="header">
      <nav>
        <ul className='nav-links'>
          <li className='menu-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='menu-link'>
            <Link to="/about">About</Link>
          </li>
          <li className='menu-link'>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='menu-link'>
            <Link to="/skills">Skills</Link>
          </li>
          <li className='menu-link'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;