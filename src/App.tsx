import React from 'react'
import { Hello, Elements, Expereince, Language, Devops, Education, Interests, Goodbye } from './components'
import './scss/App.scss'
import './scss/query.scss'

function App() {
  return (
    <div className="App">
      <Hello />
      <Elements />
      <Expereince />
      <Language />
      <Devops />
      <Education />
      <Interests />
      <Goodbye />
    </div>
  )
}

export default App
