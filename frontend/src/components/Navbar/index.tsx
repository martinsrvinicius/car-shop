
import './styles.css'
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-md navbar-dark bg-primary main-nav navbar-container mb-4'>
                <div className='container-fluid flex-container'>
                    <Link to="/" className='nav-logo-text'>
                        <h4>Carros Top</h4>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#car-shop-navbar"
                        aria-controls="car-shop-navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="car-shop-navbar">
                        <ul className="navbar-nav main-menu col-md-3 col-lg-2 col-xl-2">
                            <li>
                                <NavLink to="/home" className={({isActive}) => isActive ? 'active' : ''} >
                                   Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''} >
                                   Catálogo
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;