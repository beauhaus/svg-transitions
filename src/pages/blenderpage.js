import React, { useState } from 'react';
// import Blender from '../components/blender';
import styled from 'styled-components';
import AppNav from '../components/appnav'


const StyledP1 = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: auto;
    display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 8vh 10vh 1fr;
    justify-items: center;
    background: slategrey;
    font-family: 'Josefin Sans', sans-serif;

.btns-container {
    width: 100vw;
    height: 10vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-between;
    align-items: center;
    button {
        color: #fff;
        border: 1px solid #fff;
        background: transparent;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    .flipper {
        color: orangered;
        border: 1px solid orangered;
        background: lemonchiffon;
        border-radius: 5px;
        font-size: 1rem;
    }
}
    
   
    
`


const BlenderPage = () => {
    // const [bMode, setbMode] = useState("normal");
    // const [flip, setFlip] = useState("A");
    // const bModes = ['multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'difference', 'exclusion', 'luminosity', 'hue', 'saturation', 'color', 'normal'];

    // const modesClicker = (selectedMode) => {
    //     // console.log("btn Clicked!", selectedMode)
    //     return (
    //         setbMode(selectedMode)
    //     )
    // }
    const flipperHandler = (input) => {
        console.log("Flip!")
        // return (
        //     setFlip(flip === "A" ? "B" : "A")
        // )
    }
    return (
        <StyledP1>
            <AppNav />
            <div className="btns-container">
                <button className="flipper" onClick={flipperHandler}>Flipper</button>
                {/* {bModes.map((elem, idx) => <button key={idx} onClick={e => modesClicker(elem)}>{elem}</button>)} */}
            </div>
            {/* <Blender className="blender" flip={flip} bMode={bMode} /> */}
        </StyledP1>
    )
};

export default BlenderPage;

