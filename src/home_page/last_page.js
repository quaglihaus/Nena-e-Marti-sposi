import React, { useState } from "react"
import { Autocomplete, TextField, Button } from "@mui/material";
import {isUndefined, isNull} from "lodash"
import './home_page.css'

export function LastPage() {


    return(
        
        <div className="div_background_page" style={{textAlign:'-webkit-center', paddingBottom:'10vh'}}>
            <div className="genericCard" style={{padding:'1vh', backgroundImage: 'url(/pictures/nena_e_marti_2.jpeg)', 
                         backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', minHeight:'60vh', maxWidth:'800px'}}>
            <h1 className="main_labels" style={{fontSize: '50px', paddingTop:'40vh', marginLeft:'60px'}}>a presto!</h1>
            </div>
        </div>
    )
}

export default LastPage