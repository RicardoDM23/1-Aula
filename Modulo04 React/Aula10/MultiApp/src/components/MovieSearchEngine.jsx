import { useState } from "react"
import axios from 'axios'
import styled from "styled-components"

// https://developer.themoviedb.org/reference/discover-movie
// https://omdbapi.com/?s=${query}&apikey=6f636aa
// https://developer.themoviedb.org/docs/getting-started


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; 
  overflow-y: auto; 
  width: 100%;
`

const MovieCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 180px; 
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    max-width: 100%; 
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`

const MovieSearchEngine = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  const searchMovies = async () => {
    try {
      // const response = await axios.get(`https://omdbapi.com/?s=${query}&apikey=6f636aa`)
      // setMovies(response.data.Search)

      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query: query,
          api_key: 'bbaa47e1396f61194d972f3b6db697d4'
        }
      })
      setMovies(response.data.results)
      console.log('1')
      console.log(response.data.results)
      console.log('2')
      console.log(response.data.results[0].poster_path)
      console.log('3')
      console.log(response.data.results[0].title)
      console.log('4')
      console.log(response.data.results[0].release_date)

      // const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=bbaa47e1396f61194d972f3b6db697d4')
      // console.log(response)

    } catch (error) {

      console.error('Erro: ', error)
    }
  }

  return (
    <Container>
      <Title>Movie Search</Title>
      <Input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a movie"
      />
      <Button onClick={searchMovies}>Search</Button>
      <MoviesContainer>
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} Poster`} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  )
}

export default MovieSearchEngine