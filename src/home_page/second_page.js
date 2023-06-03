import { Autocomplete } from "@mui/material"
import {TextField} from "@mui/material";
import './home_page.css'

export function SecondPage() {

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
        <div style={{backgroundColor:'aliceblue', backgroundSize: 'contain', width: '100%', height: '100vh', textAlign:'-webkit-center', paddingTop:'20px'}}>
            <h5 style={{fontFamily: 'Times', color:'darkblue', padding:'0px'}}>LE TUE INFORMAZIONI</h5>
            <div style={{backgroundColor: 'white', padding: '5px', margin:'0px 10px 10px 10px'}}>
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestName"
                    options={guestsNameTmp}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Name" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestSurname"
                    options={guestsNameTmp}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Surname" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
                <Autocomplete className="autocomplete"
                    disablePortal
                    id="guestAllergies"
                    options={guestsNameTmp}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Allergies" />}
                    onChange={(value) => {autocompleteOtherFields(value)}}
                />
            </div>  
        </div>
    )
}

export default SecondPage