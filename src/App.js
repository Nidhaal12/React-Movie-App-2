
import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMovie from './MovieList'
import AddModal from "./Modal";
import { v1 as uuidv1 } from 'uuid';
import Search from './Search';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      movies: [
        {
          id:uuidv1(),
          title: "Jumanji",
          image:
          "https://cdn-static.egybest.net/serve/movies/art-2799680260-x300.jpg",
          rating: "5",
          year: "2019"
        },
        {
          id:uuidv1(),
          title: "Insane",
          image:
            "https://cdn-static.egybest.net/serve/movies/art-0177839168-x300.jpg",
          rating: "2",
          year: "2010"
        },
        {
            id:uuidv1(),
            title: "The Box",
            image:
            "https://cdn-static.egybest.net/serve/movies/art-0510929107-x300.jpg",
            rating: "4",
            year: "2009"
          },
          {
            id:uuidv1(),
            title: "Sonic",
            image:
              "https://cdn-static.egybest.net/serve/movies/art-2838056871-x300.jpg",
            rating: "3",
            year: "2020"
          },
           
      ], keyword:'',
            keyrate:'',

    }
  }

  add = NewMovie => {
    this.setState({
      movies: this.state.movies.concat(NewMovie)
    });
  };

  search = newSearch => {
    this.setState({keyword: newSearch})
  }

  rate = newRate => {
    this.setState({keyrate: newRate})
  }


  render() {
    return(
    <div className="App">
      <h1 id="h1">React-Movie-App!!</h1>
      <Search search={y => this.search(y)} rate={r => this.rate(r)}/>
      <ListMovie movies={this.state.movies.filter(el => el.rating >= this.state.keyrate && el.title.toUpperCase().includes(this.state.keyword.toUpperCase().trim()))} />
      <AddModal addmovie={y => this.add(y)} />
    </div>
          )
  
}
}
export default App