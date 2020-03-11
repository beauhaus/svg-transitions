import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

const StyledAppNav = styled.div`
    height: auto;
    width: 100%;
    padding: 0.2%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    justify-content: space-between;
    align-content: center;
    a {
        height: auto;
        border: 1px solid  #ffddff;
        border-radius: 5px;
        color:  #f3d1b7;
        padding: 0.5%;
        text-align: center;
        box-shadow: 1px 1px 0px rgba(0,0,0,0.5);
        &:hover {
            color: #fff;
            border-color: #fff;
        }
}
    
`

const AppNav = ({to, linkstyles, linktxt}) => (
<StyledAppNav>
    <Link to='/'>home</Link>
    <Link to='/horizrollpage'>horiz roll</Link>
    <Link to='/blenderpage'>blender</Link>
    <Link to='/vertrollpage'>vert roll</Link>
    <Link to='/glitchpage'>glitches</Link>
    <a href="https://svg-transitions.netlify.com/">ONLINE</a>
</StyledAppNav>
)

export default AppNav; 

/* <Link to='/NEWPAGE'>NEWPAGE</Link> */
