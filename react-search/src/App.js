import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import axios from 'axios';
import Search from './components/movies/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Movie from './components/movies/Movie'

class App extends Component{
  state={
    movies : [],
    movie:{},
    loading: false, 
    alert: null
  }
  // async componentDidMount(){
  //   this.setState({ loading: true});
  //   const res = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=31312df25474a7f45c2d9fc01558cea4&language=en-US&query=%20women&page=1&include_adult=false');
  //   this.setState({movies: res.data.results, loading:false})
    
  // }
  // searches movie db api
  searchMovies = async (text) =>{
    this.setState({ loading: true});
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=31312df25474a7f45c2d9fc01558cea4&language=en-US&query=${text}&page=1&include_adult=false`);
    this.setState({movies: res.data.results, loading:false})
    console.log(res.data.results)
  }
  // get single movie item
  getMovie = async (id) => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=31312df25474a7f45c2d9fc01558cea4&language=en-US`);
    console.log(res.data)
    this.setState({movie: res.data, loading:false})
  }
  // clears users from search
  clearMovies= () => this.setState({ movies: [], loading: false});

//  set alert
setAlert = (msg, type) => {
  this.setState({alert:{ msg:msg, type:type} });

  setTimeout(() => this.setState({alert:null}), 5000)
}

  render(){
    const { movies, movie, loading } = this.state;
    return(
      <Router>
      <div className='App'>
        <Navbar/>
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render ={props=>(
              <Fragment>
                <Search 
                  searchMovies={this.searchMovies} 
                  clearMovies={this.clearMovies}
                  setAlert={this.setAlert}
                />
                <Movies loading={loading} movies={movies}/>
              </Fragment>
            )}
            />
            <Route exact path='/about' component={About}/>
            <Route exact path='/movie/:title' render={props=>(
              <Movie {...props} getMovie={this.getMovie} movie={movie} loading={loading}/>
            )} />
          </Switch>
          
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
