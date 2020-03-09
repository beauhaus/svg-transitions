import React, { useState } from 'react';
import styled from 'styled-components';
import AppNav from '../components/appnav'
import VertRoll from '../components/vertroll';


const StyledVertRollPage = styled.div`
    width: 100%;
    height: 100vh;
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
    svg {
        margin: auto;
        // border: 1px solid red;
        height: auto;
        width: 40vw;
        image {
            width: 100%;
        }
    }
`


const VertRollPage = () => {
    const [toggle, setToggle] = useState("off");
    const btnClickHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggle(toggle === "off" ? "on" : "off")
        )
    }

    return (

        <StyledVertRollPage>
            <AppNav />
            <button onClick={btnClickHandler}>Toggle Effect</button>
            <VertRoll toggle={toggle} />
        </StyledVertRollPage>

    )
};

export default VertRollPage;
