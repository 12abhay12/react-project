import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

 const passwordGenerator =()=>{
   return <h1>Abhay</h1>;
  };  

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password ,setPassword] = useState("")

 
   
  return (
    <>

      <div className=" justify-center align-middle">
        <h1 className="border text-4xl rounded-2xl bg-green-400 w-70 h-15 p-0.5">05project</h1>
      </div>
    </>
  );
}

export default App;
