import React,{useContext,useState} from 'react'
import axios from 'axios'
import {UglyThingsContext} from "./UglyThingsContext"

export default function Form (props){

    const UglyContext=useContext(UglyThingsContext)

       //default ugly thing, will be stored in state
       const init={
        title: props.item?.title ||"",
        description:props.item?.description || "",
        imgUrl: props.item?.imgUrl || ""
        //clicked:false
    }
    const [uglyThing, setUglyThing]=useState(init)
    
    const handleChange=(e)=>{
        const {value, name}=e.target
        setUglyThing(prevUglyThing=>({
            ...prevUglyThing,
            [name]:value
        })
    )}



    

    return(
        <div>
            <form onSubmit={ e =>{
                UglyContext.handleSubmit(e,uglyThing)
                }}>
                    <input
                        name="title"
                        value={uglyThing.title}
                        onChange={handleChange}
                        placeholder="Title"
                        
                        />
                    <input
                        name="description"
                        value={uglyThing.description}
                        onChange={handleChange}
                        placeholder="Description"
                        />
                    <input
                        name="imgUrl"
                        value={uglyThing.imgUrl}
                        onChange={handleChange}
                        placeholder="imgUrl"
                        />
                        <button type="submit">submit</button>
                </form>
               {/* <button onClick={editThing}>new edit</button>*/}
               
        </div>
)}