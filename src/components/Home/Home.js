import "./Home.css";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <TypeAnimation
          speed={1}
          sequence={[
            "Welcome to our site where you can reserve your trip comfortably ",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Home;
