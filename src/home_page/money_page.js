import React, { useState } from "react"
import { Autocomplete, TextField, Button } from "@mui/material";
import {isUndefined, isNull} from "lodash"
import './home_page.css'

export function MoneyPage() {


    return(
        

        <div className="div_background_page" style={{textAlign:'-webkit-center'}}>
            <div className="genericCard">
                <div style={{backgroundImage: 'url(/pictures/hands.jpeg)', 
                         backgroundSize: 'contain', backgroundRepeat:'no-repeat',
                         width: '30vh',
                         height: '20vh',
                         margin:'0px 10px 10px 10px'}}/>
                <h3 className="square_title" style={{color:'#606366'}}>Il regalo siete voi, che ci accompagnate nella nostra vita!</h3>
                <h4 className="square_title" style={{color:'#606366'}}>Io (Martino) non merito niente, però se volete regalare a Nena qualcosa in più.. Nessuna lista nozze!</h4>
                <h4 className="square_title" style={{color:'#606366'}}>Il vostro contributo per rendere indimenticabile la nostra luna di miele sarà sicuramente gradito!</h4>
                <h2 className="square_title" style={{color:'#606366', marginTop:'6vh'}}>Intestatario:</h2>
                <h2 className="square_title" style={{color:'#606366', marginTop:'0'}}>Martino Quaglia</h2>
                <h2 className="square_title" style={{color:'#606366', marginTop:'1vh'}}>IBAN:</h2>
                <h4 className="square_title" style={{color:'#606366', marginTop:'0'}}>IT31F0306901612100000008448</h4>
                <Button variant="contained" style={{marginBottom:'5px', marginTop:'10px', backgroundColor:'#64748B'}} onClick={() => {navigator.clipboard.writeText('IT31F0306901612100000008448')}}>COPIA</Button>
            </div>
        </div>
    )
}

export default MoneyPage