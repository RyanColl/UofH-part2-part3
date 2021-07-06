// import './App.css';
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './components/Note'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   // we use useEffect() to let React know we are making async calls 
//   // when the promise is complete, we place the information, response.data, into our notes state variable
//   // There are many possible use cases for an effect hook other than fetching data from the server. However, this use is sufficient for us, for now.
//   useEffect(() => {
//     console.log('effect')
//     axios
//       .get('http://localhost:3001/notes')
//       .then(response => {
//         console.log('promise fulfilled')
//         setNotes(notes.concat(response.data))
//       })
//   }, [])
//   console.log('render', notes.length, 'notes')

//   return(
//     <div>
//       <p>rendering now</p>
//       <ul>render soon: 
//         {notes.map((note, i) => 
//             <li key={i}>{note.content} </li>)}
//       </ul>
//     </div>
//   )
// }
// export default App

import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Note from './components/Note'
import Countries from './components/Countries';

const App = () => {
  // const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(true)
  const [ filter, setFilter ] = useState('')
  const filterInput = (e) => {
    setFilter(e.target.value)
  }
  const setFilterState = (str) => setFilter(str)
  // we use useEffect() to let React know we are making async calls 
  // when the promise is complete, we place the information, response.data, into our notes state variable
  // There are many possible use cases for an effect hook other than fetching data from the server. However, this use is sufficient for us, for now.
  const [countries, setCountries] = useState([])
    useEffect(() => {
        console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(countries.concat(response.data))
          })
      }, [])
      console.log('render', countries.length, 'notes')
     

  return(
    <div>
      <p>Search for countries: <input value={filter} onChange={filterInput}></input></p>
      <Countries data={countries} filter={filter} filterhandler={setFilterState}/>
    </div>
  )
}
export default App