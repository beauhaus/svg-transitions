import React, { useEffect, useRef } from 'react'
import { gsap, Power1 } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledBlockGlitch = styled.svg`
    text {
        font-size: 200px;
        font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
        // fill: #eee;
    }
    
`;

const BlockGlitch = ({ toggle }) => {
    console.log("from slider: toggle=", toggle)

    let chunkMid = useRef(null)
    let chunkTop = useRef(null)
    let chunkBot = useRef(null)
  

      useEffect(() => {
          console.log("Chunk", chunkMid)

        gsap.set(chunkTop, { x:0})
        gsap.set(chunkMid, { x:0})
        gsap.set(chunkBot, { x:0})
    

        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
        // .to(chunkMid, { duration: 1, x: '30', ease:Power1.easeInOut })
        .to(chunkMid, { duration: 0.04, x: 10 })
        .to(chunkMid, { duration: 0.04, x: -20 })
            .to(chunkBot, { duration: 0.04, x: -30 })
            .to(chunkTop, { duration: 0.04, x: -20 })
            .to(chunkTop, { duration: 0.04, x: 10 })
            .to(chunkMid, { duration: 0.04, x: 0 })
            .to(chunkTop, { duration: 0.04, x: 0 })
            .to(chunkBot, { duration: 0.04, x: -50 })
            .to(chunkBot, { duration: 0.04, x: 10 })
            .to(chunkBot, { duration: 0.04, x: 0 })
            
           


      }, [toggle])
    return (
        <div className="img-container">

            <StyledBlockGlitch
                viewBox="0 0 500 500" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                preserveAspectRatio="none">
                <path id="bg" fill="slategrey" d="M0 0h500v500H0z" width="100%" height="100%" />


                <filter id="shft-chunk-rt-filter" filterUnits="userSpaceOnUse">
                    <feOffset dx="10" dy="0" />
                </filter>
               

                <clipPath id="chunk-top">
                    <rect x="0" y="170" height="5" width="100%" />
                </clipPath>
                <clipPath id="chunk-mid">
                    <rect x="0" y="200" height="20" width="100%"  />
                </clipPath>
                <clipPath id="chunk-bot">
                    <rect x="0" y="270" height="4" width="100%" />
                </clipPath>

                <text id="txt-main"  fill="#fff" x="10" y="290">YES</text>

                <g  clipPath="url(#chunk-top)" ref={elem => chunkTop = elem}>
                    <rect x="0" y="0" width="100%" height="100%" fill="slategrey" />
                    <text fill="#fff" x="10" y="290">YES</text>
                </g>
                <g clipPath="url(#chunk-mid)" ref={elem => chunkMid = elem}>
                    <rect x="0" y="0" width="100%" height="100%" fill="slategrey" />
                    <text fill="#fff" x="10" y="290">YES</text>
                </g>

                <g clipPath="url(#chunk-bot)"  ref={elem => chunkBot = elem}>
                    <rect x="0" y="0" width="100%" height="100%" fill="slategrey" />
                    <text fill="#fff" x="10" y="290" >YES</text>
                </g>
            </StyledBlockGlitch>

        </div>

    );
}

export default BlockGlitch;
