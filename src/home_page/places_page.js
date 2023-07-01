import React, { useState } from "react"
import { Autocomplete, TextField, Button } from "@mui/material";
import {isUndefined, isNull} from "lodash"
import './home_page.css'


export function PlacesPage() {
    
    function goToMaps(link){
        window.open(link, '_blank');
    }

    return(
        <div className="div_background_page" style={{textAlign:'-webkit-center'}}>
            <h2 className="square_title">Dove?</h2>
                <div className="genericCard">
                    <div style={{backgroundImage: 'url(/pictures/church_icon.png)', backgroundSize: 'contain',backgroundRepeat:'no-repeat', height:'20vh', width:'20vh'}} ></div>
                    <h4 style={{color:'#606366'}}>Chiesa Parrocchiale di San Martino</h4>
                    <h5 style={{color:'#606366'}}>Via Piazza Municipio, 2, 12064 La Morra CN</h5>
                    <Button variant="contained" style={{marginBottom:'5px', marginTop:'25px', backgroundColor:'#64748B'}} onClick={() => {goToMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.636066398615!2d7.932467667291077!3d44.63723042565746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2ae6c40ea2281%3A0x4f155bf8019f89d9!2sChiesa%20Parrocchiale%20di%20San%20Martino!5e0!3m2!1sit!2sit!4v1686485632841!5m2!1sit!2sit')}}>Portami qui</Button>
                </div>
                <div className="genericCard">
                    <div style={{backgroundImage: 'url(/pictures/location_icon.png)', backgroundSize: 'contain',backgroundRepeat:'no-repeat', height:'20vh', width:'20vh'}} ></div>
                    <h4 style={{color:'#606366'}}>MonteOliveto di Casa'</h4>
                    <h5 style={{color:'#606366', marginBottom:'20px'}}>Frazione Casà, 1, 12066 Monticello d'Alba CN</h5>
                    <Button variant="contained" style={{marginBottom:'5px', marginTop:'25px', backgroundColor:'#64748B'}} onClick={() => {goToMaps('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.555292739259!2d7.920380876198442!3d44.70827747107162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2ad2214e4d77d%3A0x7a1de040cfd95f96!2sMonteOliveto%20di%20Casa!5e0!3m2!1sit!2sit!4v1688224669211!5m2!1sit!2sit')}}>Portami qui</Button>
                </div>
        </div>
    )   
}

export default PlacesPage


