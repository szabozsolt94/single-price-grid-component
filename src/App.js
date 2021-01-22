import './css/App.css'
import { useState } from 'react'
import Join from './components/Join.js'
import Subscription from './components/Subscription.js'
import WhyUs from './components/WhyUs.js'
import Form from './components/Form.js'

function App() {

  const [visibility, setVisibility] = useState('hidden')
  const [position, setPosition] = useState('absolute')
  const [top, setTop] = useState('800px')
  const [bottomRadius, setRadius] = useState('5px')

  const buttonClick = () => {
    setVisibility('visible')
    setPosition('relative')
    setTop('0')
    setRadius('0')
  }

  return (
    <div className="container">
      <Join />
      <Subscription onClick={buttonClick} bottomRadius={bottomRadius} />
      <WhyUs bottomRadius={bottomRadius} />
      <Form visibility={visibility} position={position} top={top} />
    </div>
  )
}

export default App
