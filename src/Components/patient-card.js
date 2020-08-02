import React from 'react'
import './card-style.css'

function PatientCard(props) {

    let dispClass = "card-container-green";

    if (props.patient.sugar > 7.0) {
        dispClass = "card-container-red";
    }

    return (

        <div className={dispClass} >
             <h2> {props.patient.name} </h2>
            <p> {props.patient.bp}</p>
        </div>

    )

}
export default PatientCard