import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="headercenter">
        <p onClick={() => props.setnav("Home")}>Home</p>
        <p onClick={() => props.setnav("Cars")}>Our cars</p>
        <p onClick={() => props.setnav("Contact")}>Contact</p>
      </div>
    </div>
  );
};

export default Header;
