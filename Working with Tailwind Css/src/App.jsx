import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white">
            Tailwind is working! 🚀
          </h1>

          <p className="mt-4 text-sky-400 text-lg">
            Welcome to utility-first CSS.
          </p>

          <button className="mt-6 rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700 transition">
            Let's build something
          </button>
        </div>
      </div>
    </>
  )
}

export default App
