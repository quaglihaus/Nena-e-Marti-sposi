import React, { useState } from "react"
import { Autocomplete, TextField, Button, Alert } from "@mui/material";
import {isUndefined, isNull} from "lodash"
import './home_page.css'

export function SubmitPage() {

    const guests = [
        {guestName: 'Martino', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Elena', guestSurname: 'Baritello', guestAllergies: ''},
        {guestName: 'Fabio', guestSurname: 'Stivala', guestAllergies: ''},
        {guestName: 'Valerio', guestSurname: 'Lisci', guestAllergies: ''},
        {guestName: 'Paolo', guestSurname: 'Bader', guestAllergies: ''},
        {guestName: 'Laura', guestSurname: 'Sbraci', guestAllergies: ''},
        {guestName: 'Matteo', guestSurname: 'Turchetti', guestAllergies: ''},
        {guestName: 'Emanuela', guestSurname: 'Piazza', guestAllergies: ''},
        {guestName: 'Gabriele', guestSurname: 'Salvo', guestAllergies: ''},
        {guestName: 'Bruno', guestSurname: 'Pinci', guestAllergies: ''},
        {guestName: 'Bianca', guestSurname: 'Pop', guestAllergies: ''},
        {guestName: 'Luciano', guestSurname: 'Prono', guestAllergies: ''},
        {guestName: 'Elena', guestSurname: 'Meloni', guestAllergies: ''},
        {guestName: 'Paolo', guestSurname: 'Muccioli', guestAllergies: ''},
        {guestName: 'Enrico', guestSurname: 'Nicola', guestAllergies: ''},
        {guestName: 'Simone', guestSurname: 'Germano', guestAllergies: ''},
        {guestName: 'Martina', guestSurname: 'Pirali', guestAllergies: ''},
        {guestName: 'Lorenzo', guestSurname: 'Scialdone', guestAllergies: ''},
        {guestName: 'Filippo', guestSurname: 'Di Capita', guestAllergies: ''},
        {guestName: 'Annalisa', guestSurname: 'Zallio', guestAllergies: 'incintissima'},
        {guestName: 'Francesca', guestSurname: 'Sapey', guestAllergies: ''},
        {guestName: 'Barbara', guestSurname: 'Caponotto', guestAllergies: ''},
        {guestName: 'Federico', guestSurname: 'Sapey', guestAllergies: ''},
        {guestName: 'Mariachiara', guestSurname: 'Cataldo', guestAllergies: ''},
        {guestName: 'Piero', guestSurname: 'Cataldo', guestAllergies: ''},
        {guestName: 'Consuelo', guestSurname: 'Lanziere', guestAllergies: ''},
        {/*guestName: 'Giulia', guestSurname: 'Chinigò', guestAllergies: ''*/},
        {guestName: 'Noemi', guestSurname: 'Di Tondo', guestAllergies: ''},
        {guestName: 'Alessandro', guestSurname: 'Pisani', guestAllergies: ''},
        {guestName: 'Olimpia', guestSurname: 'Madonia', guestAllergies: ''},
        {guestName: 'Cristina', guestSurname: 'Iemma', guestAllergies: ''},
        {guestName: 'Marco', guestSurname: 'Ganio', guestAllergies: ''},
        {guestName: 'Sara', guestSurname: 'Canevaro', guestAllergies: ''},
        {guestName: 'Gabriele', guestSurname: 'Potente', guestAllergies: ''},
        {guestName: 'Francesca', guestSurname: 'Rosso', guestAllergies: ''},
        {guestName: 'Giovanna', guestSurname: 'Brunetti', guestAllergies: ''},
        {guestName: 'Massimo', guestSurname: 'Scazzola', guestAllergies: 'i TreMendi'},
        {guestName: 'Davide', guestSurname: 'Mollo', guestAllergies: ''},
        {guestName: 'Ilaria', guestSurname: 'Carnino', guestAllergies: ''},
        {guestName: 'Cristina', guestSurname: 'Santangelo', guestAllergies: ''},
        {guestName: 'Davide', guestSurname: 'Tricarico', guestAllergies: ''},
        {guestName: 'Rachele', guestSurname: 'Tricarico', guestAllergies: ''},
        {guestName: 'Gianluca', guestSurname: 'Tricarico', guestAllergies: ''},
        {guestName: 'Valentina', guestSurname: 'Migliore', guestAllergies: ''},
        {guestName: 'Nadia', guestSurname: 'Borgogno', guestAllergies: ''},
        {guestName: 'Danilo', guestSurname: 'Borogno', guestAllergies: ''}, //TODO
        {guestName: 'Alice', guestSurname: 'Sairu', guestAllergies: ''},
        {guestName: 'Andrea', guestSurname: 'Carbone', guestAllergies: ''},
        {guestName: 'Cecilia', guestSurname: 'Tomatis', guestAllergies: ''},
        {guestName: 'Giacomo', guestSurname: 'Gerbotto', guestAllergies: ''},
        {guestName: 'Idil', guestSurname: 'Aralp', guestAllergies: ''},
        {guestName: 'Emma', guestSurname: 'Aralp', guestAllergies: ''},
        {guestName: 'Mina', guestSurname: 'Aralp', guestAllergies: ''},
        {guestName: 'Livio', guestSurname: 'Aralp', guestAllergies: ''},
        {guestName: 'Enrica Maria', guestSurname: 'Mascarotto', guestAllergies: ''},
        {guestName: 'Giacomo', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Tommaso', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Ernesto Giorgio', guestSurname: 'Mascarotto', guestAllergies: ''},
        {guestName: 'Alba', guestSurname: 'Floreani', guestAllergies: ''},
        {guestName: 'Massimo', guestSurname: 'Castagnaro', guestAllergies: ''},
        {guestName: 'Paola', guestSurname: 'Mascarotto', guestAllergies: ''},
        {guestName: 'Pietro', guestSurname: 'Castagnaro', guestAllergies: ''},
        {guestName: 'Mattia', guestSurname: 'Castagnaro', guestAllergies: ''},
        {guestName: 'Sofia', guestSurname: 'Castagnaro', guestAllergies: ''},
        {guestName: 'Lucia', guestSurname: 'Vendramin', guestAllergies: ''},
        {guestName: 'Stefano', guestSurname: 'Lonardi', guestAllergies: ''},
        {guestName: 'Francesco', guestSurname: 'Lonardi', guestAllergies: ''},
        {guestName: 'Lorenzo', guestSurname: 'Lonardi', guestAllergies: ''},
        {guestName: 'Bianca', guestSurname: 'Lonardi', guestAllergies: ''},
        {guestName: 'Giuliana', guestSurname: 'Mascarotto', guestAllergies: ''},
        {guestName: 'Ruggero', guestSurname: 'Ubertalli', guestAllergies: ''},
        {guestName: 'Umberto', guestSurname: 'Manca', guestAllergies: ''},
        {guestName: 'Silvia', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Vittorio', guestSurname: 'Baritello', guestAllergies: ''},
        {guestName: 'Roberto', guestSurname: 'Baritello', guestAllergies: ''},
        {guestName: 'Claudia', guestSurname: 'Baritello', guestAllergies: ''},
        {guestName: 'Maria', guestSurname: 'Betto', guestAllergies: ''},
        {guestName: 'Enrico', guestSurname: 'Betto', guestAllergies: ''},
        {guestName: 'Laura', guestSurname: 'Pellegrinelli', guestAllergies: 'incinta'},
        {guestName: 'Giulia', guestSurname: 'Betto', guestAllergies: ''},
        {guestName: 'Marco', guestSurname: 'Caradonna', guestAllergies: ''},
        {guestName: 'Anna', guestSurname: 'Caradonna', guestAllergies: ''},
        {guestName: 'Chiara', guestSurname: 'Caradonna', guestAllergies: ''},
        {guestName: 'Francesco', guestSurname: 'Caradonna', guestAllergies: ''},
        {guestName: 'Giovanni', guestSurname: 'Betto', guestAllergies: ''},
        {guestName: 'Anna', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Claudio', guestSurname: 'Betto', guestAllergies: ''},
        {guestName: 'Edoardo', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Maria Grazia', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Andrea', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Regina', guestSurname: 'Monticelli', guestAllergies: ''}, //TODO
        {guestName: 'Paolo', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Chiara', guestSurname: 'Adami', guestAllergies: ''},
        {guestName: 'Leonardo', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Alessandro', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Cristina', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Franco', guestSurname: 'Monticelli', guestAllergies: ''},
        {guestName: 'Pier Paolo', guestSurname: 'don', guestAllergies: ''}, //TODO
        {guestName: 'Giuseppe', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Liliana', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Annamaria', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Franco', guestSurname: 'Cavallone', guestAllergies: ''},
        {guestName: 'Nicolò', guestSurname: 'Cavallone', guestAllergies: ''},
        {guestName: 'Daniele', guestSurname: 'Cavallone', guestAllergies: ''},
        {guestName: 'Matteo', guestSurname: 'Cavallone', guestAllergies: ''},
        {guestName: 'Chiara', guestSurname: 'Cavallone', guestAllergies: ''}, //TODO
        {guestName: 'Laura', guestSurname: 'Quaglia', guestAllergies: ''},
        {guestName: 'Andrea', guestSurname: 'Ferraris', guestAllergies: ''},
        {guestName: 'Giovanni', guestSurname: 'Ferraris', guestAllergies: ''},
        {guestName: 'Marco', guestSurname: 'Ferraris', guestAllergies: ''},
        {guestName: 'Sofia', guestSurname: 'Rivero', guestAllergies: ''},
        {guestName: 'Lucia', guestSurname: 'Serra', guestAllergies: ''},
        {guestName: 'Paolo', guestSurname: 'Venturini', guestAllergies: ''},
        {guestName: 'Teresa', guestSurname: 'Serra', guestAllergies: ''},
        {guestName: 'Francesco', guestSurname: 'Sturaro', guestAllergies: ''},
        {guestName: 'Alberto', guestSurname: 'Mazzucchelli', guestAllergies: ''},
        {guestName: 'Chiara', guestSurname: 'Del Ben', guestAllergies: ''},
        {guestName: 'Giacomo', guestSurname: 'Mazzucchelli', guestAllergies: ''},
        {guestName: 'Pietro', guestSurname: 'Salanitro', guestAllergies: ''},
        {guestName: 'Silvia', guestSurname: 'Chiaraviglio', guestAllergies: ''},
        {guestName: 'Michele', guestSurname: 'Serra', guestAllergies: ''},
        {/*guestName: 'Luca', guestSurname: 'Lojacono', guestAllergies: ''*/},
        {/*guestName: 'Moglie', guestSurname: 'Lojacono', guestAllergies: ''*/},
        {/*guestName: 'Pierluigi', guestSurname: 'Pezzini', guestAllergies: ''*/},
        {guestName: 'Stefano', guestSurname: 'Serra', guestAllergies: ''},
        {guestName: 'Marta', guestSurname: 'Saccaggi', guestAllergies: ''},
        {guestName: 'Caterina', guestSurname: 'Serra', guestAllergies: ''},
        {guestName: 'Marco', guestSurname: 'Baldini', guestAllergies: ''},
        {guestName: 'Giada', guestSurname: 'Germanò', guestAllergies: ''},
        {guestName: 'Gabriele', guestSurname: 'Puce', guestAllergies: ''},
        {guestName: 'Mariachiara', guestSurname: 'Ingo', guestAllergies: ''},
        {guestName: 'Chiara', guestSurname: 'Provale', guestAllergies: ''},
        {guestName: 'Ludivica', guestSurname: 'Unnia', guestAllergies: ''},
        {guestName: 'Andrea', guestSurname: 'Fiorentino', guestAllergies: ''},
        {guestName: 'Teresa', guestSurname: 'Guarnaccia', guestAllergies: ''},
        {guestName: 'Daniele', guestSurname: 'Rossetti', guestAllergies: ''},
        {guestName: 'Francesco', guestSurname: 'Beretta', guestAllergies: ''},
        {guestName: 'Giulia', guestSurname: 'Rizzi', guestAllergies: ''},
        {guestName: 'Paola', guestSurname: 'Saccone', guestAllergies: ''},
        {guestName: 'Davide', guestSurname: 'Salatino', guestAllergies: ''},
        {guestName: 'Angelica', guestSurname: 'Cirigliano', guestAllergies: ''},
        {guestName: 'Alberto', guestSurname: 'Scazzola', guestAllergies: 'Uova, Frumento'},
        {guestName: 'Marco', guestSurname: 'De Tommasi', guestAllergies: 'Martino'}
    ]
    
    let guestsNamesFull = guests.map(obj => obj.guestName)
    guestsNamesFull = guestsNamesFull.filter((caratteristica, index, array) => {
        return array.indexOf(caratteristica) === index
    })
    const [guestsNames, setGuestsNames] = useState(guestsNamesFull)
    let guestsSurnamesFull = guests.map(obj => obj.guestSurname)
    guestsSurnamesFull = guestsSurnamesFull.filter((caratteristica, index, array) => {
        return array.indexOf(caratteristica) === index
    })
    const [guestsSurnames, setGuestsSurnames] = useState(guestsSurnamesFull)
    const guestsAllergiesTmp = ['Grano', 'Lattosio', 'Uova']

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [allergies, setAllergies] = useState('')
    
    const [registered, setRegistered] = useState(false)
    
    
    function MatchingObjects( objects, text, section ) {
        const matchingObjects = objects.filter(obj => obj[section] === text);
        return matchingObjects
    }
    function autocompleteOtherFields(section, event, value){
        console.log('asdaaa', event.target, 'value', value)
        if (event.target.id != '') {
            let filteredGuests = MatchingObjects(guests, value, section)
            console.log('filteredGuests', filteredGuests)
            if (filteredGuests.length === 1){
                setName(filteredGuests[0]['guestName'])
                setSurname(filteredGuests[0]['guestSurname'])
            } else if (section == 'guestName'){
                setName(value)
                setGuestsSurnames(filteredGuests.map(obj => obj.guestSurname))
            } else if (section == 'guestSurname'){
                setSurname(value)
                setGuestsNames(filteredGuests.map(obj => obj.guestName))
            }
        } else {
            setName('')
            setGuestsNames(guestsNamesFull)
            setSurname('')
            setGuestsSurnames(guestsSurnamesFull)
            setAllergies('')
        }
    }

    
    const scriptUrl = "https://sheet.best/api/sheets/5172f5ed-5d5c-4a5e-84bb-afb8b360056a"

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log('dati invitato:', name, surname, allergies)
        let form = new FormData()
        form.append('Nome', name)
        form.append('Cognome', surname)
        form.append('Allergie', allergies)


        fetch(scriptUrl, {method: 'POST', body: form})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED", res)
            setRegistered(true)
        })
        .catch(err => {
            console.log(err)
            setRegistered(false)
        })
    }

    return(
        <div className="div_background_page" style={{textAlign:'-webkit-center'}}>
            <h2 className="square_title">E tu ci sarai?</h2>
            <div style={{backgroundImage: 'url(/pictures/singers_1.jpeg)', 
                         backgroundSize: 'contain',backgroundRepeat:'no-repeat',
                         height: '23vh',
                         width: '40vh',
                         margin:'0px 10px 10px 10px',
                         borderRadius:'20px'}}>
            </div>
            <div className="genericCard">
                <h3 className="square_title" style={{color:'#606366'}}>Le tue informazioni</h3>
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestName"
                    options={guestsNames}
                    value={name}
                    renderInput={(params) => <TextField {...params} label="Nome" />}
                    onChange={(event, newValue) => {autocompleteOtherFields('guestName', event, newValue)}}
                />
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestSurname"
                    options={guestsSurnames}
                    value={surname}
                    renderInput={(params) => <TextField {...params} label="Cognome" />}
                    onChange={(event, newValue) => {autocompleteOtherFields('guestSurname', event, newValue)}}
                />
                <TextField style={{margin:'0px 20px 20px 20px', width:'-webkit-fill-available'}} className="autocomplete" id="guestAllergies" label="Allergie" variant="outlined" onChange={(event) => {setAllergies(event.target.value)}} />
                {registered &&
                    <Alert severity="success">Sei registrato, vedi di esserci che ci teniamo tanto tanto. Baci!</Alert>
                }
                <Button variant="contained" color={registered? 'success' : 'primary'} onClick={handleSubmit} style={{marginBottom:'5px', marginTop:'25px'}}>Conferma</Button>
            </div>

        </div>
    )
}

export default SubmitPage