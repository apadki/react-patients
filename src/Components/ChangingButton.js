import React, { useState } from 'react'

function ChangingButton() {
 const[name, setName] = useState("ANU")

    return (
        <div>  <h1> Hello {name}   </h1>
            <button onClick={() => { setName("Gargi") }} >
                Click Me </button>

        </div>
    )
}
export default ChangingButton