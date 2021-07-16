import { GenreResponseProps } from "../../App"
import { MovieCard } from "../MovieCard/MovieCard"
import '../Content/content.scss';




interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
 

interface ContentProps{
  movies: MovieProps[];
  selectedGenre: { 
    title: string;
 }
}


export function Content({movies, selectedGenre}: ContentProps) {
 return (
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
 )
}