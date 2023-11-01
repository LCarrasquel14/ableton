import { Link } from "@remix-run/react";
const NavBar = ({ addresses }) => {
  return (
    <div className="nav">
      {/* <a href="">about</a>
      <a href="">jobs</a> */}
      {addresses.map(({ name, id }) => (
        <Link className="link" key={id}>
          {name}
        </Link>
      ))}
      {/* {addresses.map((addres) => (
        <a key={addres.id} className="link">
          {addres.name}
        </a>
      ))} */}
    </div>
  );
};

export default NavBar;
