import { useState } from 'react'

import viteLogo from '/vite.svg'

import Navbar from './Navbar'

function App() {
  return(
    <>
     <Navbar />
      <div className="pt-28 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to My Modern Website
        </h1>
        <p className="mt-6 text-gray-600">
          Responsive Navbar with React + TailwindCSS 🚀
        </p>
      </div>
    </>
  )
}

export default App
