import React,{useContext,useState} from 'react'
import {UglyThingsContext} from "./UglyThingsContext"
import Form from "./Form"
import axios from 'axios'
import UglyThingsList from './UglyThingsList'

function UglyThing (props){

    const UglyContext=useContext(UglyThingsContext)

    const [isEditing,setIsEditing]=useState(false)



    function toggleEdit (){
        setIsEditing(prevState=>({isEditing: !prevState.isEditing}))
       
    }

    //?? not sure if doing this right
    function handleEditSave(e,id,updatedItem) {
        e.preventDefault()
        console.log("handleEditSave was clicked")

        axios.put(`https://api.vschool.io/cano/thing/${id}`,updatedItem)
              .then(res=>{
                  console.log(res)
                UglyContext.getData() 
                      }) 
              .catch(err => console.log(err))
  

      }


 




   

   

    
    

  
return(
    <div>
        {
        isEditing ? 
        /*new form*/
        <Form item={props.item}/>

        

        
        
        :


    <div>
        
        <h2>{props.item.title}</h2>
        <img src={props.item.imgUrl} alt={props.item.description}/>
        <p>{props.item.description}</p>
    
        {/*error*/}
    </div>


    }

    
        <button onClick={()=>toggleEdit(props.item._id)}>Edit</button>
        <button onClick={() => UglyContext.deleteUglyThing(props.item._id)}>Delete</button>

    </div>



)}

export default UglyThing