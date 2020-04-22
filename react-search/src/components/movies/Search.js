import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Search extends Component {
    state={
        text:''
    };

    static propTypes = {
        searchMovies: PropTypes.func.isRequired,
        clearMovies: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something!', 'light');
        }else{
        this.props.searchMovies(this.state.text);
        this.setState({text:''})
        }
    }
    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value})
    
    render() {
        return (
            <div>
                <form onSubmit= {this.onSubmit} className ="form">
                    <input className ="searchBar"
                     type="text"
                     name="text"
                     placeholder="Search Movies.." 
                     value={this.state.text}
                     onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                    <button className="btn btn-light btn-block clear" 
                    onClick={this.props.clearMovies}>Clear Search</button>
            
                
            </div>
        )
    }
}

export default Search

