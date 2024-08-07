import React from 'react'
import Work from './Work'
import { Row } from 'react-bootstrap'
import emeraldKioskResort from "../assets/works/emeraldKioskResort.png";
import myStockApp from "../assets/works/myStockApp.png"

const Works = () => {
  return (
<div className=' mx-12 pt-28' id="works">
      <h1 className='text-orange-400 text-5xl text-center font-roboto font-bold  mb-4'>
        Works 👨🏼‍💻
      </h1>
      <Row className='mx-auto justify-around'>
        <Work 
          image={emeraldKioskResort} 
          title="Emerald Chasm Resort Kiosk" 
          description=" Multi-threaded Java application for a resort Kiosk that allows
          customers to book rooms and Admin to generate bills. Data storage using Sql 
          Lite. Designed using JavaFX Scene Builder." 
          tech="Java JavaFx SQLlite" 
          gitLink="https://github.com/hashmeet02/EmeraldChasmResortKiosk" 
          demoLink="https://youtu.be/YL9Ws3sNO1A"
        />
        <Work 
          image={myStockApp} 
          title="My Stocks App" 
          description="IOS application built on Xcode allowing users to track their stocks
          using real time data from MSFinance API."
          tech="Swift CoreData Storyboard RapidApi" 
          gitLink="https://github.com/hashmeet02/MyStocksApp" 
          demoLink="https://youtu.be/mbMVBgWzg38"
        />
        <Work 
          image={emeraldKioskResort} 
          title="Assembly Line Manager" 
          description="" 
          tech="Java JavaFx SQLlite" 
          gitLink="https://github.com/hashmeet02/EmeraldChasmResortKiosk" 
          demoLink="https://youtu.be/YL9Ws3sNO1A"
        />
        <Work 
          image={emeraldKioskResort} 
          title="Assembly Line Manager" 
          description="" 
          tech="Java JavaFx SQLlite" 
          gitLink="https://github.com/hashmeet02/EmeraldChasmResortKiosk" 
          demoLink="https://youtu.be/YL9Ws3sNO1A"
        />
      </Row>
    </div>
  )
}

export default Works