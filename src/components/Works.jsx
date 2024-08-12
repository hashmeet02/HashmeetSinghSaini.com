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
          description="iOS application built on Xcode allowing users to track their stocks
          using real time data from MSFinance API."
          tech="Swift CoreData Storyboard RapidApi" 
          gitLink="https://github.com/hashmeet02/MyStocksApp" 
          demoLink="https://youtu.be/mbMVBgWzg38"
        />

        <Work 
          image={toDoListApp} 
          title="To Do List App" 
          description="This is my To Do App created for iOS using Xcode, Swift and 
          Storyboard. It allows users to manage their reminders with CRUD operations and 
          has persistent data storage to save user data. " 
          tech="Swift Storyboard" 
          gitLink="https://github.com/hashmeet02/ToDoListApp" 
          demoLink="https://youtu.be/Kn8tT8z9s7s"
        />
        
        <Work 
          image={contactsDirectoryApp} 
          title="Contacts Direcotry App" 
          description="This is the demo for my Contact Directory App created on Android 
          Studio with Java and Room Database. The aim of the application is to allow 
          android users to be able to perform CRUD operations and manage their list of 
          Contacts." 
          tech="Android Studio Java RoomDB" 
          gitLink="https://github.com/hashmeet02/Contacts-Directory-App" 
          demoLink="https://youtu.be/Z5XayO9C2RQ"
        />

        <Work 
          image={inventoryManagementApp} 
          title="Inventory Management App" 
          description="This is an Inventory Management Application created using Java 
          in conjunction with SQL lite for data persistence. The goal of the app is to 
          provide persisted CRUD functionality to the user such that they can store 
          information about some parts and products that they have." 
          tech="Java JavaFX SQLlite" 
          gitLink="https://github.com/hashmeet02/Inventory-Management-App" 
          demoLink="https://youtu.be/ikruzUthLtg"
        />

        <Work 
          image={artLusionApp} 
          title="ArtLusion Website" 
          description="This is a website built over the APIs offered by Metro Art 
          university. It allows users to search artwork based on different categories
          like title, type, paint and more. It also provides ability to favorite cetain
          artworks." 
          tech="NextJs" 
          gitLink="https://github.com/hashmeet02/ArtLusion/tree/main" 
          demoLink="https://art-lusion-hashmeet02.vercel.app/"
        />

        <Work 
          image={assemblyLineProject} 
          title="Assembly Line Project" 
          description="C++ multi-threaded OOP project created to mimic the working of a 
          Manufacturing Plant producing different products and parts to fulfill 
          customer requirements. It reads and writes data from and to text files." 
          tech="C++" 
          gitLink="https://github.com/hashmeet02/ArtLusion/tree/main"
        />
  
      </Row>

    </div>
  )
}

export default Works