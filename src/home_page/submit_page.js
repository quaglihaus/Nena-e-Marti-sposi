import React, { useState } from "react"
import { Autocomplete, TextField, Button } from "@mui/material";
import {isUndefined, isNull} from "lodash"
import './home_page.css'

export function SubmitPage() {

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

    
    const scriptUrl = "https://sheet.best/api/sheets/5172f5ed-5d5c-4a5e-84bb-afb8b360056a"

    const handleSubmit = (e) =>{
        e.preventDefault()

        let form = new FormData()
        form.append('Nome', name)
        form.append('Cognome', surname)
        form.append('Allergie', allergies)

        console.log('dati invitato:', form)

        fetch(scriptUrl, {method: 'POST', body: form})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED", res)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="div_background" style={{textAlign:'-webkit-center', paddingTop:'20vh'}}>
            <h2 className="square_title">E tu ci sarai?</h2>
            <div style={{backgroundImage: 'url(/pictures/mountain_kiss_vextended.jpg)', 
                         backgroundColor: 'white', 
                         padding: '5px',
                         minHeight: '20vh',
                         margin:'0px 10px 10px 10px'}}>
            </div>
            <h3 className="square_title" style={{color:'#606366'}}>Le tue informazioni</h3>
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
                    freeSolo
                    disablePortal
                    id="guestAllergies"
                    options={guestsAllergiesTmp}
                    value={allergies}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Allergie" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
                <Button variant="contained" onClick={handleSubmit} style={{marginBottom:'5px'}}>Conferma</Button>
            </div>

            <div style={{marginTop:'10vh', backgroundColor: 'aliceblue', backgroundSize: 'contain', width: '100%'}}>
                <h3 className="square_title" style={{color:'#606366'}}>Il regalo siete voi, che ci accompagnate nella nostra vita!</h3>
                <h4 className="square_title" style={{color:'#606366'}}>Io non merito niente, tantomeno questo, però se volete regalare a Nena qualcosa in più ecco i riferimenti:</h4>
            </div>

        </div>
    )
}

export default SubmitPage