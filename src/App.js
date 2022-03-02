import './App.css';
import Form from './Form'
import React,{useContext,useEffect} from "react"
import UglyThingsList from "./UglyThingsList"
import {UglyThingsContext} from "./UglyThingsContext"



function App() {
  const UglyContext=useContext(UglyThingsContext)

  
  
  return (
    <div className="App">
      <>
        <h1>Add an Ugly Thing!</h1>
        <Form/>

        <h2>My List</h2>
        <UglyThingsList list={UglyThingsList}/>

      </>

      
    </div>
  );
}

export default App;