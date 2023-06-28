import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import hostel1 from '../Images/hostel1.jpg'
import hostel2 from '../Images/hostel2.jpg'
import hostel3 from '../Images/hostel3.jpg'
const images = [
  hostel1,
  hostel2,
  hostel3
];

const Hero = () => {
  return (
    <div className="">
      <div className="hidden md:block cursor-pointer  mt-3 ">
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
                <div className="ml-52"><img className='w-10/12 object-cover'src={image} alt="Banner" /></div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      
    </div>
  );
};

export default Hero;