import React, { useState } from 'react';
// import React from 'react';

import HorizRoll from '../components/horizroll';
import styled from 'styled-components';
import AppNav from '../components/appnav'


const StyledP1 = styled.div`
    height: 100vh;
    overflow: hidden;
    margin: auto;
    display: grid;
    justify-items: center;
    background: slategrey;
    font-family: 'Josefin Sans', sans-serif;
.description {
    width: 70vw;
    margin-top: 1vh;
    margin: 8vh auto 0;
    border: 1px solid orange;
    h1 {
        font-size: 1.2rem;
        color: whitesmoke;
        font-weight: 400;
        text-align: center;
    }
    p {
        font-weight: 400;
        color: #fff;
    }
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
    button {
        margin-top: 10px;
        width: 15vw;
        height: 3vh;
        border-radius: 14px;
        color: whitesmoke;
        border-color: whitesmoke;
        background: transparent;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    }
`


const HorizRollPage = () => {
    const [toggle, setToggle] = useState("off");
    const btnClickHandler = () => {
        console.log("btn Clicked!")
        return (
            setToggle(toggle === "off" ? "on" : "off")
        )
    }

    return (

        <StyledP1>
            <AppNav/>
            <section>
                <div className="description">
                    <h1>Description</h1>
                    <p>Simple mask</p>
                </div>
            </section>
            <button onClick={btnClickHandler}>Toggle Effect</button>
            <HorizRoll toggle={toggle} />
        </StyledP1>
    )
};

export default HorizRollPage;

