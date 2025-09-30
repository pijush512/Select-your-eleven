import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchPlayers = async() => {
  const res = await fetch("/Players.json")
  return await res.json()
}


function App() {
  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}




    </>
  )
}

export default App
