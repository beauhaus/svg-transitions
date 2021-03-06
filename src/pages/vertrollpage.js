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
    svg {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        .img-back {
            filter: grayscale(1);
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
            <button className="btn-toggle" onClick={btnClickHandler}>Toggle Effect</button>
            <VertRoll toggle={toggle} />
        </StyledVertRollPage>

    )
};

export default VertRollPage;
