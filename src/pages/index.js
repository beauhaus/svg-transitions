import React from 'react';
import AppNav from '../components/appnav'
import '../styles/index.scss'
import styled from 'styled-components';

const StyledIdx = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    background: linear-gradient( 25deg, #96ada8 0%, #6c837e 100%);
    padding: 10px;
    
`;
// const activeStyles = {
//     background: "white",
//     color: "blue"
// }
const IndexPage = () => {
    return (
<StyledIdx className="styledindex">
    <AppNav  />
</StyledIdx>
    )
}

export default IndexPage;
