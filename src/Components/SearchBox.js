import React from 'react'
import './search-box-style.css'

function SearchBox(props)  {


   return (
        <div  >
             
            <input className= "search" type = 'search' placeholder = { props.placeholder }
            onChange = { props.handleChange }/>
            
        </div>


    )

}
export default SearchBox
