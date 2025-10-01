import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import banner from './assets/Frame 8.png'
import Footer from './Components/Footer/Footer'

const fetchPlayers = async() => {
  const res = await fetch("/Players.json")
  return await res.json()
}

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true); 
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const fileteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name);
    setPurchasedPlayers(fileteredData);
    const priceNumber = parseInt(p.price.toString().replace(/[^\d]/g, ""));
    setAvailableBalance(availableBalance + priceNumber)
    
  }


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1200px] mx-auto mt-5 mb-5'>
        <img src={banner} alt="" />
      </div>

      <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
          <h1 className='font-bold text-2xl'>{
            toggle === true ? "Available Players" : `Selected Player (${purchasedPlayers.length}/6)`
            }</h1>
          <div className='font-bold'>
            <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={() => setToggle(false)}  className={`p-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected ({purchasedPlayers.length})<span></span></button>
          </div>
      </div>

      {
        toggle === true? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }


      <Footer></Footer>

      <ToastContainer></ToastContainer>

      




    </>
  )
}



export default App
