import { Container } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
// import './About.css';

const Latest = () => {
  return (
    <Container>
      <h2>Latest</h2>
      <div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </Container>
  );
};

export default Latest;
