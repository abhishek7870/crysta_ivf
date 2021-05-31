import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import { selectUserData, setInput, setUserData } from "../features/userSlice";

import "./Navbar.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");

  //   const userData = useSelector(selectUserData);

  //   const dispatch = useDispatch();

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     dispatch(setInput(inputValue));
  //   };
  //   const handleClick = (e) => {};

  return (
    <div className="navbar">
      <h1 className="navbar__header">
        {/* <div className="blog__search">
        <input
          className="search"
          placeholder="Search for a blog"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="submit">Search</button>
      </div> */}
        <Link to="/add-new-blog">
          <Button>Add Blog</Button>
        </Link>
        <Link to="/login">
          <Button>LogIn</Button>
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;
