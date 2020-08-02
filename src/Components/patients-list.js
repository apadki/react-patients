import React, { useState } from 'react'

import PatientCard from "./patient-card"

import './card-list-styles.css'
import SearchBox from "./SearchBox"

function Patientlist() {

    const [searchText, setSerachText] = useState(" ");
    const [searchResults, setSearchResults] = useState([]);
    const [patients, setPatients] = useState([]);

    // React.useEffect(
    //     () => {
    //         console.log(searchText)
    //     }, [searchText]
    // );

    React.useEffect(() => {
        fetch('http://localhost:8090/readings/all')
            .then(response => response.json())

            .then(response => setPatients(response.patients)
                .then(response => console.log(patients))
            ).catch(err => {
                console.log("ERROR" )
            })

    }, []);

    React.useEffect(() => {
        const results = patients.filter(patient =>
            patient.name.toLowerCase().includes(searchText)
        );
        setSearchResults(results);
    }, [searchText, patients]);

    const handleChange = (e) => {
        setSerachText(e.target.value)
    };
    
    const handleChange1 = () => {
        console.log( "Handle Click 1")
    };
    

    let content = "NO DATA FOUND";
   // console.log(" SEARCH " , searchResults)
    if ( searchResults  && searchResults.length != 0 ) {

        content = 
        
            <div>     
                <SearchBox placeholder='search patients'
                        //handleChange = { e => { setSerachText(e.target.value) } }
                        handleChange={handleChange}
                />
                <div className='card-list'>
                    {
                        searchResults.map((patient) => (
                            <PatientCard key={patient.id} patient={patient} />
                        )
                        )
                    }
                </div>
            </div>
        
    }

    return (
        <div>
        
        
       
        { content }
        </div>


    )


}
export default Patientlist;