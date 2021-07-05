

const Countries = (props) => {
    let k = []
        return(
          <div>
              <h3>Countries</h3>
              <ul>
                { 
                    props.data.map((country, i) => {
                    console.log(country.name.indexOf(props.filter))
                    if(country.name.indexOf(props.filter) > -1) return(
                        <li key={i}>
                            {country.name}
                        </li>
                    )
                })}
             </ul>
          </div>
        )
}
export default Countries