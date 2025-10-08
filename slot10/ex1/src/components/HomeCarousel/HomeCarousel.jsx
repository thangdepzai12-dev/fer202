import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import "./HomeCarousel.css";

function HomeCarousel() {
const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    img: "https://picsum.photos/id/1018/1000/500",
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    img: "https://picsum.photos/id/1005/1000/500",
  },
  {
    title: "Interstellar",
    genre: "Adventure",
    img: "https://picsum.photos/id/1015/1000/500",
  },
];


return ( <Carousel fade interval={3000}>
{movies.map((movie, index) => (
<Carousel.Item key={index}> <img
         className="d-block w-100 carousel-img"
         src={movie.img}
         alt={movie.title}
       />
<Carousel.Caption> <h3>{movie.title}</h3> <Badge bg="info">{movie.genre}</Badge>
</Carousel.Caption>
</Carousel.Item>
))} </Carousel>
);
}

export default HomeCarousel;
