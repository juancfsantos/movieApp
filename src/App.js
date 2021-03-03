import React, { Component, useEffect, useState } from 'react'
import Title from './components/Title'
import './App.css';
import MovieNP from './components/MovieNowPlaying'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpComingMovies from './components/UpComingMovies'
import SearchFieldMovies from './components/SearchMovies'
import SearchFieldTV from './components/SearchTV'
import SearchMulti from './components/SearchMulti'
import AiringTodayTV from './components/AiringTodayTV'
import OnTheAirTV from './components/OnTheAirTV'
import PopularTV from './components/PopularTV'
import TopRatedTV from './components/TopRatedTV'


class App extends Component {
  

  render() {
    return (
      <div className='wrapper'>
        <div className='titleDiv'>
          <Title />
        </div>
        <div className='searchDiv'>
          <SearchFieldMovies />
        </div>
         <div className='searchDiv'>
          <SearchFieldTV />
        </div>
         <div className='searchDiv'>
          <SearchMulti />
        </div>
         <div className='movieContainer'>
          <MovieNP />
        </div>
         <div className='movieContainer'>
          <PopularMovies />
        </div>
        <div className='movieContainer'>
          <TopRatedMovies />
        </div>
        <div className='movieContainer'>
          <UpComingMovies />
        </div>
        <div className='tvContainer'>
          <AiringTodayTV />
        </div>
        <div className='tvContainer'>
          <OnTheAirTV />
        </div>
        <div className='tvContainer'>
          <PopularTV />
        </div>
        <div className='tvContainer'>
          <TopRatedTV />
        </div>
        
      </div>
    )
  }
}

export default App;
