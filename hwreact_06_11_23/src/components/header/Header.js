import { Link } from "react-router-dom"
import './header.css'

function Header() {
    return(
        <header>
            <h2>Header</h2>
            <div className="header_ul"> 
                <ul>
         
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/imp">Impressum</Link></li>
          
         
                </ul>
            </div>
        </header>
    )
}

export default Header