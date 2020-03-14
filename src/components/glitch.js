import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'

const StyledGlitch = styled.svg`
    text {
        font-size: 200px;
        font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
        // fill: #eee;
    }
    .warp-grp {
        mix-blend-mode: multiply;

        text {
            fill: rgba(255,0,0,0.9);
        }
    }
    .bot-grp {
        mix-blend-mode: color-burn;

        text {
            fill: rgba(0,255,0,1);
            // transform: scale(1, 1.2);
        }
    }
    .top-grp {
        mix-blend-mode: color-burn;
        text {
            fill: hsla(231, 99%, 31%, 0.8);

            // transform: scale(1.3, 1.3);
            transform: scale(0.6, 2);
            
            transform-origin: 50% 50%;
        }
    }
`;

const Glitch = ({ toggle }) => {
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

            <StyledGlitch
                viewBox="0 0 500 500" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none">

                <filter id="midSliceFilter">
                    <description>warp filter 1</description>
                    <feTurbulence baseFrequency="0.015" numOctaves="1" result="turbulence_3" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence_3" scale="10" result="warp" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>

                <clipPath id="midslice">
                    <rect x="0" y="110" width="500" height="125" />
                </clipPath>
                <clipPath id="topslice">
                    <rect x="0" y="30" width="500" height="600" />
                </clipPath>
                <clipPath id="lowerslice">
                    <rect x="0" y="250" width="500" height="40" />
                </clipPath>
                <path className="bg" fill="#bcbcbc" d="M0 0h500v500H0z" width="100%" height="100%" />

                <g className="warp-grp" clipPath="url(#midslice)" filter="url(#midSliceFilter)">
                    <text x="15" y="290">YES</text>
                </g>
                <text className="txt-main" fill="#fff" fillOpacity="0.9" x="30" y="290">YES</text>
                <g className="warp-grp-2 bot-grp" clipPath="url(#lowerslice)"  filter="url(#midSliceFilter)">
                    {/* <path fill="#bcbcbc" d="M0 0h500v500H0z" /> */}
                    <text x="46" y="290" >YES</text>
                </g>
                <g className="warp-grp-2 top-grp" clipPath="url(#topslice)"  filter="url(#midSliceFilter)">
                    <text x="22" y="390" >YES</text>
                </g>
            </StyledGlitch>

        </div>

    );
}

export default Glitch;
