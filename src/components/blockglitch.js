import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledBlockGlitch = styled.svg`
    text {
        font-size: 200px;
        font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
        fill: #eee;
    }
   
       
       #txt-main {
          fill: #fff;
       }
`;

const BlockGlitch = ({ toggle }) => {
    console.log("from slider: toggle=", toggle)

    //   let tailGlitch = useRef(null) // 0%
    //   let centerGlitch = useRef(null) // 10%
    //   let headGlitch = useRef(null) // 20%

    //   useEffect(() => {

    //     gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
    //     gsap.set(centerGlitch, { attr: { 'offset': '5%' } })
    //     gsap.set(headGlitch, { attr: { 'offset': '10%' } })

    //     const tl = gsap.timeline({ defaults: { delay: 0 } })
    //     tl.to(headGlitch, { duration: 4, attr: { 'offset': '100%' } })
    //       .to(centerGlitch, { duration: 4, attr: { 'offset': '95%' } }, '-=4')
    //       .to(tailGlitch, { duration: 4, attr: { 'offset': '90%' } }, '-=4')


    //   }, [toggle])
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

                <path id="bg" fill="slategrey" d="M0 0h500v500H0z" width="100%" height="100%" />

                <filter id="shft-chunk-rt-filter" filterUnits="userSpaceOnUse">
                    <feOffset dx="10" dy="0" />
                </filter>
                <filter id="shft-chunk-lt-filter" filterUnits="userSpaceOnUse">
                    <feOffset dx="-10" dy="0" />
                </filter>
                <filter id="shft-chunk-rt-bot-filter" filterUnits="userSpaceOnUse">
                    <feOffset dx="15" dy="29" />
                </filter>

                <clipPath id="chunk-top">
                    <rect x="0" y="170" height="5" width="100%" />
                </clipPath>
                <clipPath id="chunk-mid">
                    <rect x="0" y="200" height="20" width="100%" />
                </clipPath>
                <clipPath id="chunk-bot">
                    <rect x="0" y="270" height="4" width="100%" />
                </clipPath>

                <text id="txt-main" fill="#fff" x="10" y="290">YES</text>

                <g filter="url(#shft-chunk-rt-filter)" clip-path="url(#chunk-top)">
                    <rect x="0" y="0" width="100%" height="100%" fill="slategrey" />
                    <text fill="#fff" x="10" y="290">YES</text>
                </g>
                <g filter="url(#shft-chunk-lt-filter)" clip-path="url(#chunk-mid)">
                    <rect x="0" y="0" width="100%" height="100%" fill="slategrey" />
                    <text fill="#fff" x="10" y="290">YES</text>
                </g>

                <g filter="url(#shft-chunk-rt-bot-filter)" clip-path="url(#chunk-bot)" >
                    <rect x="0" y="0" width="100%" height="100%" fill="slategrey" />
                    <text fill="#fff" x="10" y="290" >YES</text>
                </g>
            </StyledBlockGlitch>

        </div>

    );
}

export default BlockGlitch;
