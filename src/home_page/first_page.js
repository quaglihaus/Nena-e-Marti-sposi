import { Autocomplete } from "@mui/material"
import {TextField} from "@mui/material";

export function FirstPage() {

console.log('ciaoooo')

const guests = [
    {name: 'Martino', surname: 'Quaglia', allergies: ''},
    {name: 'Elena', surname: 'Baritello', allergies: ''},
    {name: 'Alberto', surname: 'Scazzola', allergies: ''}
]

const guestsNameTmp = ['Martino', 'Elena', 'Alberto']

function autocompleteOtherFields(field){
    console.log('asdaaa')
}

    return(
        <div style={{backgroundImage: 'url(/pictures/mountain_kiss.jpeg)', width: '100%', height: '100vh'}}>
            ciaooooo1
            <Autocomplete
                disablePortal
                id="guestName"
                options={guestsNameTmp}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Name" />}
                onChange={(value) => {autocompleteOtherFields(value)}}
            />
            <Autocomplete
                disablePortal
                id="guestSurname"
                options={guestsNameTmp}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Surname" />}
                onChange={(value) => {autocompleteOtherFields(value)}}
            />
            <Autocomplete
                disablePortal
                id="guestAllergies"
                options={guestsNameTmp}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Allergies" />}
                onChange={(value) => {autocompleteOtherFields(value)}}
            />
        </div>
    )
}


export default FirstPage