import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const  Navbar = ({ icon, title }) =>{
        return (
         <nav>
          <div className="topnav">
          <i className={icon}></i>
          <h1>{title}</h1>
          <div className="topnav-right">
            <Link to='/' className="link"><i class="fas fa-home"></i> Home</Link>
            <Link to='/about' className="link">About</Link>
            </div>
          </div>
         </nav>
          )
    }

Navbar.defaultProps = {
    title:'Movie Database Search',
    icon: 'fas fa-film fa-4x left'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
