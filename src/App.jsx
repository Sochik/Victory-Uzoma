import { useState } from 'react'
import './App.css'
import Home from './components/Home';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home className="bg-dark" />
    </>
  );
}


