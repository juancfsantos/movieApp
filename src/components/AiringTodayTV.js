import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import $ from 'jquery'
import MovieRow from './Movies'

class AiringTodayTV extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show:true
    }
    // this.showMovies()
  }

  showMovies() {
    const urlString = "https://api.themoviedb.org/3/tv/airing_today?api_key=ea56a12189ee8150069aceef86a26608&page=1"
    $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Data fetched sucessfully")
          const results = searchResults.results
          var movieRows = []
          results.forEach((movie) => {
            movie.poster_source = "https://image.tmdb.org/t/p/w500" + movie.poster_path
            // console.log(movie.title)
            const movieRow = <MovieRow movie={movie} />
            movieRows.push(movieRow)
          })

          this.setState({ rows: movieRows })
        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch data")
        }
      })
  }

  render() {
    return(
      <div>
        <h1>TV: Airing Today</h1>
    <form className='searchForm' noValidate autoComplete="off">
              {this.state.show ?<Button variant="contained" color='primary' onClick={this.showMovies.bind(this)}>Show</Button>: null}
              <Button variant="contained" color='primary' onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'}</Button>
      </form>
        <div className='movieResultsDiv' >
          {this.state.show ? <div>{this.state.rows}</div> : null}
        </div>
        </div>
      )
  }
}



export default AiringTodayTV