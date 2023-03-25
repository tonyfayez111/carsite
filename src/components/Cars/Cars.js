import "./Cars.css";
import pic from "./images/car.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import { useState, useEffect } from "react";
const Cars = () => {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [pic, pic, pic, pic];

  return (
    <div className="cars">
      <SimpleImageSlider
        width={0.5 * window.innerWidth}
        height={0.3 * window.innerWidth}
        images={sliderImages}
        showBullets={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
    </div>
  );
};

export default Cars;
