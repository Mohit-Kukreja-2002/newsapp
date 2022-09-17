import React, { Component } from 'react'
import '../index.css';

// using ==> rce
export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className='navb'>
        <ul className='navul'>
            <li> <a href="/" id='title'>NewzMonkey</a></li>
            <li> <a href="/">Home</a></li>
            <li> <a href="/">About</a></li>
        </ul>
      </nav>
      </>
    )
  }
}

export default Navbar