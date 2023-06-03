import { Autocomplete } from "@mui/material"
import {TextField} from "@mui/material";
import './home_page.css'

export function FirstPage() {

console.log('ciaoooo')

    return(
        <>
            <div style={{backgroundImage: 'url(/pictures/mountain_kiss.jpeg)', backgroundSize: 'contain', width: '100%', height: '100vh', textAlign:'-webkit-center', paddingTop:'40px', fontFamily: ''}}>
                <h2 className="main_labels">ELENA E MARTINO</h2>
                <h4 className="main_labels">ANNUNCIANO CON GIOIA</h4>
                <h2 className="main_labels">IL LORO MATRIMONIO</h2>
            </div>
        </>
    )
}


export default FirstPage