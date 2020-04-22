import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const  Navbar = ({ icon, title }) =>{
        return (
            <nav>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
              <i className={icon}></i>
              </td>
              <td width="8"/>
              <td>
                <h1>{title}</h1>
              </td>
              <td width="650"/>
              <td></td>
              <td>
                <Link to='/'>Home</Link>
              </td>
              <td width="50"/>
              <td></td>
              <td>
                <Link to='/about'>About</Link>
              </td>
            </tr>
          </tbody>
        </table>
            </nav>
        )
    }

Navbar.defaultProps = {
    title:'Movie Database Search',
    icon: 'fas fa-film fa-2x'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
