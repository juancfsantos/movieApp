import React, { Component } from 'react'

class TabView extends Component{
    constructor(props) {
        super(props)
        console.log("testing initializer")

        const movies = [
            { id: 0, poster_source: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8jDvtdH327I8TgX3UPdkAsZF1dA.jpg", title: "Test Movie 1", overview: "Test Overview 1", release_date: "01/01/2020", popularity: "100", },
            { id: 1, poster_source: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg", title: "Test Movie 2", overview: "Test Overview 2", release_date: "01/01/2021", popularity: "200", },
            { id: 2, poster_source: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mE2WdHdIwPdnOpfrswpvm6ZyKJu.jpg",title: "Test Movie 3", overview: "Test Overview 3", release_date: "01/01/2022", popularity: "500", },
        ]

        this.state = {
            rows: [ <p key="1">This is my row 1</p>,
                    <p key="2">This is my row 2</p>,
                    <p key="3">This is my row 3</p>,]
        }

        var movieRows = []

        movies.forEach((movie) => {
            console.log(movie.title);
            const movieRow = <table key={movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img alt="Poster" src={ movie.poster_source} width="300"/>
                        </td>
                        <td>
                            {movie.title}
                            <p>Release date: {movie.release_date} | Popularity: { movie.popularity}</p>
                            <p>{ movie.overview }</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            movieRows.push(movieRow)
        })

        this.state = {rows: movieRows}
    }

    render() {
        return (
            <div>{this.state.rows}</div>
        )
    }
}

export default TabView