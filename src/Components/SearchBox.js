import React from 'react'
import './search-box-style.css'

function SearchBox(props)  {


   return (
        <div className= "search" >
             
            <input type = 'search' placeholder = { props.placeholder }
            onChange = { props.handleChange }/>
            
        </div>


    )

}
export default SearchBox
