import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "Sagar Lamsal",
  //   age: 23
  // }
  // let myArry = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test | SAGAR LAMSAL</h1>
      <div className='flex justify-center gap-6'>
     <Card username ="Sagar Lamsal"age ="21"img="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"/>
     <Card username = "Ragas Lamsal"age = "22"img="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"/>
     </div>
     
        
        
    </>
  )
}

export default App
