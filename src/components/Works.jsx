import React from 'react'
import Work from './Work'
import { Row } from 'react-bootstrap'
import emeraldKioskResort from "../assets/works/resort.avif";
import myStockApp from "../assets/works/myStockApp.avif";
import toDoListApp from "../assets/works/toDoListApp.avif";
import contactsDirectoryApp from "../assets/works/contactsDirectoryApp.jpg";
import inventoryManagementApp from "../assets/works/inventoryManagementApp.jpg";
import artLusionApp from "../assets/works/artLusion.jpg";
import assemblyLineProject from "../assets/works/assemblyLineProject.avif";

const Works = () => {
  return (
    <div className=' mx-12 pt-28 lg:mt-32 lg:mb-36' id="works">
      <h1 className='text-orange-400 text-5xl text-center font-roboto font-bold  mb-4'>
        Works 👨🏼‍💻
      </h1>
      <Row className='mx-auto justify-around'>
        <Work 
          image={emeraldKioskResort} 
          title="Emerald Chasm Resort Kiosk" 
          description="Multi-threaded Java app for a resort Kiosk that allows
          customers to book rooms and Admin to generate bills. Data storage using Sql 
          Lite. Designed using JavaFX Scene Builder." 
          tech="Java JavaFx SQLlite" 
          gitLink="https://github.com/hashmeet02/EmeraldChasmResortKiosk" 
          demoLink="https://youtu.be/YL9Ws3sNO1A"
        />

        <Work 
          image={myStockApp} 
          title="My Stocks App" 
          description="iOS app built on Xcode allowing users to track their stocks
          using real time data from MSFinance API. Allows basic CRUD operations."
          tech="Swift CoreData Storyboard RapidApi." 
          gitLink="https://github.com/hashmeet02/MyStocksApp" 
          demoLink="https://youtu.be/mbMVBgWzg38"
        />

        <Work 
          image={toDoListApp} 
          title="To Do List App" 
          description="iOS To Do App created using Xcode, Swift and Storyboard. It 
          allows users to manage reminders with CRUD operations and has persistent 
          data storage to save user data." 
          tech="Swift Storyboard" 
          gitLink="https://github.com/hashmeet02/ToDoListApp" 
          demoLink="https://youtu.be/Kn8tT8z9s7s"
        />
        
        <Work 
          image={contactsDirectoryApp} 
          title="Contacts Directory App" 
          description="My Contact App created on Android Studio with Java and Room 
          Database. It allows android users to perform CRUD operations and manage 
          their list of Contacts." 
          tech="Android Studio Java RoomDB" 
          gitLink="https://github.com/hashmeet02/Contacts-Directory-App" 
          demoLink="https://youtu.be/Z5XayO9C2RQ"
        />

        <Work 
          image={inventoryManagementApp} 
          title="Inventory Management App" 
          description="Application created with SQL lite for data persistence. It 
          provides CRUD functionality to store information about inventory parts 
          and products that they have." 
          tech="Java JavaFX SQLlite" 
          gitLink="https://github.com/hashmeet02/Inventory-Management-App" 
          demoLink="https://youtu.be/ikruzUthLtg"
        />

        <Work 
          image={artLusionApp} 
          title="ArtLusion Website" 
          description="Website built using Metro Art university's APIs. Users can
          search artwork based on different categories like title, type, paint 
          and mark artworks as favorite." 
          tech="NextJs" 
          gitLink="https://github.com/hashmeet02/ArtLusion/tree/main" 
          demoLink="https://art-lusion-hashmeet02.vercel.app/"
        />

        <Work 
          image={assemblyLineProject} 
          title="Assembly Line Project" 
          description="C++ multi-threaded OOP project mimicking a Manufacturing 
          Plant producing different products and parts to fulfill customer 
          requirements. Uses text files for data storage." 
          tech="C++" 
          gitLink="https://github.com/hashmeet02/ArtLusion/tree/main"
        />
  
      </Row>

    </div>
  )
}

export default Works