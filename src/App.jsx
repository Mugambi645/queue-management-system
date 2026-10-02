import React from 'react'
import { useState } from "react"
import "./App.css"
import QueueForm from './components/QueueForm';


function App() {

  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting"}]);
    

  }
  const updateStatus = (id, newStatus) => {

  }

  const removeFromQueue = (id) => {

  }
  return (
    <div className="app">
      <header>
        <h1>Queue Management</h1>
          <p>Manage your customers efficiently</p>
      </header>
      <main>
  <QueueForm onAdd={addToQueue} />
    <h1>Queue display</h1>
      </main>
    </div>
  )
}

export default App
