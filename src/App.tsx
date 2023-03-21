import { useState } from 'react'
import './App.css'
import QR from './QR'

function App() {
  return (
    <div className="App">
      <QR/>
      <div className='TextArea'>
        <h1 className='Header'>Improve your front-end Skills by building projects</h1>
        <p className='paragraph'>Scan QR code to visit frontend Mentor and take your codeing skills to the next level</p>
      </div>
    </div>
  )
}

export default App
