import React, {useContext} from 'react'
import { UglyThingsContext } from "./UglyThingsContext"
import UglyThing from "./UglyThing"

export default function UglyThingsList(props){

    const UglyContext=useContext(UglyThingsContext)

    const list= UglyContext.uglyThingsList.map((item)=>
        <UglyThing item={item} key={item.id}/>)


    return(
        <div>
             
            {list}
        </div>

    )}