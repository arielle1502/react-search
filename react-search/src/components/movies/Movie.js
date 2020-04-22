import React, { Component } from 'react'

export class Movie extends Component {
    componentDidMount(){
        this.props.getMovie(this.props.match.params.title);
    }
    render() {
        const {
            title,
            homepage,
            popularity,
            poster_path,
            tagline,
            id
        } = this.props.movie;

        const { loading } = this.props;

        return (
            <div>
                {title}
                {homepage}
                {popularity}
                {poster_path}
                {tagline}
                {id}
            </div>
        )
    }
}

export default Movie
