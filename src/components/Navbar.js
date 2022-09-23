import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

// using ==> rce
const Navbar=()=>{
    return (
      <>
      <nav className='navb'>
        <ul className='navul'>
            <li> <Link to="/home" id='title'>NewzMonkey</Link></li>
            <li> <Link to="/home">Home</Link></li>
            <li> <Link to="/general">General</Link></li>
            <li> <Link to="/sports">Sports</Link></li>
            <li> <Link to="/business">Business</Link></li>
            <li> <Link to="/technology">Technology</Link></li>
            <li> <Link to="/science">Science</Link></li>
            <li> <Link to="/health">Health</Link></li>
            <li> <Link to="/entertainment">Entertainment</Link></li>
        </ul>
      </nav>
      </>
    )
}

export default Navbar