import { Card } from 'react-bootstrap';

const MovieCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant='top' src='https://picsum.photos/200' />
        <Card.Body>
          <Card.Title>Movie Title</Card.Title>
          <Card.Text>Rating: 7.5</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
