import React,{useState, useEffect} from 'react'
import axios from 'axios'
import UglyThingsList from './UglyThingsList'


const UglyThingsContext=React.createContext()


//provider => state, methods managed
// consumer => components that will consume that data from provider



function UglyThingsContextProvider(props){


    //all ugly things will be pushed here
    const [uglyThingsList, setUglyThingsList]=useState([])

    

//----------------------------------API CALLS-------------------------------

useEffect(()=>{getData()},[])

//GET
function getData (id){
    fetch('https://api.vschool.io/cano/thing')
      .then(response => 
        (response.json()))

      .then(data =>{
          console.log(data)
          setUglyThingsList(data)

      })

  }
  //Delete
  
const deleteUglyThing=(id)=> {

  console.log(id)

  axios.delete(`https://api.vschool.io/cano/thing/${id}`)
    .then(res => getData())
    .catch(err => console.log(err))
  }


    //POST
    const handleSubmit=(e,uglyThing)=>{
        e.preventDefault()
        
        let test = e.target.value
        console.log(test)
        
        axios.post(`https://api.vschool.io/cano/thing/`,uglyThing) 
        .then(res => setUglyThingsList(prevUglyThings=>[...prevUglyThings,uglyThing]))
            
        .catch(error => {
            console.error('Something went wrong!', error);
          });
          
      
          console.log("handleSubmit Clicked")
          //props.submit(uglyThing,props.item._id)

        }



//--------------------------------------------------------------------------------------------------------------



    //pass all of our functions and properites down as props
    return(
        <UglyThingsContext.Provider value={{
          uglyThingsList,
           handleSubmit,
           getData,
           deleteUglyThing,
           
          
          


        }}>
            {props.children}
        </UglyThingsContext.Provider>


    )}

    export {UglyThingsContextProvider,UglyThingsContext}