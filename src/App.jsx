import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Cat, Dog as Doggy} from "./Cat"

export function Navbar(){
  return(
      <nav className="navbar">
        <ul>
          <li className='nav-item'><a href="#">Dashboard</a></li>
          <li className='nav-item'></li>
          <li className='nav-item'></li>
        </ul>
      </nav>
  )

}
