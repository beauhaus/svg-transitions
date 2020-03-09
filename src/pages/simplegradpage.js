import React, { useState } from 'react';
import styled from 'styled-components';
import AppNav from '../components/appnav'
import SimpleGrad from '../components/simplegrad';


const StyledGradPage = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
    display: grid;
    justify-items: center;
    grid-template-rows: 5vh 10vh 1fr 20vh;
    background: #927e89;
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


const SimpleGradPage = () => {

    const [toggle, setToggle] = useState("off");
    const btnClickHandler = () => (
        // console.log("btn Clicked!")
        setToggle(toggle === "off" ? "on" : "off")

    )

    return (

        <StyledGradPage>
            <AppNav />
            <button onClick={btnClickHandler}>Toggle Effect</button>
            <SimpleGrad toggle={toggle} />
        </StyledGradPage>

    )
};

export default SimpleGradPage;
