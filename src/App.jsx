import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navigation from './components/Navigation'
import Hero from "./components/Hero";
import UserRating from './components/UserRating'
import CardContainer from './components/CardContainer'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
const items = fetch('/data.json')
  .then(res => res.json())

function App() {

  const [isAdded, setIsAdded] = useState([])


  return (
    <>
      <Navigation isAdded={isAdded} setIsAdded={setIsAdded}></Navigation>
      <Hero></Hero>
      <UserRating></UserRating>
     
        <CardContainer items={items} isAdded={isAdded} setIsAdded={setIsAdded}></CardContainer>

      
      <GetStarted></GetStarted>
      <Pricing></Pricing>

      <Footer></Footer>


    </>
  )
}

export default App
