import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import $ from 'jquery'
import MovieRow from './Movies'
import Button from '@material-ui/core/Button'


class SearchMulti extends Component {
  constructor(props) {
    super(props)
      this.state = {
      show:true
    }
    this.searchQuery()
  }

  searchQuery(query) {
    // console.log(query)

    // console.log("Search using movieDB")
    const urlString = "https://api.themoviedb.org/3/search/multi?api_key=ea56a12189ee8150069aceef86a26608&query=" + query
    
    if (query !== undefined) {
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Data fetched sucessfully")
          // console.log(searchResults)

          const results = searchResults.results
          // console.log(results[0])
          
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
    else {
     console.log("No movie title typed")
    }
  }
  searchHandler(event) {
    // console.log(event.target.value)
    const boundObject = this
    // console.log(this)
    const typedQuery = event.target.value
    if (typedQuery === "" | undefined) {
      console.log("UNDEFINED MOVIE")
    }
    else {
      boundObject.searchQuery(typedQuery) 
    }    
  }
  render() {
    return(
      <div>
        <h1>Multi Search</h1>
     <form className='searchForm' noValidate autoComplete="off">
              <TextField id="searchForm_query" label="Type here to search " variant="outlined" onChange={this.searchHandler.bind(this)} />
              <Button variant="contained" color='primary' onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'}</Button>
      </form>
        <div className='movieResultsDiv' >
          {this.state.show ? <div>{this.state.rows}</div> : null}
        </div>
        </div>
      )
  }
}



export default SearchMulti