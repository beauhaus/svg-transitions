import React, { useState } from 'react';
// import React from 'react';

import HorizRoll from '../components/horizroll';
import styled from 'styled-components';
import AppNav from '../components/appnav'


const StyledHorizRollPage = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
margin: auto;
display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: auto 10vh 1fr;
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
        &.btn-toggle {
            width: 15vw;
            height: 3vh;
            border-radius: 14px;
            color: whitesmoke;
            background: transparent;
            box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
            border: 1px solid orangered;
        }
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

        <StyledHorizRollPage>
            <AppNav/>
            <section>
                <div className="description">
                    <h1>Description</h1>
                    <p>Simple mask</p>
                </div>
            </section>
            <button className="btn-toggle" onClick={btnClickHandler}>Toggle Effect</button>
            <HorizRoll toggle={toggle} />
        </StyledHorizRollPage>
    )
};

export default HorizRollPage;

