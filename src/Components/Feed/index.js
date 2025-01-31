import { useContext, useEffect, useState, Component } from "react";
import { MobilePDFReader  } from 'react-read-pdf';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from '../../Components/Navigbar'
import "./feed.css";


export default class Feed extends Component{

  render(){
    let pagina=1;
    localStorage.setItem("pagina","5")
    function izquierda() {
        if(parseInt(localStorage.getItem("pagina"))>1){
            localStorage.setItem("pagina",(localStorage.getItem("pagina")-1).toString());
        }
        console.log(localStorage.getItem("pagina"));
    }
    return (
        <div>
            <Navbar/>
        <div className="carta">      
            <div className="pdf">
                <MobilePDFReader   url="http://localhost:3000/CACU.pdf" isShowHeader={false} scale={1.5}/>
            </div>
        </div>
        </div>
    )}
}