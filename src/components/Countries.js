import { useState } from "react"
import Country from "./Country"


const Countries = (props) => {
    
    // store the filtered array objects in this to get a length. This changes dynamically with the app. so cool!
    let filteredPropsArray = props.data.filter((country, i) =>  country.name.indexOf(props.filter) !== -1)
    if(filteredPropsArray.length <= 10 && filteredPropsArray.length !== 1) {
        return(
          <div>
              <h3>Countries</h3>
              <ul>
                { 
                    props.data.map((country, i) => {
                    if(country.name.indexOf(props.filter) > -1) return(
                        <Country key={i} name={country.name} filter={props.filter} filterhandler={props.filterhandler}/>
                    )
                })}
             </ul>
          </div>
        )
    } else if(filteredPropsArray.length === 1) return(
        <Country key={1} data={filteredPropsArray[0]}/>
    )
    else if(filteredPropsArray.length === 250) return (
        <div>
                <h3>Countries</h3>
                <p>Please type something</p>
        </div>
    ) 
    else return (
            <div>
                <h3>Countries</h3>
                <p>Please be more specific</p>
            </div>
        )
   
}
export default Countries