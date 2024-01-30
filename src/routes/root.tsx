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
              <Link to="/super-heroes">Su.Heroes</Link>
            </li>
            <li>  
              <Link to="/rq-super-heroes">RQ Su.Heroes</Link>
            </li>
            <li>  
              <Link to="/parallel-query">Pa.Query</Link>
            </li>
            <li>  
              <Link to="/dy-query">dyn. Query</Link>
            </li>
          </ul>
        </nav>
  );
}
