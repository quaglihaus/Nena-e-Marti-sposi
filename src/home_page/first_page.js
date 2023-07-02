import { Autocomplete } from "@mui/material"
import {TextField} from "@mui/material";
import './home_page.css'

export function FirstPage() {

console.log('ciaoooo')

    return(
        <>
            <div style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #c2d0e1), url(/pictures/mountain_kiss_vextended_enhanced.jpg)', backgroundSize: 'cover',backgroundRepeat:'no-repeat', width: '100%', height: '100vh', textAlign:'-webkit-center', paddingTop:'10vh'}}>
                <h2 className="main_labels">ELENA E MARTINO</h2>
                <h5 className="main_labels">ANNUNCIANO CON GIOIA</h5>
                <h2 className="main_labels">IL LORO MATRIMONIO</h2>
                <h3 className="main_labels">30 Settembre 2023</h3>
            </div>
        </>
    )
}


export default FirstPage