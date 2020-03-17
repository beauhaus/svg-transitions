import React, { useState } from 'react';
import styled from 'styled-components';
import AppNav from '../components/appnav'
import Glitch from '../components/glitch';
import RGBGlitch from '../components/rgbglitch';
import BlockGlitch from '../components/blockglitch';
import ScreenTxt from '../components/screentxt';
import ScreenLoRes from '../components/scrnlores';
import RetroScrnTxt from '../components/retroscrntxt';


const StyledGlitchPage = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 10vh 1fr;
    justify-items: center;
    background: #927e89;
    font-family: 'Josefin Sans', sans-serif;
    button {
        width: 15vw;
        height: 4vh;
        border-radius: 14px;
        background: grey;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
    }
    .btn-toggle {
        width: 15vw;
        height: 3vh;
        border-radius: 14px;
        border: 1px solid orangered;
        color: whitesmoke;
        background: transparent;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    }
    .img-container {
        width: 50vw;
        height: 50vh;
        max-width: 700px;
        min-width: 600px;
        margin: 5vh auto;
        background: fuchsia;
        box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.5);
        position: relative;
    }
    .lores-container {
        width: 90vw;
        height: 60vh;
        max-width: 1000px;
        min-width: 800px;
        margin: 5vh auto;
        background: yellow;
        box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.5);
        position: relative;
    }
    .retrotxt-container {
        width: 90vw;
        height: 60vh;
        max-width: 1000px;
        min-width: 800px;
        margin: 5vh auto;
        background: fuchsia;
        box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.5);
        position: relative;
        text {
            font-size: 200px;
           font-family: "Time", serif;
           }
    }
    svg {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        // .img-back {
        //     filter: grayscale(1);
        // }
    }
    .txt-svg {
        // mix-blend-mode: lighten;
        // mix-blend-mode: overlay;
// mix-blend-mode: darken;
// mix-blend-mode: screen;  //✅
// mix-blend-mode: color-dodge;  //✅✅
// mix-blend-mode: color-burn; 
// mix-blend-mode: difference; //✅✅
mix-blend-mode: exclusion; //✅

// mix-blend-mode: luminosity;
// mix-blend-mode: hue;
// mix-blend-mode: saturation; //✅cool
// mix-blend-mode: color;
    }
   
`





const GlitchPage = () => {
    const [toggleGlitch, setToggleGlitch] = useState("off");
    const [toggleRGBGlitch, setToggleRGBGlitch] = useState("off");
    const [toggleBlockGlitch, setToggleBlockGlitch] = useState("off");
    const [toggleScrnTxt, setToggleScrnTxt] = useState("off");
    const [toggleScrnLoRes, setToggleScrnLoRes] = useState("off");
    const [toggleRetroScrnTxt, setToggleRetroScrnTxt] = useState("off");

    const btnGlitchHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggleGlitch(toggleGlitch === "off" ? "on" : "off")
        )
    }
    const btnRGBGlitchHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggleRGBGlitch(toggleRGBGlitch === "off" ? "on" : "off")
        )
    }
    const btnBlockGlitchHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggleBlockGlitch(toggleBlockGlitch === "off" ? "on" : "off")
        )
    }
    const btnScrnTxtHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggleScrnTxt(toggleScrnTxt === "off" ? "on" : "off")
        )
    }
    
    const btnScrnLoResHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggleScrnLoRes(toggleScrnLoRes === "off" ? "on" : "off")
        )
    }
    const btnRetroScrnTxtHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggleRetroScrnTxt(toggleRetroScrnTxt === "off" ? "on" : "off")
        )
    }

    return (

        <StyledGlitchPage>
            <AppNav />
            <button className="btn-toggle" onClick={btnGlitchHandler}>Toggle Effect</button>
            <Glitch toggle={toggleGlitch} />
            <button className="btn-toggle" onClick={btnRGBGlitchHandler}>Toggle Effect</button>
            <RGBGlitch toggle={toggleRGBGlitch} />
            <button className="btn-toggle" onClick={btnBlockGlitchHandler}>Toggle Effect</button>
            <BlockGlitch toggle={toggleBlockGlitch} />
            <button className="btn-toggle" onClick={btnScrnTxtHandler}>Toggle Effect</button>
            <ScreenTxt toggle={toggleScrnTxt} />  
            <button className="btn-toggle" onClick={btnScrnLoResHandler}>Toggle Effect</button>
            <ScreenLoRes toggle={toggleScrnLoRes} />

            <button className="btn-toggle" onClick={btnRetroScrnTxtHandler}>Toggle Effect</button>
            <RetroScrnTxt toggle={toggleRetroScrnTxt} />
        </StyledGlitchPage>

    )
};

export default GlitchPage;
