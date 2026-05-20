import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    userName: "12Abhay",
    age: 20
  }

  return (
    <>
     <h1 className="bg-green-400 w-120 p-4">Hello TailwindReact</h1>
     <h2 className='bg-amber-400 p-2 h-12 w-20 rounded'>Test</h2>
     <img className='border-4 border-red-500 h-100 w-140' src="https://wallpapers.com/images/hd/cool-darshan-raval-hd-in5z5f23jmlvwlqn.jpg" alt="" />

    
     
    <Card myName="Abhay Yadav" someObj={myObj}/>
    <Card />
  </>
  )

}

export default App
