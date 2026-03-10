import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {


  return (
    <>
      <NavBar />

      <main className="text-center mt-16 px-6">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to NovaSyn
        </h1>

        <p className="text-lg text-gray-600">
          Discover our newest products and find the perfect model for you.
        </p>

      </main>

    </>
  )
}

export default App
