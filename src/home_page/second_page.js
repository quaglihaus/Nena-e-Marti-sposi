import React, { useState } from "react"
import { Autocomplete, TextField, Button } from "@mui/material";
import {isUndefined, isNull} from "lodash"
import './home_page.css'

export function SecondPage() {

    const guests = [
        {guestName: 'Martino', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Elena', guestSurname: 'Baritello', guestAllergies: ''},
        {guestName: 'Alberto', guestSurname: 'Scazzola', guestAllergies: 'Uova'}
    ]
    
    const guestsNameTmp = ['Martino', 'Elena', 'Alberto']
    const guestsSurnameTmp = ['Quaglia', 'Baritello', 'Scazzola']
    const guestsAllergiesTmp = ['Grano', 'Lattosio', 'Uova']

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [allergies, setAllergies] = useState('')
    
    function autocompleteOtherFields(field){
        console.log('asdaaa', field.target, field.target.id)
        if (field.target.id != '') {
            let section = field.target.id.split('-')[0]
            let value = field.target.id.split('-').at(-1)
            if (section != 'guestAllergies') {
                setName(guests[value]['guestName'])
                setSurname(guests[value]['guestSurname'])
            } else {
                setAllergies(field.target.textContent)
            }
        } else {
            setName('')
            setSurname('')
            setAllergies('')
        }
    }

    
    const scriptUrl = "https://script.google.com/macros/s/AKfycbymn4PLZ2LD7BNUD41dNkUuZU2Lfi-vScOfisI_90nDDZDc9Y7jpi3hReOeKqXl1-UV/exec"

    const handleSubmit = (e) =>{
        e.preventDefault()

        let form = new FormData()
        form.append('Nome', name)
        form.append('Cognome', surname)
        form.append('Allergie', allergies)

        fetch(scriptUrl, {method: 'POST', body: form})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
        })
        .catch(err => console.log(err))
    }

    return(
        <div style={{backgroundColor:'aliceblue', backgroundSize: 'contain', width: '100%', height: '100vh', textAlign:'-webkit-center', paddingTop:'20px'}}>
            <h5 style={{fontFamily: 'Times', color:'darkblue', padding:'0px'}}>LE TUE INFORMAZIONI</h5>
            <div style={{backgroundColor: 'white', padding: '5px', margin:'0px 10px 10px 10px'}}>
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestName"
                    options={guestsNameTmp}
                    value={name}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Nome" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestSurname"
                    options={guestsSurnameTmp}
                    value={surname}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Cognome" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestAllergies"
                    options={guestsAllergiesTmp}
                    value={allergies}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Allergie" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
                <Button variant="contained" onClick={handleSubmit}>Conferma</Button>
            </div>  
        </div>
    )
}

export default SecondPage