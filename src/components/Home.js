import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import hostel1 from '../Images/hostel1.jpg';
import hostel2 from '../Images/hostel2.jpg';
import hostel3 from '../Images/hostel3.jpg';
import './Home.css';

const images = [
  hostel1,
  hostel2,
  hostel3
];

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="slider-container">
        <Splide
          options={{
            rewind: true,
            speed: "1000",
            arrows: true,
            interval: 3000,
            autoplay: true,
          }}
          aria-label="React Splide Example"
          data-splide-interval="1000"
        >
          {images.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <div className="image-container">
                  <img className='image' src={image} alt="Banner" />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Hero;
