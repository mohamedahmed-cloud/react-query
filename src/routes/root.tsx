// import React from "react";
import { Link } from "react-router-dom";


export default function Root() {
  return (
        <nav >
          <ul >
            <li>
              <Link to="/home">Home Page</Link>
            </li>
            <li>
              <Link to="/super-heroes">Super Heroes</Link>
            </li>
            <li>  
              <Link to="/rq-super-heroes">RQ SuperHeroes</Link>
            </li>
            <li>  
              <Link to="/parallel-query">Parallel Query</Link>
            </li>
          </ul>
        </nav>
  );
}
