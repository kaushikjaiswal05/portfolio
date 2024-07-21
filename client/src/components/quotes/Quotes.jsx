import React from 'react'
import './quotes.css'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

function Quote() {
  return (
    <div className="quote">
        <p>The only way to do great work is to love what you do.</p>
        <h1>are you ready to start your project now?</h1>
        <button className="quote-btn"><ModeEditOutlineIcon style={{marginRight: "8px", fontSize: "15px"}}/><span style={{position: "relative", bottom: "4px"}}>Get Quotes</span></button>
    </div>
  )
}

export default Quote