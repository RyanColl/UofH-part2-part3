import Show from "./Show"
import Weather from "./Weather"
const Country = (props) => {
    if(props.data) return(
        <div>
            <h1>{props.data.name}</h1>
            <p>Capital: {props.data.capital} </p>
            <p>Population: {props.data.population}</p>
            <h3>Languages</h3>
            <ul>
                {props.data.languages.map((language, i) => {
                    return(
                        <li key={i}>
                            {language.name}
                        </li>
                    )
                    })}
            </ul>
            <img src={props.data.flag} width='150' height='150'  />
            <Weather city={props.data.capital}/>
        </div>
    )   
    else return (
        <Show data={props} filter={props.filter} filterhandler={props.filterhandler}/>  
    )
}
export default Country