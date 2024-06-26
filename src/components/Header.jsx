import React from "react";
import { Link } from "react-router-dom";

export default function Header({ back}) {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
          </Link>
        )}  
        <h1>
          <Link to="/">Crypto View</Link>
        </h1>
      </div>
    </header>
  );
}
