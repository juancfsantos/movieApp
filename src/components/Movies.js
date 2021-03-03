import React from 'react'

class MovieRow extends React.Component {
    render() {
        return <table key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img alt="Poster" src={ this.props.movie.poster_source} width="300"/>
                        </td>
                        <td>
                            <h2 className="movieTitle">{this.props.movie.title}</h2>
                            <div className="movieDescription">
                                <p>Release date: {this.props.movie.release_date} | Popularity: { this.props.movie.popularity}</p>
                            </div>
                            <p className="movieDescription">{ this.props.movie.overview }</p>
                        </td>
                    </tr>
                </tbody>
            </table>
    }
}

export default MovieRow